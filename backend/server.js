const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://devrelan8599_db_user:<Mongodev124>@cluster0.zzzdk6s.mongodb.net/?appName=Cluster0");

app.use("/api", require("./routes/api"));

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
