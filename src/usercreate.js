/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import UserContext from "./userContext";
import {useHistory} from "react-router-dom";
import { Field, Form, Formik, useFormik } from 'formik';

export default function UserCreate(){

    let userData = useContext(UserContext)

    let[firstName,setfirstName] = useState("");
    let[lastName,setlastName] = useState("");
    let[email,setemail] = useState("");
    let[password,setpassword] = useState("");
    let history = useHistory();

    let userSubmit = async (e) => {
        e.preventDefault()

        userData.setUserList([...userData.userList,{
            firstName,
            lastName,
            email,
            password
        }])
        await fetch("https://60fcf58d1fa9e90017c70d2b.mockapi.io/user",{
            method : "POST",
            body : JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
            headers : {
                "Content-type" : "application/json"
            }
        });
        history.push("/users");
    }

    let goback= ()=>{
        history.push("/users")
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
    },[firstName])

    let validate = (values) => {
        const errors = {};
        
        if (!values.firstName) {
            errors.firstName = 'Required';
          } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
          }

          if (!values.lastName) {
            errors.lastName = 'Required';
          } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
          }

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        return errors;
     }

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password : ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

     

    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>User Form</h3>
            </div>
        </div>

       
        
    <form onSubmit={formik.handleSubmit}>
        <div className="row">
        <div className="col-lg-6">
            <label>FirstName</label>
            <input className="form-control" name="firstName" onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange}/>
            {formik.errors.firstName && formik.touched.firstName ? (
                <div> {formik.errors.firstName}</div>
              ) : null}
              {
                console.log(formik.values.firstName)
              }
        </div>
        <div className="col-lg-6">
            <label>LastName</label>
            <input className="form-control" name="lastName" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange}/> 
        
            {formik.errors.lastName && formik.touched.lastName ? (
                <div> {formik.errors.lastName}</div>
              ) : null}
        </div>
        </div>

        <div className="row">
        <div className="col-lg-6">
           <label>E-Mail</label>
           <input className="form-control" name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}/>
        
           {formik.errors.email && formik.touched.email ? (
                <div> {formik.errors.email}</div>
              ) : null}
        </div>
        <div className="col-lg-6">
            <label>Password</label>
            <input className="form-control" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}/>
        
            {formik.errors.password && formik.touched.password ? (
                <div> {formik.errors.password}</div>
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