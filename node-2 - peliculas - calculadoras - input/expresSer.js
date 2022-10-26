const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var  url = "https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=es-MX"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'))

app.get("/", (req,res)=>{
    res.sendFile((__dirname+'/public/index.html'));
})


app.post("/", (req,res)=>{
    const n1 = Number(req.body.numero)
    const n2 = Number(req.body.numero2)
    let accion = (req.body.accion)//estamos trayendo el html accion
  // const enviarForm1 = (req.body.enviarForm1)
    console.log(accion) 

    if (accion === "+"){
     let suma = n1 + n2;
    //enviarForm1
     
     res.send("Resultado: " + suma )
    }
    else if (accion ==="-"){
     let resta = n1 - n2;
     res.send("Resultado: " + resta)

    }
    else if (accion === "multiplicacion"){
      let multiplicarse = n1 * n2;
      res.send("Resultado: " + multiplicarse)
    }
    else if (accion === "dividir"){
        let dividirse = n1 / n2;
        res.send("Resultado: " + dividirse)
    }
    
    
})
app.post("/complejo",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    
    let accionCompl = req.body.accionCompleja;
    console.log(accionCompl)
   
    if (accionCompl === "imc"){
       // enviarForm2 === "sumbit"
        let Imc = num1/(num2*num2)
        res.send("Resultado: " + Imc)
    }
})

//=====================================SUSCRIPCION==========================//


app.post('/suscripcion',(req,res)=>{
const usuario = req.body.usuario;
const contraña = req.body.contraña;

res.send( ` Felcidiades ${usuario} te has sucripto correctamente `)
})





//===============================url========================//


app.get("/usuario",async (rec,res)=>{
    async function Setimagenes(){
        const urlDatos = await fetch(url)//espera a que termine esta funcion
        let datos =  await urlDatos.json()//pasamos la .json para que pueda acceder a la informacion
        console.log(urlDatos)
        //res.send(data)
        res.json(datos)//pasamos la .json para que pueda acceder a la informacion
    }
    Setimagenes()
        



})







app.listen(3080, () =>{
    console.log("server running on port")
})