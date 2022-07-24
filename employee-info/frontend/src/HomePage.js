import "./HomePage.css";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";
import { URI } from "./constant";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
const HomePage = () => {
  const [employee, setState] = useState([]);
  const [stateChanged, setStatechanged] = useState(false);

  useEffect(() => {
    axios.get(`${URI}`).then((response) => {
      response.data.sort((a, b) => {
        let a_lower = a.name.toLowerCase();
        let b_lower = b.name.toLowerCase();
        if (a_lower < b_lower) return -1;
        if (a_lower > b_lower) return 1;
        return 0;
      });
      setState(response.data);
    });
  }, [stateChanged]);

  const [editID, setEditID]=useState(null);
  const [editFormData, setEditFormData] = useState({
    emp_id: "",
    name: "",
    address: "",
    status:"",
    age: "",
    phone: "",
  });
  
  const editClickhandler=(e,emp)=>{
    e.preventDefault();
    setEditID(emp.id);
    const formValues={...emp}
    setEditFormData(formValues);
  }

  const handleEditFormChange=(e)=>{
    e.preventDefault();
   const{name,value}= e.target;
   setEditFormData({...editFormData,[name]:value});

  }

 const submitEditHandler=(e)=>{
   const editedEmployee={
    emp_id:editFormData.emp_id,
    name:editFormData.name,
    address:editFormData.address,
    status:editFormData.status,
    age:editFormData.age,
    phone:editFormData.phone,
   }
   e.preventDefault();
   const newData=[...employee];
   const index = employee.findIndex((emp) => emp.id === editID);
    newData[index] = editedEmployee;

    axios.put(`${URI}/${editID}`,{ 
      emp_id:editFormData.emp_id,
      name:editFormData.name,
      address:editFormData.address,
      status:editFormData.status,
      age:editFormData.age,
      phone:editFormData.phone,}).then((response)=>{
      console.log("dada added successfully");
      setState(newData);
      setStatechanged(!stateChanged);
      setEditID(null);
    })
 }

 const handleCancelClick = (e) => {
   e.preventDefault();
  setEditID(null);
};

 

  return (
    <header>
      <section className="sectioncontainer border rounded mt-4">
        <div className="tabledata">
          <h3>Employee Information</h3>
          <form >
          <table>
            <tbody>
              <tr>
                {/* <th>id</th> */}
                <th>emp_id</th>
                <th>emp_name</th>
                <th>emp_address</th>
                {/* <th>status</th> */}
                <th>emp_age</th>
                <th>phone_number</th>
                <th>Actions</th>
              </tr>
            {
              employee.map((emp)=>{
                return(
                  (editID===emp.id)?<EditEmployee 
                  handleEditFormChange={handleEditFormChange} 
                  editFormData={editFormData} 
                  submitEditHandler={submitEditHandler}
                  handleCancelClick={handleCancelClick}
                  ></EditEmployee>:
                  <Employee
                  key={emp.id}
                    emp={emp}
                  state={stateChanged}
                  changeState={setStatechanged}
                  editClickhandler={editClickhandler}
              ></Employee>
                );
              })
            }
            </tbody>
          </table>
          </form>
        </div>
        <div className="formdata">
          <AddEmployee
            state={stateChanged}
            changeState={setStatechanged}
          ></AddEmployee>
        </div>
      </section>
    </header>
  );
};


export default HomePage;
