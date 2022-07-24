const EditEmployee = ({ editFormData,handleEditFormChange, submitEditHandler,handleCancelClick}) => {

  return (
    <tr>
      {/* <td>{id}</td> */}
      <td>
        <input
          type="number"
          className="form-control"
          name="emp_id"
          id="emp_id"
          value={editFormData.emp_id}
          placeholder="enter employee id"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={editFormData.name}
          placeholder="enter your name"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          value={editFormData.address}
          placeholder="enter your address"
          onChange={handleEditFormChange}
          required
        />
      </td>
      {/* <td> */}
      {/* <input
          type="text"
          className="form-control"
          name="status"
          id="status"
          value={status}
           onChange={handleEditFormChange}
          placeholder="where you working currently"
        /> */}
      {/* </td> */}
      <td>
        <input
          type="number"
          className="form-control"
          name="age"
          id="age"
          value={editFormData.age}
          placeholder="enter your age"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          name="phone"
          id="phone"
          value={editFormData.phone}
          placeholder="enter your contact number"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button
          className="btn btn-success"
          type="submit"
          onClick={(e) => submitEditHandler(e)}
        >
          save
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={(e) => handleCancelClick(e)}
        >
          cancel
        </button>
      </td>
    </tr>
  );
};
export default EditEmployee;
