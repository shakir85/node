const express = require("express");
const app = express();
const bodyPasser = require("body-parser");

let messages = [];
let id = 1;

app.use(bodyPasser.json());

app.get("/", function (req, res) {
  res.send("Messenger System");
});

// GET localhost:3000/messages
app.get("/messages", function (req, res) {
  res.json(messages);
});

// GET localhost:3000/messages
app.get("/messages/:id", function (req, res) {
  var id = parseInt(req.params.id, 10);
  var flag = false;

  for (var i = 0; i < messages.length; i++) {
    if (messages[i].id === id) {
      res.json(messages[i]);
      flag = true;
      break;
    }
  }

  if (!flag) {
    res.json({ msg: `Cannot find a message with id: ${id}` });
  }
});

// POST localhost:3000/messages
app.post("/messages/", function (req, res) {
  let body = req.body;

  let new_message = {
    id: id++,
    name: body.name,
    content: body.content,
    read: body.read,
  };

  messages.push(new_message);
  res.json({ msg: "New message added" });
});

// DELETE localhost:3000/messages
app.delete("/messages/:id", function (req, res) {
  let id = parseInt(req.params.id, 10);
  let flag = false;

  for (let i = 0; i < messages.length; i++) {
    if (messages[i].id === id) {
      messages.splice(i, 1);
      flag = true;
      break;
    }
  }

  if (!flag) {
    res.json({ msg: `Cannot find a message with id: ${id}` });
  } else {
    res.json({ msg: `Message id: ${id} has been deleted` });
  }
});

app.get("/healthz", function (req, res) {
  res.json({ status: "Server is healthy" });
});

app.listen(3000, function () {
  console.log("Server is running...");
});
