const { fromPath } = require('pdf2pic');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

// Convert PDF to image
const options = {
  density: 100,
  saveFilename: 'converted',
  savePath: './images',
  format: 'png',
  width: 600,
  height: 600,
};
const storeAsImage = fromPath('./files/ok_sample.pdf', options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log('Page 1 is now converted as image');

  //Calculate pixel difference

  const blankImage = PNG.sync.read(fs.readFileSync('./images/blank.png'));
  const convertedOkImage = PNG.sync.read(fs.readFileSync('./images/converted.1.png'));

  const { width, height } = blankImage;

  const diff = new PNG( {
    width,
    height,
  } );

  const numDiffPixelsWithBlank = pixelmatch(blankImage.data, convertedOkImage.data, diff.data, width, height, {
    threshold: 0.1,
  });

  const numDiffPixelsWithOk = pixelmatch(blankImage.data, img2.data, diff.data, width, height, {
    threshold: 0.1,
  });

  console.log('numDiffPixels with ok_sample:  ' + numDiffPixelsWithBlank);
  console.log('numDiffPixels with blank:  ' + numDiffPixelsWithOk);

  return numDiffPixels;
});
