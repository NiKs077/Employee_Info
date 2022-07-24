import axios from 'axios';
import { URI } from './constant';
const Employee = ({ emp,state,changeState,editClickhandler}) => {

  const deleteHandler=(e,id)=>{
    e.preventDefault();
    axios.delete(`${URI}/${id}`).then(()=>{
      changeState(!state);
    });
  }
  return (
      <tr>
        {/* <td>{id}</td> */}
        <td>{emp.emp_id}</td>
        <td>{emp.name}</td>
        <td>{emp.address}</td>
        {/* <td>{status}</td> */}
        <td>{emp.age}</td>
        <td>{emp.phone}</td>
        <td>
          <button className="btn btn-danger" onClick={(e)=>deleteHandler(e,emp.id)}>delete</button>
        </td>
        <td>
          <button className='btn btn-primary' onClick={(e)=>editClickhandler(e,emp)}>edit</button>
        </td>
      </tr>
  );
};
export default Employee;
