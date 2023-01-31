//connexion à la base de données
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

export default new Sequelize("crud", process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});
