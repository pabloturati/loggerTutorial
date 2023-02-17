const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const logger = require("./src/lib/logger");

const app = express();
const port = config.get("port");

const productRouter = require("./src/routes/productRoutes");

// parse requests of content-type — application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type — application/json
app.use(bodyParser.json());

// Routers call
const api = "/api/v1/";
app.use(api + "product", productRouter);

app.listen(port, () => {
  logger.info("RESTful API server started on : " + port);
});
