const manageAllErrors = (res, err) => {
  if (err.name === 'NotFoundError') {
    res.status(404).json(err.message)
  } else if (err.name === 'ValidationError') {
    res.status(400).json(`${err.message}\n${err.extra}`)
  } else {
    res.status(500).json(err)
  }
}

module.exports = manageAllErrors
