const express = require("express");

const app = express();
app.use(express.json());

let currentUser = {
  name: "Thomas Neos",
  age: 49,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
  {
    id: "1",
    name: "Sarah Waters",
    age: 55,
    country: "UK",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    id: "2",
    name: "Tim Naysmith",
    age: 43,
    country: "USA",
    books: ["Half of a Yellow sun", "Americanah"],
  },
  {
    id: "3",
    name: "Harumi Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
];

let books = [
  {
    name: "To Kill a Mockingbird",
    pages: 289,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    name: "The Catcher in the Rye",
    pages: 225,
    title: "J. D. Salinger",
    price: 19.99,
  },
  {
    name: "The Little Prince",
    pages: 89,
    title: "Antoine de Saint-Exupery",
    price: 12.99,
  },
  {
    name: "Sing a Sad Song",
    pages: 332,
    title: "Steven Smith",
    price: 24.89,
  },
];

// Routes
app.get("/current-user", (req, res) => res.json(currentUser));
app.get("/users/:id", (req, res) => {
  const {id} = req.params;
  console.log(id);
  res.json(users.find(user => user.id === id));
});
app.get("/users", (req, res) => res.json(users));
app.post("/users/:id", (req, res) => {
  const {id} = req.params;
  const {user: editedUser} = req.body;

  users = users.map(user => (user.id === id ? editedUser : user));

  res.json(users.find(user => user.id === id));
});

app.get("/books", (req, res) => res.json(books));
app.get("/books/:id", (req, res) => {
  const {id} = req.params;
  res.json(books.find(book => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
  console.log(`Server is is listening on port: ${SERVER_PORT}`);
});
