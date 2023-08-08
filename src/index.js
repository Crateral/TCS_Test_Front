import React from 'react';
import { createRoot } from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<AppRouter />);