const express = require("express");
const app = express();
const products = require("./routers/products");
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(products);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
