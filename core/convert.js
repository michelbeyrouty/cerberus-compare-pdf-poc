const { fromPath } = require('pdf2pic');


async function convert(){

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

}


module.exports = {
  convert,
};
