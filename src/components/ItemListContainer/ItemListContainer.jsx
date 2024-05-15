import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import getProducts from "../../../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({saludo}) => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams()
    

    useEffect(() => {
      getProducts()
        .then((respuesta) => {
            if(idCategory){
                const productsFilter = respuesta.filter ((productRes)=> productRes.category === idCategory )
                setProducts(productsFilter)
            }else{
                setProducts(respuesta);
            }      
        })
        .catch((error) => { 
            console.error(error);
        })
        .finally(() => {
            console.log("Finalizo la promesa")
        });
    }, [idCategory]); //La categoria en el array de dependencias 


    return (
        <div>

           <div className="text-center mt-5 tituloPrincipal">{saludo}</div>

           <div>
            <ItemList products = {products} />
           </div>

        </div>
        

    )
}

export default ItemListContainer;