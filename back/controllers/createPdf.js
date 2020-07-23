const pdf = require("html-pdf");
const pdfTemplate = require("../public");

const createPdf = (req, res) => {
  console.log(req.body);
  pdf.create(
    pdfTemplate(req.body),
    {}.toFile("transaccion.pdf", (err) => {
      if (err) res.send(err);
      if (!err) res.sendStatus(200);
    })
  );
};

const fetchPdf = (req, res) => {
  res.sendFile(`${__dirname}/transaccion.pdf`);
};

module.exports = { createPdf, fetchPdf };
