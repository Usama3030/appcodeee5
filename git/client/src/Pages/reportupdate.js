import React, { useEffect } from 'react'
import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Reportupdate = () => {

    const {id} = useParams();
    useEffect((id) => {
        axios.get('/reportupdate'+id)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }, [])


  return (
    <div className='update'>
     
  <div class="container">
   
      <div className="header">
        <h5 class="title" style={{color:"black"}}>updateRecord</h5>
        
      </div>
      <div class="body">
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
   
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>

   
  )
}

export default Reportupdate
