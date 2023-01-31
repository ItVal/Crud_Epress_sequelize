import express from "express";
import routes from "./routes/routes.js";
import Db from "./Config/db.js";

const app = express();
const Port = process.env.PORT || 10000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

//connexion à la data base
Db.sync()
  .then(console.log("connexion à la db "))
  .catch((error) => console.log(error));

app.listen(Port, () => {
  console.log("server listening on port : ", Port);
});
