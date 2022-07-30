const express = require("express");
const app = express(); // create express app
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5001; // default port to listen
const bodyParser = require("body-parser");
const UserModel = require("./src/models/Users");
const TodoModel = require("./src/models/Todos");

// app.use(function (req, res, next) {
//   res.header("Content-Type", "application/json");
//   next();
// });

// app.set("json spaces", 40);
app.use(cors());
app.use(express.json());
// middleware to parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect(
  "mongodb+srv://matrixz0ne:matrixz0ne@cluster0.fn1c2ef.mongodb.net/mernTodoApp?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// check if connection is successful
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Get todos Todo

app.get("/todos", async (req, res) => {
  TodoModel.find({})
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add a new todo

app.post("/todos/new", async (req, res) => {
  const newTodo = new TodoModel({
    title: req.body.title,
    completed: req.body.completed,
  });
  newTodo
    .save()
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Delete a todo
app.delete("/todos/delete/:id", async (req, res) => {
  TodoModel.findByIdAndDelete(req.params.id)
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Update a todo
app.put("/todos/update/:id", async (req, res) => {
  TodoModel.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

// complete a todo

app.put("/todos/complete/:id", async (req, res) => {
  TodoModel.findByIdAndUpdate(req.params.id, { completed: true })
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

// create and save a new user in the database
app.post("/createUser", (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  user
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

// update a user in the database
app.put("/updateUser/:id", (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

// delete a user in the database
app.delete("/deleteUser/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});
// upload a file
app.post("/upload", (req, res) => {
  console.log(req.body);
  res.send("File uploaded");
});

//run local server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
