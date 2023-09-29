const express = require("express");
const app = express();

const message = [
  {
    id: 1,
    name: "Joe Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    read: false,
  },
  {
    id: 2,
    name: "Nol Ryo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    read: false,
  },
  {
    id: 1,
    name: "Pol Dee",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    read: true,
  },
];

app.get("/", function (req, res) {
  res.send("Messenger System");
});

app.get("/messages", function (req, res) {
  res.json(message);
});

app.listen(3000, function () {
  console.log("Server is running...");
});
