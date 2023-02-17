const logger = require("../lib/logger");

module.exports.getAllProducts = function (req, res) {
  logger.info("In get All Products function");

  listProduct = ["xbox, ps1, ps2, ps3"];
  logger.debug(listProduct);
  res.json({
    status: false,
    message: "Data found",
    data: listProduct,
  });
};

module.exports.productAdd = function (req, res) {
  if (req.body.name && req.body.price) {
    logger.info("Request body data = " + JSON.stringify(req.body));
    res.json({
      message: "Product Added Successfully",
      data: req.body,
    });
  } else {
    logger.error("Req.body error");
    res.json({
      message: "Data not found",
    });
  }
};
