import React from 'react';

import Header from './Header';
import Footer from './Footer';
import {Home, About, Contact} from './Content';
import {Route, Link, Switch} from 'react-router-dom'
import Todos from './Todos';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {css: 'Foundation'};
    }

    render() {
        return BasicExample();
    }
}

const BasicExample = () => (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/todos" component={Todos}/>
            </Switch>
            <Footer/>
        </div>

)