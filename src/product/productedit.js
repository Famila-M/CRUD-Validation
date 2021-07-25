/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

export default function ProductEdit(props){

    let[productName,setproductName] = useState("");
    let[brand,setbrand] = useState("");
    let[color,setcolor] = useState("");
    let[price,setprice] = useState("");
    let history = useHistory();

    useEffect(async ()=>{
        let product = await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/product/${props.match.params.id}`);
        let userData = await product.json();
        setproductName(userData.productName);
        setbrand(userData.brand);
        setcolor(userData.color);
        setprice(userData.price);
    },[])

    let goback = ()=>{
      history.push("/products");
    }

    let remove = async () =>{
      await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/product/${props.match.params.id}`, {
        method: "DELETE",
      });
      history.push("/products");
    }
    
    let productSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/product${props.match.params.id}`,{
            method: "PUT",
            body: JSON.stringify({
                productName,
                brand,
                color,
                price
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
        });
        history.push("/products");
    }

    console.log(props)

    return <>
    <h1>Product Edit {props.match.params.id} </h1>
    
    <form onSubmit={productSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> Product Name</label>
              <input className="form-control" value={productName} onChange={(e)=>setproductName(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Brand</label>
              <input className="form-control" value={brand} onChange={(e)=>setbrand(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> Color</label>
              <input className="form-control" value={color} onChange={(e)=>setcolor(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Price</label>
              <input className="form-control" value={price} onChange={(e)=>setprice(e.target.value)}/>
            </div>
          </div>
          <div className="row mt-3">
          <input type="submit" className="btn btn-primary" value="Save"/> &nbsp;&nbsp;&nbsp;
          <button type="reset" className="btn btn-primary" onClick={goback}> Cancel </button> &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={remove}> Delete </button>
          </div>
        </div>
      </form>
    </>
}