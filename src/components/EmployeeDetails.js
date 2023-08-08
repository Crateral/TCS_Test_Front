import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EmployeeDetails = ({ employees }) => {
    const history = useHistory();
    const { id } = useParams();
    const employee = employees.find((employee) => employee.employeeId === parseInt(id));
    return (
        <div>
            <div className="employee-details">
                <div className="column">
                    <h2>Employee Section</h2>
                    <h4>First Name: {employee.firstName}</h4>
                    <h4>Middle Name: {employee.middleName}</h4>
                    <h4>Last Name: {employee.lastName}</h4>
                    <h4>Location City: {employee.locationCity}</h4>
                    <h4>Address: {employee.address}</h4>
                    <h4>Date Birth: {employee.dateBirth}</h4>
                    <h4>Telephone: {employee.telephone}</h4>
                </div>
                <div className="column">
                    <h2>Position Section</h2>
                    <h4>Position Title: {employee.positionTitle}</h4>
                    <h4>Hire Date: {employee.hireDate}</h4>
                    <h4>Email: {employee.email}</h4>
                    <h4>Salary: {employee.salary}</h4>
                    <h4>Time in Position(months): {employee.timePosition}</h4>
                </div>
            </div>
            <Button variant="primary" onClick={() => history.push(`/`)}>
                Employee List
            </Button>
        </div>
    );
}


export default EmployeeDetails;