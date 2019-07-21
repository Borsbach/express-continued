const express = require("express");
const app = express();
const products = require("./routers/products");
const vehicles = require("./routers/vehicles");
const comments = require("./routers/comments");
const contacts = require("./routers/contacts");
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(products);
app.use(vehicles);
app.use(comments);
app.use(contacts);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
