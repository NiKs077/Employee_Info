import "./HomePage.css";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";
import { URI } from "./constant";
import AddEmployee from "./AddEmployee";
const HomePage = () => {
  const [employee, setState] = useState([]);
  const [stateChanged, setStatechanged] = useState(false);


  useEffect(() => {
    axios.get(`${URI}`).then((response) => {
      setState(response.data);
    });
  }, [stateChanged]);

  return (
    <header>
      <section className="sectioncontainer border rounded mt-4">
        <div className="tabledata">
          <h3>Employee Information</h3>
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
                <th>Delete Employee</th>
              </tr>
              {employee.map((emp) => {
                return <Employee key={emp.id} {...emp} state={stateChanged}
                changeState={setStatechanged}></Employee>;
              })}
            </tbody>
          </table>
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
