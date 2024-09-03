const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const excerciseRouter = require("./routes/excercises");
const userRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB CONNECT
const uri = process.env.ATLAS_URI
  ? process.env.ATLAS_URI
  : "mongodb://127.0.0.1:27017/tickets_db";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log(err.message);
    }
  }
);
mongoose.set("useCreateIndex", true);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGO DB connected successfully");
});

app.get("/", (req, res) => {
  res.send("connected");
});
app.use("/excercises", excerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`listening to the server at port: ${port}`);
});
