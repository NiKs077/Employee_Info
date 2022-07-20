import axios from 'axios';
import { URI } from './constant';
const Employee = ({ id, emp_id, name, address, status, age, phone,state,changeState}) => {

  const deleteHandler=(id)=>{
    axios.delete(`${URI}/${id}`).then(()=>{
      changeState(!state);
    });
  }
  return (
      <tr>
        {/* <td>{id}</td> */}
        <td>{emp_id}</td>
        <td>{name}</td>
        <td>{address}</td>
        {/* <td>{status}</td> */}
        <td>{age}</td>
        <td>{phone}</td>
        <td>
          <button className="btn btn-danger" onClick={()=>deleteHandler(id)}>delete</button>
        </td>
      </tr>
  );
};
export default Employee;
