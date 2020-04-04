const express = require("express")

const app = express()



app.get("/", (req, res) => {
    res.send("Running and working my friend")
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})