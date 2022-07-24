import { useState } from "react";
import axios from "axios";
import { URI } from "./constant";
import swal from "sweetalert";

const AddEmployee = ({ state, changeState }) => {
  const [employee, setEmployee] = useState({
    emp_id: "",
    name: "",
    address: "",
    status: "",
    age: "",
    phone: "",
  });

  const [formErros, setFormErrors] = useState({});
  const { emp_id, name, address, status, age, phone } = { employee };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    setFormErrors(ValidateForm(employee));
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(formErros).length === 0) {axios
        .post(`${URI}`, {
          emp_id: employee.emp_id,
          name: employee.name,
          address: employee.address,
          status: employee.status,
          age: employee.age,
          phone: employee.phone,
        })
        .then(() => {
          swal("hurray","employee added successfully","success");
          changeState(!state);
        }).catch((e)=>{
          swal("oops","employee with the given id already exist","error");
        })
    }
  };
  const resetHandler = () => {
    setEmployee({
      emp_id: "",
      name: "",
      address: "",
      status: "",
      age: "",
      phone: "",
    });
    // setErrorMsg(false);

  };
  const ValidateForm = (employee) => {
    const errors = {};
    if (
      employee.emp_id && (!employee.emp_id.startsWith("210") || employee.emp_id.length < 6)
      ) {
        errors.emp_id = "please enter a valid id";
    }
    if (
      employee.name &&
      (!/^[A-Za-z\s]*$/.test(employee.name) || employee.name.length < 5)
    ) {
      errors.name = "please enter a valid name";
    }
    if (employee.address.length === 0) {
      errors.address = "maximum length 30 characters";
    }
    if (employee.status && !/^[A-Za-z\s]*$/.test(employee.status)) {
      errors.status = "please enter a valid status";
    }
    if (employee.age.length === 0) {
      errors.age = "please enter valid age";
    }
    if (employee.phone && employee.phone.length < 9) {
      console.log(employee.phone.length);
      errors.phone = "enter correct phone number";
    }
    return errors;
  };
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
          placeholder="enter employee id"
          onChange={changeHandler}
        />
        <div className="text-danger">{formErros.emp_id}</div>

        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={name}
          placeholder="enter your name"
          onChange={changeHandler}
        />
        <div className="text-danger">{formErros.name}</div>

        <label htmlFor="address"></label>
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          value={address}
          placeholder="enter your address"
          onChange={changeHandler}
          required
        />
        <div className="text-danger">{formErros.address}</div>

        <label htmlFor="status"></label>
        <input
          type="text"
          className="form-control"
          name="status"
          id="status"
          value={status}
          placeholder="where you working currently"
          onChange={changeHandler}
        />
        <div className="text-danger">{formErros.status}</div>

        <label htmlFor="age"></label>
        <input
          type="number"
          className="form-control"
          name="age"
          id="age"
          value={age}
          placeholder="enter your age"
          onChange={changeHandler}
        />
        <div className="text-danger">{formErros.age}</div>

        <label htmlFor="phone"></label>
        <input
          type="number"
          className="form-control"
          name="phone"
          id="phone"
          value={phone}
          placeholder="enter your contact number"
          onChange={changeHandler}
        />
        <div className="text-danger">{formErros.phone}</div>
      </div>
      <input type="submit" value="submit" className="button mb-2" />
      <input
        type="reset"
        value="reset"
        className="btn btn-success"
        onClick={() => resetHandler}
      />
    </form>
  );
};

// const AddEmployee = ({ state, changeState }) => {
//   const [emp_id, setEmpId] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [status, setStatus] = useState("");
//   const [age, setAge] = useState("");
//   const [phone, setPhone] = useState("");

//   const [emp_idError, setEmp_idError] = useState(false);
//   const [nameError, setNameError] = useState(false);
//   const [addressError, setAddressError] = useState(false);
//   const [statusError, setStatusError] = useState(false);
//   const [ageError, setAgeError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .post(`${URI}`, {
//         emp_id,
//         name,
//         address,
//         status,
//         age,
//         phone,
//       })
//       .then(() => {
//         swal("hurray", "employee added successfully", "success");
//         changeState(!state);
//       })
//       .catch((e) => {
//         console.log(e.name);
//         swal("oops", `employee with the ${emp_id} id already exist`, "error");
//       });
//   };
//   const resetHandler = () => {
//     setEmpId("");
//     setName("");
//     setAddress("");
//     setStatus("");
//     setAge("");
//     setPhone("");

