const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express();

app.use(cors())
// 034ea3f51a6c4d78825bac979347d9c5
// ?apiKey=YOUR-API-KEY

app.get('/foodquiz', async function( req, res){

    console.log(req.query)
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.ingrediente}&apiKey=034ea3f51a6c4d78825bac979347d9c5`)
    .then((response)=>{
        
        var tamanho = response.data.length
        var i = Math.floor(Math.random() * tamanho)

        var nome = response.data[i].title
        var imagem = response.data[i].image

        console.log(nome)

        res.status(200).json({nome,imagem})
    })
})


app.listen(3333)