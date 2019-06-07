const express = require('express');
const router = express.Router();
const Projects = require("../models/projectsModel");


router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        console.log(projects);
        res.status(200).json(projects);
    } catch(error) {
        res.status(500).json(error)
    }
 })

 router.post('/', async (req, res) => {
     try {
         const newProject = await Projects.add(req.body);
         console.log(newProject);
         res.status(200).json(newProject)
     } catch(error) {
         res.status(500).json(error)
     }
 })

 module.exports = router;
