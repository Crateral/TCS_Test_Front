import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Employee = ({
    employeeId,
    firstName,
    lastName,
    positionTitle
}) => {
    const history = useHistory();
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{positionTitle}</td>
            <td>
                <Button variant="primary" onClick={() => history.push(`/details/${employeeId}`)}>
                    More
                </Button>
                <Button variant="primary" onClick={() => history.push(`/edit/${employeeId}`)}>
                    Edit
                </Button>
            </td>
        </tr>
    );
};
export default Employee;