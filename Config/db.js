//connexion à la base de données
import { Sequelize } from "sequelize";

export default new Sequelize("crud", "jonas", "KDA1994+Val", {
  dialect: "mysql",
  host: "localhost",
});
