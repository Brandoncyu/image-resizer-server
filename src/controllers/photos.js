const model = require('../models/photos')

function getPhoto(req, res, next){
  const filePath = req.path

  const width = req.body.width || null
  const height = req.body.height || null

  let fileSplit = filePath.split('.')
  let secondToLast = fileSplit.length - 2
  fileSplit[secondToLast] = fileSplit[secondToLast] + '-resizeOption'
  const newPath = fileSplit.join('.')

  let success = (response) =>{
    res.status(201).send({status: 201, message: response})
  }

  let error = (response)=> {
    next({status: 404, message: response})
  }

  if (width === null || height === null){
    model.makePhotoNoRatio(filePath, width, height, newPath, success, error)
  } else {
    model.makePhoto(filePath, width, height, newPath, success, error)
  }
}

module.exports = {
  getPhoto
}
