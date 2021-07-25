/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

export default function UserList(){

    let users = useContext(UserContext);
    let [userList,setUserList] = useState([]);

    useEffect(async () => {
        let users = await fetch("https://60fcf58d1fa9e90017c70d2b.mockapi.io/user");
        let userData = await users.json();
        console.log(userData);
        setUserList([...userData]);
    },[])

    return ( <>
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
        href="https://datatables.net">official DataTables documentation</a>.</p>

        <Link to="/usercreate">Create User</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                {userList.length>0 ?
                <div class="table-responsive">
                    <table class="table table-bordered" 
                    id="dataTable" 
                    width="100%" 
                    cellSpacing="0">
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>E-mail</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>E-mail</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                userList.map((obj) => 
                                {
                                    return  <tr>
                                    <td>{obj.firstname}</td>
                                    <td>{obj.lastname}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td>
                                        <Link to={`/useredit/${obj.id}`}>User Edit</Link>
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
    );
}