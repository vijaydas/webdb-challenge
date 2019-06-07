const express = require('express');
const router = express.Router();
const Actions = require("../models/actionsModel");


router.get('/', async (req, res) => {
    try {
        const actions = await Actions.find();
        res.status(200).json(actions);
    } catch(error) {
        res.status(500).json(error)
    }
 })


 router.post('/', async (req, res) => {
    try {
        const newProject = await Actions.add(req.body);
        console.log(newAction);
        res.status(200).json("action added")
    } catch(error) {
        res.status(500).json(error)
    }
})



module.exports = router