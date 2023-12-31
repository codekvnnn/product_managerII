import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const OneProduct = (props)=>{

    const {id} = useParams();

    const [OneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err)=>console.log(err))
    },[id])


    return(
        <div className="OneProduct-component">
            <h2>{OneProduct.title}</h2>
            <p>Price: ${OneProduct.price}</p>
            <p>Description: {OneProduct.description}</p>
        </div>
    )
}

export default OneProduct;