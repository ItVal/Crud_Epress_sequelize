import Product from '../models/products.js';


// create one
const createOne = (req, res) => {
    const {body} = req
    console.log(body);
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
