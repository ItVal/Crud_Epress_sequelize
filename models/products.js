import sequelize from 'sequelize';
import db from "../Config/db.js";

const { DataTypes } = sequelize;
const Product = db.define('product', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement : true,
        allowNull : null
    },
    title : {
        type: DataTypes.STRING,
        allowNull : false
    },
    price : {
        type: DataTypes.FLOAT,
        allowNull : false
    },
    description : {
        type: DataTypes.TEXT,
        allowNull : true
    }
})

export default Product;