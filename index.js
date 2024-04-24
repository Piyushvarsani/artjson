const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
app.use(cors());

const { readdirSync } = require("fs")

readdirSync("./routes").map((file) =>
    app.use('/', require("./routes/" + file))
)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})