import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "petshop",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "loi" });
    return res.json(result);
  });
});


app.listen(8081, () => {
  console.log("listening");
});
