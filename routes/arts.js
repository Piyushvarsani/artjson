const express = require('express')
const router = express.Router()

const artdata = [
    {
        id: 1,
        name: 'oil painting',
        Disctiption: 'Brilliant original Painting on canvas,Abstract Boho 3D wall art, Fancy landscape,MinimaList living room acrylic painting,Hand painted art',
        catagory: 'oil painting',
        price: 7000,
        review: 4.8,
        thumbnail: 'https://i.etsystatic.com/34464453/r/il/5b7210/4223138682/il_794xN.4223138682_8ehg.jpg',
        photos: ['https://i.etsystatic.com/34464453/r/il/2d2b2f/4268422717/il_794xN.4268422717_2rlc.jpg', "https://i.etsystatic.com/34464453/r/il/dded2e/5903682880/il_794xN.5903682880_cyfk.jpg"]
    },
    {
        id: 2,
        name: 'Forest oil painting',
        Disctiption: 'Large Abstract Forest Oil Painting On Canvas,Green Tree Wall Art,Original Nature Landscape Painting,Custom Painting,Modern Living Room Decor',
        catagory: 'oil painting',
        price: 8128,
        review: 5,
        thumbnail: 'https://i.etsystatic.com/32811653/r/il/af1a10/5445598292/il_794xN.5445598292_slco.jpg',
        photos: ['https://i.etsystatic.com/32811653/r/il/2ab37e/4975284664/il_794xN.4975284664_kfkm.jpg', "https://i.etsystatic.com/32811653/r/il/fcd73d/4975284668/il_794xN.4975284668_l7la.jpg"]
    },
    {
        id: 3,
        name: 'Mastumosos Hogi frog',
        Disctiption: "Japanese Matsumoto Hoji Frog Set of 3, Vintage Frog Woodblock Poster, Ukiyo-e Frog Print, Japanese Frog Printable Wall Art, Digital Download Vintage ukiyo-e art that features abstract japanese frogs. Perfect dining or living room decor.",
        catagory: 'digital download',
        price: 479,
        review: 4.5,
        thumbnail: 'https://i.etsystatic.com/37463746/r/il/27b5d9/4948895981/il_794xN.4948895981_667n.jpg',
        photos: ['https://i.etsystatic.com/37463746/r/il/66f2ea/5681735474/il_794xN.5681735474_1mpw.jpg', "https://i.etsystatic.com/37463746/r/il/ff16ea/5681735626/il_794xN.5681735626_s30z.jpg"]
    },
    {
        id: 4,
        name: 'Boho Style Art Prints',
        Disctiption: "Mid Century Art Prints Set of 3, Neutral Modern Wall Art Decor, Minimalist Digital Prints, Boho Style Art Prints, Orange, Black Rainbows",
        catagory: 'digital download',
        price: 509,
        review: 4.5,
        thumbnail: 'https://i.etsystatic.com/18676713/r/il/7ce995/4415147915/il_794xN.4415147915_n4h2.jpg',
        photos: ['https://i.etsystatic.com/18676713/r/il/ba092e/5205787493/il_794xN.5205787493_78aj.jpg', "https://i.etsystatic.com/18676713/r/il/cbf938/3553890621/il_794xN.3553890621_5li0.jpg"]
    },
    {
        id: 5,
        name: 'Multi layer Wooden art',
        Disctiption: "STEREOWOOD Astral Multi-Layer Wooden Wall Art, Stereoscopic 3D Decor, Living Room Decor, Bedroom Decor, Laser Cut Arts and Crafts",
        catagory: 'wood art',
        price: 18439,
        review: 4.7,
        thumbnail: 'https://i.etsystatic.com/17297081/r/il/c1b8fd/3652240278/il_794xN.3652240278_982z.jpg',
        photos: ['https://i.etsystatic.com/17297081/r/il/bcbe53/3652239568/il_794xN.3652239568_kzr5.jpg', "https://i.etsystatic.com/17297081/r/il/25a046/1626841312/il_794xN.1626841312_q9zj.jpg"]
    },
    {
        id: 6,
        name: 'Lotus Multi-Layer Wall Art',
        Disctiption: "STEREOWOOD Koi and Lotus Multi-Layer Wall Art, Large Geometric Wood Wall Art, Mandala Laser Cut, 3D Wood Wall Art, Laser Cut Arts and Crafts",
        catagory: 'wood art',
        price: 30967,
        review: 4.9,
        thumbnail: 'https://i.etsystatic.com/17297081/r/il/42a637/4325775795/il_794xN.4325775795_hosf.jpg',
        photos: ['https://i.etsystatic.com/17297081/r/il/a3f395/4325773069/il_794xN.4325773069_aoy9.jpg', "https://i.etsystatic.com/17297081/r/il/e753d8/4325773075/il_794xN.4325773075_ba57.jpg"]
    },
    {
        id: 7,
        name: 'Quotes poster',
        Disctiption: "Maximalist Poster - More Amor Por Favor wall art Sunshine - Modern Eclectic Wall Art Yellow instant download - Love Quote - Printable Art",
        catagory: 'Digital print',
        price: 490,
        review: 4.3,
        thumbnail: 'https://i.etsystatic.com/23128121/r/il/3ab0c2/5693343978/il_794xN.5693343978_3j6o.jpg',
        photos: ['https://i.etsystatic.com/23128121/r/il/80d19c/5741390001/il_794xN.5741390001_gvc7.jpg', "https://i.etsystatic.com/23128121/r/il/c39564/5741389909/il_794xN.5741389909_8e7z.jpg"]
    },
    {
        id: 8,
        name: 'Leaf wall hanging',
        Disctiption: "Macrame Leaf Wall Hanging, Macrame Wall Hanging, Green Wall Art, Boho Home Decor, New Home Gifts, Farmhouse Decor, Mid-Century Modern L02",
        catagory: 'Wall Hanging',
        price: 1955,
        review: 4.6,
        thumbnail: 'https://i.etsystatic.com/24528021/r/il/dbe7d8/5202175235/il_794xN.5202175235_a174.jpg',
        photos: ['https://i.etsystatic.com/24528021/r/il/4388b2/4637455285/il_794xN.4637455285_gjg2.jpg', "https://i.etsystatic.com/24528021/r/il/8037d2/4637455279/il_794xN.4637455279_dkmv.jpg"]
    },
    {
        id: 9,
        name: 'Half Moon Wall Hanging',
        Disctiption: "Half Moon Wall Hanging, Fiber Wall Art, Minimalist Artwork, Home Office Decor, Boho Wall Art, Macrame Hanging, Half Round Wood Sign V07",
        catagory: 'Wall Hanging',
        price: 3471,
        review: 4.8,
        thumbnail: 'https://i.etsystatic.com/26318708/r/il/6f031f/5177017364/il_794xN.5177017364_cxw8.jpg',
        photos: ['https://i.etsystatic.com/26318708/r/il/afef5e/5908295684/il_794xN.5908295684_mvwk.jpg', "https://i.etsystatic.com/26318708/r/il/4aa959/5313673678/il_794xN.5313673678_q3gl.jpg"]
    },
    {
        id: 10,
        name: 'Basket wall decore',
        Disctiption: "Set of 13 Basket Wall Decor, Boho Wall Decor, Boho Wall Art, Wicker Round Bowl, Wicker Wall Tray, Bohemian Wall Decor, Hanger Wall Plate",
        catagory: 'Wall Hanging',
        price: 8071,
        review: 4.9,
        thumbnail: 'https://i.etsystatic.com/29746526/r/il/5320aa/5193155284/il_794xN.5193155284_3tcd.jpg',
        photos: ['https://i.etsystatic.com/29746526/r/il/81d8ff/5241366005/il_794xN.5241366005_9uzb.jpg', "https://i.etsystatic.com/29746526/r/il/aa82a6/5241365925/il_794xN.5241365925_c7k5.jpg"]
    },
    {
        id: 11,
        name: 'Custom Neon Sign',
        Disctiption: "Neon signs are hand-made products made up of LED strips, silicon flex tubes, and acrylic shape. Neon signs are the best type of decoration for homes, weddings, shops, offices, etc as well as they are much liked as a gift that can be gifted to anyone such as family, friends, etc",
        catagory: 'Signs',
        price: 2587,
        review: 4.9,
        thumbnail: 'https://i.etsystatic.com/7803638/r/il/7fe5ca/4137228946/il_794xN.4137228946_os0k.jpg',
        photos: ['https://i.etsystatic.com/7803638/r/il/c7fd27/4759174675/il_794xN.4759174675_2qv6.jpg', "https://i.etsystatic.com/7803638/r/il/023080/3711045594/il_794xN.3711045594_rh8m.jpg"]
    },
    {
        id: 12,
        name: 'Custom wedding Neon Sign',
        Disctiption: "Initial Neon Sign Custom Wedding Decor, Led Sign Custom Wall decor, Neon Name Sign Wedding Centrepieces, Custom Led Sign Personalized Gifts",
        catagory: 'Signs',
        price: 6401,
        review: 4.7,
        thumbnail: 'https://i.etsystatic.com/34901532/r/il/5455b6/5143306496/il_794xN.5143306496_5zb0.jpg',
        photos: ['https://i.etsystatic.com/34901532/r/il/36ff2a/5684201761/il_794xN.5684201761_m4hc.jpg', "https://i.etsystatic.com/34901532/r/il/6c3acb/5191525927/il_794xN.5191525927_7tav.jpg"]
    },
    {
        id: 13,
        name: 'Custom wedding name Neon Sign',
        Disctiption: "Custom Wedding LED Neon Sign Couple Names With Heart Neon Light Up Sign Night Light Home Wedding Engagement Party Backdrop Wall Decor",
        catagory: 'Signs',
        price: 7451,
        review: 4.4,
        thumbnail: 'https://i.etsystatic.com/25795331/r/il/72a799/5705208073/il_794xN.5705208073_tvfe.jpg',
        photos: ['https://i.etsystatic.com/25795331/r/il/50e769/5657123326/il_794xN.5657123326_q7zd.jpg', "https://i.etsystatic.com/25795331/r/il/259de5/5657124044/il_794xN.5657124044_9m1k.jpg"]
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