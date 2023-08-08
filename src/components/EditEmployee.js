import React from 'react';
import EmployeeForm from './EmployeeForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = ({ history, employees, setEmployee }) => {
  const { id } = useParams();
  const employeeToEdit = employees.find((employee) => employee.employeeId === parseInt(id));
  console.log(employeeToEdit)
  const handleOnSubmit = (employee) => {
    const filteredEmployees = employees.filter((employee) => employee.employeeId !== parseInt(id));
    axios.put(`http://127.0.0.1:8080/api/employee/${id}`, employeeToEdit)
      .then(response => {
        setEmployee([employee, ...filteredEmployees]);
        history.push('/');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };
  return (
    <div>
      <EmployeeForm employee={employeeToEdit} handleOnSubmit={handleOnSubmit} isEditing={true}/>
    </div>
  );
};

export default EditEmployee;