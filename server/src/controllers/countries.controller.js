const  axios  = require("axios");

const getAllCountries = async(req, res) => {
try{
    const response = await axios.get(`http://localhost:5000/countries`)
    const data = response.data;
    return res.status(200).json(data)
} catch (error) {
    console.error(error);
    return res.status(404).send(error.message)
}
}


module.exports = { getAllCountries };