import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import EmployeeList from '../components/EmployeeList';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee'
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
import EmployeeDetails from '../components/EmployeeDetails';

const AppRouter = () => {
    const [employees, setEmployee] = useLocalStorage('employees', []);

    useEffect(() => {
        // Realizar solicitud a la API utilizando Axios para obtener datos de los empleados
        axios.get('http://127.0.0.1:8080/api/employees')
            .then(response => setEmployee(response.data))
            .catch(error => console.error('Error fetching employee data:', error));
    }, []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <EmployeeList {...props} employees={employees} setEmployee={setEmployee} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AddEmployee {...props} employees={employees} setEmployee={setEmployee} />
                            )}
                            path="/add"
                        />
                        <Route
                            render={(props) => (
                                <EditEmployee {...props} employees={employees} setEmployee={setEmployee} />
                            )}
                            path="/edit/:id"
                        />
                        <Route
                            render={(props) => (
                                <EmployeeDetails {...props} employees={employees} setEmployee={setEmployee} />
                            )}
                            path="/details/:id"
                        />
                        <Route
                            render={() => <Redirect to="/" />}
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;