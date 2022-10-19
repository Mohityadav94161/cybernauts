const client = require("./database");
const express = require("express");
const app = express();

const table = ""; // your table name

const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

client.connect();
app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));
app.get("/user", (req, res) => {
    console.log(req.body);
  client.query(`select * from ${table} `, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.post("/", (req, res) => {
  const company = req.body.company;
  const model = req.body.model;
  const serial = req.body.serial;
  const date = req.body.date;
  const file = req.body.file;
  console.log(req.body);
  let insertQuery = `insert into ${table} (company, model ,serial ,date,file)
                    values('${company}','${model}' , '${serial}' ,${date} , ${file})`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Successfully added the product " );
    } else {
      res.send("there is some error in insertion of product: " + err);
      console.log(err.message);
    }
  });
  client.end;
});

app.listen(3001, () => {
  console.log("server is running on port : 3001");
});

// app.put;
