import React, { useState } from 'react';

const Admin = () => {
 
const [info, setInfo] = useState({});
const [file, setFile] = useState(null);

const handleBlur = e => {
  const newInfo = { ...info };
  newInfo[e.target.name] = e.target.value;
  setInfo(newInfo);
}
const handleFileChange = e => {
    const newFile = e.target.files[0]
    setFile(newFile);
}

const handleSubmit = () => {
    const formData = new FormData()
  formData.append('file', file);
  console.log(info)
  formData.append('file', info.name);
  formData.append('file', info.email);
  formData.append('file', info.date);

  fetch('https://still-gorge-63700.herokuapp.com/addProduct', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
}



return (
<div className="m-5 p-5">
<h2>This is admin page</h2>
        
<form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Upload a image</label>
          <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>

</div>
    );
};

export default Admin;