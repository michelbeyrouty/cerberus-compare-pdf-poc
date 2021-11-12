const { fromPath } = require('pdf2pic');


async function convertPdfToImage(filePath, saveFilename){

  const options = {
    density: 100,
    saveFilename,
    savePath: './images',
    format: 'png',
    width: 600,
    height: 600,
  };
  const pageToConvertAsImage = 1;
  const isBase64 = false;

  console.log(`Converting PDF \"${filePath}\" to image \"${saveFilename}\" \n `);
  await fromPath(filePath, options)(pageToConvertAsImage, isBase64);

}


module.exports = {
  convertPdfToImage,
};
