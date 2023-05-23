import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { useState } from "react";
import Axios from "axios";
import './style.css';
// styleline50
//serverline 20

const Professors = () => {


  
  const [record, setRecord] = useState([]);
const [editid, setEditID] = useState(-1)


  useEffect(()=>{
    fetch('http://localhost:8080/professor')
    .then(response => response.json())
    .then(data => setRecord(data))
    .catch(err => console.log(err))
  }, [])

  const updateRecord = (id) => {
    setEditID(id)
  }

{
    //for edit button
 //   const [fname, newfname] = useState("");
 //   const [lname, newlname] = useState("");
 //   const [age, newage] = useState(0);
  //  const [gender, newgender] = useState("");
 //   const [pswd, newpswd] = useState("");
  //  const [subject, newsubject] = useState("");
//    const [department, newdepartment] = useState("");
//    const [add, newadd] = useState("");
//    const [city, newcity] = useState("");
 //   const [email, newemail] = useState("");
 //   const [contact, newcontact] = useState(0);
  
  //  const updateRecord = (id) => {
  //   Axios.put("http://localhost:3001/professorupdate", 
  //   { fname: newfname, lname: newlname, contact: newcontact, email: newemail, pswd: newpswd,  
  //  subject: newsubject, department: newdepartment, add: newadd, city: newcity, gender: newgender, age: newage, id: id }).then(
  //  (response) => {
 //   setRecord(
 //   record.map((val) => {
 //   return val.id = id
 //    ? {
 //   id: val.id,
 //    fname: newfname,
  //    lname: newlname,
  //    contact: newcontact,
  //    email: newemail,
  //    pswd: newpswd,
  //   subject: newsubject,
  //  department: newdepartment,
  //   add: newadd,
  //  city: newcity,
 //   gender: newgender,
  //  age: newage,
  //   }
  //   : val;
  //  })
 //    );
   //  }
   //  )
    //  };

    }

{
  //const updateRecord = (id) => {
   // Axios.update(`http://localhost:8080/professorupdate/${id}`)
   // .then((response)=> {
   //   setRecord(response.data)
   // })
   // .catch(err => console.log(err))
 // };

}


{
 //const prodelete = (id, e) => {
  //e.preventDefault();
  //Axios.delete(`http://localhost:8080/professor/${id}`)
  //.then(res => {
  //  console.log('deleted!!', res)
  //}).catch(err => console.log(err))
//};    delete button main add karna    onClick={(e) => prodelete(val.id, e)}


// const deleteRecord = (id) => {
 // alert(id);
//}
  }


 
    




   const deleteRecord = (id) => {
    Axios.delete(`http://localhost:8080/professordelete/${id}`).then((response)=> {
      setRecord(record.filter((val)=> {
        return val.id !== id;
      }))
    })
  }

 
  return (
    <div className='professor'>
    <div className="container-fluid Professors">
      
        
        
        <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Professors List</h3>
            </div>
            </div>
          </div>
          <div>
            
        <div className="row">
          <div className="col-md-12">
            <button className="p-3 col-md-3 btn btn-primary justify-content-around align-items-center rounded" style={{}}>
        <NavLink to="/Professors/form" style={{ textDecoration: "none", color: "black"}} >
        ADD Professors
            </NavLink>
            </button>
        </div>
        </div>
        </div>
   
    <div className="row">
          <div className="col-md-12 p-1">
           
<table className="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">P. Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Course</th>
      <th scope="col">Department</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Code</th>
      <th scope="col">Active</th>
      
      <th scope="col" colspan="2" >Option</th>
    </tr>
  </thead>
       
        {record.map((val, key) => {
          return ( 
            
            <tbody>
            <tr>
            
            <th scope="row">{val.id}</th>
                <td>{val.first_name}</td>
                <td>{val.email}</td>
                <td>{val.contact}</td>
                <td>{val.subject}</td>
                <td>{val.department}</td>
                <td>{val.address}</td>
                <td>{val.city}</td>
                <td>{val.gender}</td>
                <td>{val.age}</td>   
                <td>{val.password}</td>            
                 <td>yes</td>       
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#formModal">
  Edit
</button>
<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="FormModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{color:"black"}}>updateRecord</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="row g-3">
      <div class="col-md-6">
    <label for="pname" class="form-label" style={{color:"black"}}>Name</label>
    <input type="text" class="form-control" id="pname" />
  </div>
  <div class="col-md-6">
    <label for="pemail" class="form-label" style={{color:"black"}}>Email</label>
    <input type="email" class="form-control" id="pemail" />
  </div>
  <div class="col-md-6">
    <label for="pcontact" class="form-label" style={{color:"black"}}>Contact</label>
    <input type="text" class="form-control" id="pcontact" />
  </div>
  <div class="col-md-6">
    <label for="pcourse" class="form-label" style={{color:"black"}}>Course</label>
    <input type="text" class="form-control" id="pcourse" />
  </div>
  <div class="col-4">
    <label for="psubject" class="form-label" style={{color:"black"}}>Subject</label>
    <input type="text" class="form-control" id="psubject" placeholder="" />
  </div>
  <div class="col-8">
    <label for="pdepartment" class="form-label" style={{color:"black"}}>Department</label>
    <input type="text" class="form-control" id="pdepartment" placeholder="" />
  </div>
  <div class="col-12">
    <label for="pAddress" class="form-label" style={{color:"black"}}>Address</label>
    <input type="text" class="form-control" id="pAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-md-6">
    <label for="pCity" class="form-label" style={{color:"black"}}>City</label>
    <input type="text" class="form-control" id="pCity" />
  </div>
  <div class="col-md-3">
<label for="gender" class="form-label" style={{color:"black"}}>Gender</label>
<select id="gender" class="form-select" >
 <option selected>Choose...</option>
 <option value={"male"}>Male</option>
 <option value={"female"}>Female</option>
 <option value={"other"}>others</option>
</select>
</div>
  <div class="col-md-2">
    <label for="page" class="form-label" style={{color:"black"}}>Age</label>
    <input type="number" class="form-control" id="page" /> 
  </div>
  <div class="col-md-2">
    <label for="pcode" class="form-label" style={{color:"black"}}>Code</label>
    <input type="text" class="form-control" id="pcode" /> 
  </div>
  <div class="col-md-2">
<label for="active" class="form-label" style={{color:"black"}}>Active</label>
<select id="active" class="form-select" >
 <option selected>Yes</option>
 <option>No</option>
</select>
</div>
 
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>updateRecord(val.id)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
                </td>
                <td>
                <button type="button" class="btn btn-danger" onClick={()=>deleteRecord(val.id)}>Delete</button>
                </td>
                </tr>
              
            </tbody>
              
              );
            })}
          
              </table>
            </div></div>
         
        </div>
        
    </div>
  )
}

export default Professors
