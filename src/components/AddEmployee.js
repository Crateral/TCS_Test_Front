import React from 'react';
import EmployeeForm from './EmployeeForm.js';
import axios from 'axios';

const AddEmployee = ({ history, employees, setEmployee }) => {
  const handleOnSubmit = (employee) => {
    axios.post('http://127.0.0.1:8080/api/employee', employee)
      .then(response => {
        setEmployee([employee, ...employees]);
        history.push('/');
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <React.Fragment>
      <EmployeeForm handleOnSubmit={handleOnSubmit} isEditing={false}/>
    </React.Fragment>
  );
};

export default AddEmployee;