const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
require("./models/connection");

//following three are added as per auth tutorial min: 5
const cors = require("cors");
require("dotenv").config();

//configure express server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("media"))


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
