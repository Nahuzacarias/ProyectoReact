import React from "react";
import '../style.css';

const Cartwidget =() =>{

return(

<div className="carrito">

<img src={require("../../assets/carrito.png")}
alt="icono carrito"/>
<p className="cero">0</p>
</div>

)
}

export default Cartwidget