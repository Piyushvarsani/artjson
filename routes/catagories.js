const express = require('express')
const router = express.Router()

const catagories = ['oil painting', 'digital download', 'wood art', 'Digital print', 'Wall Hanging', 'Signs']

router.get("/catagories", (req, res) => {
    res.send(catagories)
})

module.exports = router