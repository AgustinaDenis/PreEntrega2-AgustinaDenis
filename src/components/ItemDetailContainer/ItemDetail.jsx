import React from 'react'

import "./ItemDetail.css";

const ItemDetail = ({product}) => {
  return (
    <div className="detalleProductos">
            <h1 className="px-5 pt-5 tituloDetalle">Detalle del producto:</h1>
            <img className="imagenDetalle" src={product.image} />
            <p className="nombreDetalle">{product.name}</p>
            <p className="descripcionDetalle">{product.description}</p>
            <p className="precioDetalle"> ${product.price}</p>
        </div>
  )
}

export default ItemDetail