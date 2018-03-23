function pileOuFace() {
  if (Math.random() > 0.5) {
    return 'pile';
  }

  return 'face';
}

module.exports = pileOuFace;