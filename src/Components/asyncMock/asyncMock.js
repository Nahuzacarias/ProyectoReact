
import petalos from "../../assets/petalos.jpeg"
import lavanda from "../../assets/lavanda.jpeg"
import cosmos from "../../assets/cosmos.jpeg"
import Faroles from "../../assets/Faroles.jpeg"
import medallon from "../../assets/medallon.jpeg"
const products =[
    
{
    
id: `1`,
name: "Faroles Chinos" ,
price:"700$",
category :"aros",
img : Faroles,
stock: 25,
description : "Flores de Farolito Chino,Ganchos NO de acero,Medidas de flor: 4,5 *2,3cm."

},

{id:"2",name:"PETALOS DE ABUTILON",price:"800$" , category:"aros", img:petalos,stock: 25, description: "Con argollas de acero,Medida por pétalo: 2,5*3cm."},
{id:"3",name:"LAVANDA",price:"1200$ ", category:"llaveros", img:lavanda ,stock: 25,description:"Inflorescencia de Lavanda,Medidas 4,8*2*0,5cm."},
{id:"4",name:"FLOR DE COSMOS",price:"850$ ", category:"dijes", img:cosmos ,stock: 25,description:"Flor de Cosmos naranja,Diámetro 4cm,Incluye cordón negro para atar."},
{id:"5",name:"MEDALLON DIMORFOTECA",price:"850$ ", category:"dijes", img:medallon ,stock: 25,description:"Flor de Cosmos naranja,Diámetro 4cm,Incluye cordón negro para atar."}

]
export const getProducts =() =>{


    return new Promise ((resolve)=>{

setTimeout(()=>{

    resolve(products)
},500)

    })
}

export const getProductById =(productId) =>{


    return new Promise ((resolve)=>{

setTimeout(()=>{

    resolve(products.find(prod=>prod.id ===productId))
},500)

    })
}

export const getproductcategory =(cat) =>{

    return new Promise ((resolve)=>{

setTimeout(()=>{

    resolve(products.filter(cate=>cate.category === cat))
},500)

    })
}
