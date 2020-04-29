const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'))
app.use( bodyparser.json() )
app.use(bodyparser.urlencoded({     
  extended: true
}))

app.post('/quiz', async function( req, res){


    console.log(req.body) 
    axios.get(`http://localhost:3333/foodquiz`,{params: {ingrediente: req.body.pergunta}})
    .then((response)=>{
        res.send(`<h1>${response.data.nome}</h1><br><img src="${response.data.imagem}">`)
    })

})

app.listen(8000)