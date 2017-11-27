import React from 'react'
import ReactDom from 'react-dom'
import Layout from './components/Layout'

import {HashRouter as Router} from 'react-router-dom';

const app = document.getElementById('app');

ReactDom.render((
    <Router>
        <Layout/>
    </Router>),
app);