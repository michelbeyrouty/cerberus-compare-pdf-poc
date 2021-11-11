const { fromPath } = require('pdf2pic');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

main();




async function main(){
  const options = {
    density: 100,
    saveFilename: 'convertedOk',
    savePath: './images',
    format: 'png',
    width: 600,
    height: 600,
  };
  const okSamplefilePath = './files/ok_sample.pdf';
  const blankFilePath = './files/blank.pdf';
  const pageToConvertAsImage = 1;
  const isBase64 = false;

  console.log('Converting PDF to image -> ' + okSamplefilePath);
  await fromPath(okSamplefilePath, options)(pageToConvertAsImage, isBase64);

  console.log('Converting PDF to image -> ' + blankFilePath);
  options.saveFilename = 'convertedBlank';
  await fromPath(blankFilePath, options)(pageToConvertAsImage, isBase64);

  // Calculate pixel difference

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

