const express = require('express')
const router = express.Router()

const artdata = [
    {
        id: 101,
        name: 'johnson',
        adress: 'bus'
    },
    {
        id: 102,
        name: 'piyush',
        adress: 'bus stand'
    },
    {
        id: 103,
        name: 'jagu',
        adress: 'padarvadi'
    }
]

router.get("/arts", (req, res) => {
    res.send(artdata)
})

//singe product
router.get("/arts/:id", (req, res) => {
    const artId = parseInt(req.params.id)
    const singleArt = artdata.find(item => item.id === artId)

    if (!artId) {
        return res.status(404).json({ message: "Single artdata was not found" })
    } else {
        res.json(singleArt)
    }
}
)

module.exports = router