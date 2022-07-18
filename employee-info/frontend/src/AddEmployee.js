import { useState} from "react";
import axios from "axios";
import { URI } from "./constant";
const AddEmployee = ({ state, changeState }) => {
    
  const [emp_id, setEmp_id] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    
    axios
      .post(`${URI}`, {
        emp_id,
        name,
        address,
        status,
        age,
        phone,
      })
      .then(() => {
        changeState(!state);
      });
      
  };

  const resetHandler=()=>{
    setEmp_id("");
    setName("");
    setAddress("");
    setStatus("");
    setAge("");
    setPhone("");
  }
  return (
    <form className="form-control" id="resetform" onSubmit={SubmitHandler}>
      <div className="mb-2">
        <h3>Add Employee</h3>
        <label htmlFor="emp_id"></label>
        <input
          type="number"
          className="form-control"
          name="emp_id"
          id="emp_id"
          value={emp_id}
          onChange={(e) => {
            setEmp_id(e.target.value);
          }}
          placeholder="enter employee id"
        />

        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={name}
          placeholder="enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="address"></label>
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          value={address}
          placeholder="enter your address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />

        <label htmlFor="status"></label>
        <input
          type="text"
          className="form-control"
          name="status"
          id="status"
          value={status}
          placeholder="where you working currently"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />

        <label htmlFor="age"></label>
        <input
          type="number"
          className="form-control"
          name="age"
          id="age"
          value={age}
          placeholder="enter your age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <label htmlFor="phone"></label>
        <input
          type="number"
          className="form-control"
          name="phone"
          id="phone"
          value={phone}
          placeholder="enter your contact number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <input type="submit" value="submit" className="button mb-2" />
      <input type="reset" value="reset" className="btn btn-success" onClick={()=>resetHandler()} />
    </form>
  );
};
export default AddEmployee;
