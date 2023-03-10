import Product from '../models/products.js';
import productValidation from '../validation/productValidation.js';

// create one
const createOne = (req, res) => {
    const {body} = req
    const {error} = productValidation(body)
    if (error) return res.status(401).json(error.detail[0].message)
    Product.create({title:body.title, price:body.price, description:body.description})
    .then(() =>{
        res.status(201).json({msg : "product created"})
    })
    .catch(error => res.status(500).json(error))
};

// get all
const getAll = (req, res) => {
    Product.findAll({
        attributes: {exclude : ["createdAt", "updatedAt"]}
    })
    .then((products) =>{
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json(error))
};

// get one
const getOne = (req, res) => {
    const {id} = req.params
    Product.findByPk(id, {
        attributes: {exclude : ["createdAt", "updatedAt"]}
    })
    .then((products) =>{
        if (!products) return res.status(404).json({msg : "Not found"})
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json(error))
};


// update one
const updateOne = (req, res) => {
    const {body} = req
    const {id} = req.params
    Product.findByPk(id, {
        attributes: {exclude : ["createdAt", "updatedAt"]}
    })
    .then((products) =>{
        if (!products) return res.status(404).json({msg : "Not found"})
        products.title = body.title
        products.price = body.price
        products.description = body.description
        
        products.save()
        .then(() =>{
            res.status(200).json({msg : "product updated"})
        })
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
};

// delete one
const deleteOne = (req, res) => {
    const {id} = req.params
    Product.destroy({where : {id : id}})
    .then(elmasup => {
        if (elmasup == 0) return res.status(404).json({msg : "Not found"})
        res.status(200).json({message: "pruduct deleted"})
    })
    .catch((error) => res.status(500).json(error));
};


export { getAll, getOne, createOne, updateOne, deleteOne };
