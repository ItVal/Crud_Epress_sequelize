import { DataType } from "sequelize";
import db from "../Config/db.js";

const Product = db.define('product', {
    id : {
        type : DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement : true,
        allowNull : null
    },
    title : {
        type: DataType.STRING,
        allowNull : false
    },
    price : {
        type: DataType.FLOAT,
        allowNull : false
    },
    description : {
        type: DataType.TEXT,
        allowNull : true
    }
})

export default Product;