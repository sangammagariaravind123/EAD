import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [tech, setTech] = useState('')
  const [sub, setSub] = useState('')
  const [email, setEmail] = useState('')
  
  const submitReview = () => {
    axios.post('http://127.0.0.1:9000/auth', {
      firstname,lastname,tech,sub,email
    }).then(() => {
      alert("success");
    });
  };

  return (
    <>
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>First Name</b></label>
        <input
          type="text"
          name="firstname"
          onChange={(e) => { setFirstname(e.target.value); }} required />
        <label><b>Last Name</b></label>
        <input
          type="text"
          name="lastname"
          onChange={(e) => { setLastname(e.target.value); }} required />
        <label><b>Email</b></label>
        <input
          type="email"
          name="email"
          onChange={(e) => { setEmail(e.target.value); }} required />
        <label><b>Technology</b></label>
        <input
          type="text"
          name="tech"
          onChange={(e) => { setTech(e.target.value); }} required />
        <label><b>Status</b></label>
        <input
          type="text"
          name="sub"
          onChange={(e) => { setSub(e.target.value); }} required />
        <button onClick={submitReview}><b>Submit</b></button>
      </div>
    </div>


  </>
  )
}

export default App
