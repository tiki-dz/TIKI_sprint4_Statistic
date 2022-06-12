const { City } = require('../models')

function add58wilaya (req, res) {
  try {
    const data = req.body
    data.forEach(async element => {
      const tmp = await City.create({
        name: element.nom,
        nbUser: 0
      })
      console.log(tmp)
    })
    return res.status(200).send().json({ success: true, message: 'success' })
  } catch (error) {
    return res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

// setters

module.exports = { add58wilaya }
