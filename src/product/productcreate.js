/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import ProductContext from "../productContext";
import {useHistory} from "react-router-dom";
import { Field, Form, Formik, useFormik } from 'formik';

export default function ProductCreate(){

    let productData = useContext(ProductContext)

    let[productName,setproductName] = useState("");
    let[brand,setbrand] = useState("");
    let[color,setcolor] = useState("");
    let[price,setprice] = useState("");
    let history = useHistory();

    let productSubmit = async (e) => {
        e.preventDefault()

        productData.setProductList([...productData.productList,{
            productName,
            brand,
            color,
            price
        }])
        await fetch ("https://60fcf58d1fa9e90017c70d2b.mockapi.io/product",{
            method : "POST",
            body : JSON.stringify({
                productName,
                brand,
                color,
                price
            }),
            headers : {
                "Content-type" : "application/json"
            }
        });
        history.push("/products");
    }

    let goback = () => {
        history.push("/products")
    }

    useEffect(() => {
        console.log("During Creation")
    },[]);

    useEffect(() => {
        return () => {
            console.log("During Destroy")
        }
    },[]);
    
    useEffect(() => {
        console.log("During the Props change")
    },[productName])

    let validate = (values) => {
        const errors = {};

        if (!values.productName) {
            errors.productName = 'Required';
          } else if (values.productName.length > 15) {
            errors.productName = 'Must be 15 characters or less';
          }

          if (!values.brand) {
            errors.brand = 'Required';
          } else if (values.brand.length > 20) {
            errors.brand = 'Must be 20 characters or less';
          }

          if (!values.color) {
            errors.color = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.color = 'Invalid email address';
          }

          if (!values.price) {
              errors.price = 'Required';
          } else if (values.price.length > 20) {
              errors.price = 'Must be 20 characters or less';
          }
        return errors;
     }

     const formik = useFormik({
         initialValues: {
             productName: '',
             brand: '',
             color: '',
             price: ''
         },
         validate,
         onSubmit: values => {
             alert(JSON.stringify(values,null,2));
         },
     });
   
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>Create Product</h3>
            </div>
        </div>

    <form onSubmit={formik.handleSubmit}>
        <div className="row">
        <div className="col-lg-6">
            <label>ProductName</label>
            <input className="form-control" name="productName" onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange}/>
            {formik.errors.productName && formik.touched.productName ? (
                <div> {formik.errors.productName}</div>
              ) : null}
              {
                console.log(formik.values.productName)
              }
        </div>
        <div className="col-lg-6">
            <label>Brand</label>
            <input className="form-control" name="brand" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange}/> 
        
            {formik.errors.brand && formik.touched.brand ? (
                <div> {formik.errors.brand}</div>
              ) : null}
        </div>
        </div>


        <div className="row">
        <div className="col-lg-6">
           <label>Color</label>
           <input className="form-control" name="color" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange}/>
        
           {formik.errors.color && formik.touched.color ? (
                <div> {formik.errors.color}</div>
              ) : null}
        </div>
        <div className="col-lg-6">
            <label>Price</label>
            <input className="form-control" name="price" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange}/>
        
            {formik.errors.price && formik.touched.price ? (
                <div> {formik.errors.price}</div>
              ) : null}
        </div>
        </div>

        <div className="row mt-3">
        <div className="col-lg-6">
            <input className="btn btn-primary" type="submit" value="Submit"/>
            <button type="button" className="btn btn-primary" onClick={goback}>Cancel</button>
        </div>
        </div>

    </form>
    </div>

    </>
}