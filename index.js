const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, './front/build/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './front/build/index.html'));
});

app.listen(process.env.PORT || 3006, ()=>{
    console.log("running");
})