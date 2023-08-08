import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const EmployeeForm = (props) => {
  console.log(props)
  const history = useHistory();
  const [employee, setEmployee] = useState({
    firstName: props.employee ? props.employee.firstName : '',
    middleName: props.employee ? props.employee.middleName : '',
    lastName: props.employee ? props.employee.lastName : '',
    locationCity: props.employee ? props.employee.locationCity : '',
    address: props.employee ? props.employee.address : '',
    dateBirth: props.employee ? props.employee.dateBirth : '',
    telephone: props.employee ? props.employee.telephone : '',
    positionTitle: props.employee ? props.employee.positionTitle : '',
    hireDate: props.employee ? props.employee.hireDate : '',
    email: props.employee ? props.employee.email : '',
    salary: props.employee ? props.employee.salary : '',
    timePosition: props.employee ? props.employee.timePosition : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { firstName, middleName, lastName, locationCity, address, dateBirth,
    telephone, positionTitle, hireDate, email, salary, timePosition } = employee;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstName, middleName, lastName, locationCity, address, dateBirth,
      telephone, positionTitle, hireDate, email, salary, timePosition];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const newEmployee = {
        firstName,
        middleName,
        lastName,
        locationCity,
        address,
        dateBirth: new Date(dateBirth),
        telephone,
        positionTitle,
        hireDate: new Date(hireDate),
        email,
        salary: parseFloat(salary),
        timePosition: parseInt(timePosition)
      };

      if (props.isEditing) {
        // Llamar al props.handleOnSubmit directamente aquí, sin hacer el llamado al PUT
        props.handleOnSubmit(employee);
      } else {
        // Llamar al props.handleOnSubmit directamente aquí, sin hacer el llamado al POST
        props.handleOnSubmit(newEmployee);
      }
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'timePosition':
        if (value === '' || value.match(/^(0|[1-9]\d*)$/)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'email':
        if (value === '' || value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'address':
        if (value === '' || value.match(/^[a-zA-Z0-9\s\-\.,#]+$/i)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'dateBirth':
        if (value === '' || value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'hireDate':
        if (value === '' || value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'salary':
        if (value === '' || value.match(/^\d+(\.\d{1,2})?$/)) {
          setEmployee((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setEmployee((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      <h3>Employee Section</h3>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter firt name of employee"
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="middleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="middleName"
            value={middleName}
            placeholder="Enter middle name of employee"
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter last name of employee"
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="locationCity">
          <Form.Label>Location City</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="locationCity"
            value={locationCity}
            placeholder="Enter location city of employee"
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Enter address of employee"
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="dateBirth">
          <Form.Label>Date Birth</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="dateBirth"
            value={dateBirth}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="telephone"
            value={telephone}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <h3>Position Section</h3>
        <Form.Group controlId="positionTitle">
          <Form.Label>Position Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="positionTitle"
            value={positionTitle}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="hireDate">
          <Form.Label>Hire Date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="hireDate"
            value={hireDate}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="salary"
            value={salary}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Form.Group controlId="timePosition">
          <Form.Label>Time in Position</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="timePosition"
            value={timePosition}
            onChange={handleInputChange}
            readOnly={false}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          {props.isEditing ? 'Update' : 'Submit'}
        </Button>
        <Button variant="primary" className="submit-btn" onClick={() => history.push(`/`)}>
          Employee List
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeForm;