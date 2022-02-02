
const path = require('path');
const express = require("express");
const app = express();
  
app.get("*", (req, res) => {
  console.log("Connected to React");
  res.send("TESTTTTTTTT");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.render("dsdhjastjtr");
});
  

const port = process.env.PORT || 8080;
app.listen(port, () => {
 console.log('Server is up on port ' + port)
})
