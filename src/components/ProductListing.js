import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'

export default function ProductListing() {
    // import state from store
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchData = async () => { 
        const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(setProducts(res.data));
    }
   
    useEffect(()=>{
        fetchData();
    },[])

    return (<>
    
        <div className='ui grid container'>
            <ProductComponent /> 
        </div>
    </>
    )
}
