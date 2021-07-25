/* eslint-disable no-unused-vars */
import Card from "./card";
import Chart from "./chart";
import Projectcard from "./projectcard";
import { useContext } from "react";
import UserContext from "../userContext";

export default function Dashboard() {
    let data = useContext(UserContext)
    
    return <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="/#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div class="row">
        <Card></Card>
     </div>
     <div class="row">
         <Chart></Chart>
     </div>
     <div class="row">
         <Projectcard></Projectcard>
     </div>
    

     
    </>
}