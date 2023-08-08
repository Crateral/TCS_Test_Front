import React from 'react';
import Employee from './Employee';
import axios from 'axios';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const EmployeeList = ({ employees, setEmployee }) => {
  const history = useHistory();
  return (

    <React.Fragment>
      <div className="employee-list">
        {!_.isEmpty(employees) ? (
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <Employee key={employee.employeeId} {...employee} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="message">No hay empleados disponibles.</p>
        )}

        <Button variant="primary" onClick={() => history.push(`/add`)}>
          Create Employee
        </Button>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;