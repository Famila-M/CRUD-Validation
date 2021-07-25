/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect,useState} from "react";
import React from "react";

import { Link } from "react-router-dom";
import ProductContext from "../productContext";

export default function ProductList(){
    let product = useContext(ProductContext);
    let [productList,setProductList] = useState([]);

    useEffect(async () => {
        let product = await fetch("https://60fcf58d1fa9e90017c70d2b.mockapi.io/product");
        let userData = await product.json();
        console.log(userData);
        setProductList([...userData]);
    },[])
    return <>
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
        href="https://datatables.net">official DataTables documentation</a>.</p>

        <Link to="/productcreate">Create Product</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                {productList.length>0 ?
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                                productList.map((obj) => 
                                {
                                    return  <tr>
                                    <td>{obj.productName}</td>
                                    <td>{obj.Brand}</td>
                                    <td>{obj.Color}</td>
                                    <td>{obj.Price}</td>
                                    <td>
                                        <Link to={`/productedit/${obj.id}`}>Product Edit</Link>
                                    </td>
                                </tr>
                                })
                            }
                    
                        </tbody>
                    </table>
                </div> : <> <h1> Loading </h1> </>
                }
            </div>
        </div>
    </>
}