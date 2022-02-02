
const express = require("express");
const app = express();
  
app.post("/POST", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log('Server is up on port ' + port)
})
