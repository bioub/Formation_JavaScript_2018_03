const fs = require('fs-extra');

async function createDist(distPath) {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
  console.log('dist created');
}

// 2 stratégies
// sans mock (vérifier que le dossier existe), pas idéal

// avec
// Mock de fs (require('fs') dans 2 fichiers dans la même ref)
// idem console
// 2 mocks et 3 spies
// (regarder dans sinon .resolves)

module.exports = createDist;
