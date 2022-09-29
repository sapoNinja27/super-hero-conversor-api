const express = require('express')
const axios = require('axios')
const router = express.Router()
const url = 'https://akabab.github.io/superhero-api/api/all.json';

router.get('/herois', async function (req, res) {
    try {
        const data = await axios.get(url)
        let result = data.data.map( function (convert){
            return {
                nome: convert.name,
                imagem: convert.images.lg,
                atributos: {
                    velocidade: convert.powerstats.speed,
                    forca: convert.powerstats.strength,
                    inteligencia: convert.powerstats.intelligence
                }
            }
        })
        res.json(shuffle(result)[0])
    } catch (error){
        res.json(error)
    }
})
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
module.exports = router