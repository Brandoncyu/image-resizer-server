var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

function makePhoto(filePath, width, height, newPath){
  gm(filePath)
  .resize(width, height, '!')
  .write(newPath, function(err){
    if (!err) console.log('done')
  })
}

function makePhotoNoRatio(filePath, width, height, newPath){
  gm(filePath)
  .resize(width, height)
  .write(newPath, function(err){
    if (!err) console.log('done')
  })
}

module.exports = { makePhoto, makePhotoNoRatio }
