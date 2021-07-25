/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

export default function Useredit(props){

    let[firstName,setfirstName] = useState("");
    let[lastName,setlastName] = useState("");
    let[email,setemail] = useState("");
    let[password,setpassword] = useState("");
    let history = useHistory();

    useEffect(async ()=>{
        let users = await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/user/${props.match.params.id}`);
        let userData = await users.json();
        setfirstName(userData.firstName);
        setlastName(userData.lastName);
        setemail(userData.email);
        setpassword(userData.password);
    },[])

    let goback = ()=>{
      history.push("/users");
    }

    let remove = async () =>{
      await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/user/${props.match.params.id}`, {
        method: "DELETE",
      });
      history.push("/users");
    }
    
    let userSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`https://60fcf58d1fa9e90017c70d2b.mockapi.io/user${props.match.params.id}`,{
            method: "PUT",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
        });
        history.push("/users");
    }

    return <>
    <h1> User Edit {props.match.params.id}</h1>
    
    <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> first name</label>
              <input className="form-control" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> last name</label>
              <input className="form-control" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> email</label>
              <input className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> password</label>
              <input className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
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