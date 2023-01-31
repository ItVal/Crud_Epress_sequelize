import Product from '../models/products.js';
import productValidation from '../validation/productValidation.js';

// create one
const createOne = (req, res) => {
    const {body} = req
    const {error} = productValidation(body)
    if (error) return res.status(401).json(error.detail[0].message)
    Product.create({title:body.title, price:body.price, description:body.description})
    .then(() =>{
        res.status(200).json({msg : "product created"})
    })
    .catch(error => res.status(500).json(error))
};

// get all
const getAll = (req, res) => {};

// get one
const getOne = (req, res) => {};


// update one
const updateOne = (req, res) => {};

// delete one
const deleteOne = (req, res) => {};

export { getAll, getOne, createOne, updateOne, deleteOne };
