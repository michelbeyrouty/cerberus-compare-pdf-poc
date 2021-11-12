const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

async function calcualtePixelDifference(imagePath1, imagePath2){

  const referenceImage = PNG.sync.read(fs.readFileSync(imagePath1));
  const Image = PNG.sync.read(fs.readFileSync(imagePath2));

  const { width, height } = referenceImage;

  const diff = new PNG( {
    width,
    height,
  } );

  const numDiffPixelsWithBlank = pixelmatch(referenceImage.data, Image.data, diff.data, width, height, {
    threshold: 0.1,
  });


  console.log(`Number of different pixels between ${imagePath1} and ${imagePath2} is ${numDiffPixelsWithBlank} \n`);
}


module.exports = {
  calcualtePixelDifference,
};
