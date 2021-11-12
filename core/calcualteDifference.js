const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');


async function calcualteDifference(){

  const blankReferenceImage = PNG.sync.read(fs.readFileSync('./images/blank.png'));
  const convertedOkImage = PNG.sync.read(fs.readFileSync('./images/convertedOk.1.png'));
  const convertedBlankImage = PNG.sync.read(fs.readFileSync('./images/convertedBlank.1.png'));

  const { width, height } = blankReferenceImage;

  const diff = new PNG( {
    width,
    height,
  } );

  const numDiffPixelsWithBlank = pixelmatch(blankReferenceImage.data, convertedBlankImage.data, diff.data, width, height, {
    threshold: 0.1,
  });

  const numDiffPixelsWithOk = pixelmatch(blankReferenceImage.data, convertedOkImage.data, diff.data, width, height, {
    threshold: 0.1,
  });

  console.log('numDiffPixels with ok_sample:  ' + numDiffPixelsWithBlank);
  console.log('numDiffPixels with blank:  ' + numDiffPixelsWithOk);

}


module.exports = {
  calcualteDifference,
};