//     setEmp_idError(false);
//     setNameError(false);
//     setNameError(false);
//     setAddressError(false);
//     setStatusError(false);
//     setAgeError(false);
//     setPhoneError(false);
//   };

//   return (
//     <form className="form-control" id="resetform" onSubmit={SubmitHandler}>
//       <div className="mb-2">
//         <h3>Add Employee</h3>
//         <label htmlFor="emp_id"></label>
//         <input
//           type="number"
//           className="form-control"
//           name="emp_id"
//           id="emp_id"
//           value={emp_id}
//           placeholder="enter employee id"
//           required
//           onChange={(e) => {
//             setEmpId(e.target.value);
//             e.target.value && e.target.value.length < 7
//               ? setEmp_idError(true)
//               : setEmp_idError(false);
//           }}
//         />
//         {emp_idError && (
//           <div className="text-danger">please enter valid id</div>
//         )}

//         <label htmlFor="name"></label>
//         <input
//           type="text"
//           name="name"
//           className="form-control"
//           id="name"
//           value={name}
//           placeholder="enter your name"
//           required
//           onChange={(e) => {
//             setName(e.target.value);
//             e.target.value &&
//             (!/^[A-Za-z\s]*$/.test(e.target.value) || e.target.value.length < 5)
//               ? setNameError(true)
//               : setNameError(false);
//           }}
//         />
//         {nameError && (
//           <div className="text-danger">please enter valid name</div>
//         )}

//         <label htmlFor="address"></label>
//         <input
//           type="text"
//           className="form-control"
//           name="address"
//           id="address"
//           value={address}
//           maxLength={30}
//           placeholder="enter your address"
//           required
//           onChange={(e) => {
//             console.log(e.target.value);
//             setAddress(e.target.value);
//             e.target.value && e.target.value.length === 30
//               ? setAddressError(true)
//               : setAddressError(false);
//           }}
//         />
//         {addressError && (
//           <div className="text-danger">max length 30 characters</div>
//         )}
//         <div className="text-danger"></div>

//         <label htmlFor="status"></label>
//         <input
//           type="text"
//           className="form-control"
//           name="status"
//           id="status"
//           value={status}
//           placeholder="where you working currently"
//           required
//           onChange={(e) => {
//             setStatus(e.target.value);
//             e.target.value && !/^[A-Za-z\s]*$/.test(e.target.value)
//               ? setStatusError(true)
//               : setStatusError(false);
//           }}
//         />
//         {statusError && (
//           <div className="text-danger">please enter valid data</div>
//         )}

//         <label htmlFor="age"></label>
//         <input
//           type="number"
//           className="form-control"
//           name="age"
//           id="age"
//           value={age}
//           placeholder="enter your age"
//           required
//           onChange={(e) => {
//             console.log(e.target.value);
//             setAge(e.target.value);

//             e.target.value && (e.target.value < 0 || e.target.value > 60)
//               ? setAgeError(true)
//               : setAgeError(false);
//           }}
//         />
//         {ageError && (
//           <div className="text-danger">
//             please enter age between (0-60) years
//           </div>
//         )}

//         <label htmlFor="phone"></label>
//         <input
//           type="number"
//           className="form-control"
//           name="phone"
//           id="phone"
//           value={phone}
//           placeholder="enter your contact number"
//           required
//           onChange={(e) => {
//             setPhone(e.target.value);
//             e.target.value &&
//             (e.target.value.length < 10 || e.target.value.length > 10)
//               ? setPhoneError(true)
//               : setPhoneError(false);
//           }}
//         />
//         {phoneError && (
//           <div className="text-danger">please enter correct phone number</div>
//         )}
//       </div>
//       <input type="submit" value="submit" className="button mb-2" />
//       <input
//         type="reset"
//         value="reset"
//         className="btn btn-success"
//         onClick={() => resetHandler()}
//       />
//     </form>
//   );
// };
export default AddEmployee;


// *********************************************************************************************
