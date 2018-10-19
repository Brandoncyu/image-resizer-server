const model = require('../models/photos')

function getPhoto(req, res, next){
  const filePath = req.path

  const width = req.body.width || null
  const height = req.body.height || null

  let fileSplit = filePath.split('.')
  let secondToLast = fileSplit.length - 2
  fileSplit[secondToLast] = fileSplit[secondToLast] + '-resizeOption'
  const newPath = fileSplit.join('.')

  if (width === null || height === null){
    let data = model.makePhotoNoRatio(filePath, width, height, newPath)
    res.send({data})
  } else {
    let data = model.makePhoto(filePath, width, height, newPath)
    res.send({data})
  }
}

module.exports = {
  getPhoto
}
