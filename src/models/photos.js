var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

function makePhoto(filePath, width, height, newPath, success, error){
  gm(filePath)
  .resize(width, height, '!')
  .write(newPath, function(err){
    if (!err) {
      success('Image Created')
    } else{
      error('Could Not Create Image')
    }
  })
}

function makePhotoNoRatio(filePath, width, height, newPath, success, error){
  gm(filePath)
  .resize(width, height)
  .write(newPath, function(err){
    if (!err) {
      success('Image Created')
    } else{
      error('Could Not Create Image')
    }
  })
}

module.exports = { makePhoto, makePhotoNoRatio }
