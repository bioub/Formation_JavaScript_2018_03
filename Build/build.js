const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function createDist() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
  console.log('dist created');
}

async function buildJs() {
  const [bufferHorloge, bufferIndex] = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = bufferHorloge.toString() + bufferIndex.toString();

  if (argv.minify) {
    const result = UglifyJS.minify(content);

    if (result.error) {
      throw result.error;
    }

    content = result.code;
  }

  await fs.appendFile(appJsDistPath, content);
  console.log('js built');
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  //content = content.replace('<script src="./js/horloge.js"></script>', '');
  //content = content.replace('<script src="./js/index.js"></script>', '<script src="./app.js"></script>');


  content = content.replace(/<script.*>[\s\S]*<\/script>/, '<script src="./app.js"></script>');

  // (ES9)
  // content = content.replace(/<script.*>.*<\/script>/s, '<script src="./app.js"></script>');

  await fs.appendFile(indexHtmlDistPath, content);
  console.log('html built');
}

async function build() {
  await createDist();

  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.log('build done');
}

build()
  .catch((err) => console.log(err));
