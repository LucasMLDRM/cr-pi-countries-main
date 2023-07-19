const { Router } = require("express");
const { getAllCountries } = require("../controllers/countries.controller")

const countriesRouter = Router();

countriesRouter.get("/", async (req, res) => {
    try{
        const AllCountries = await getAllCountries();
        return res.status(200).json(`This are all Countries..`)
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

module.exports = countriesRouter;