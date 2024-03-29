import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {title: 'React Playground'};
        this.tempTitle = '';
    }

    handleChange(e) {
        this.tempTitle = e.target.value;
    }

    saveTitle() {
        this.setState({title: this.tempTitle});
    }

    render() {
        return (
            <div class="header" style={addBottomMargin}>
                <div class="top-bar" id="responsive-menu">
                    <div class="top-bar-left">
                        <ul class="menu" data-dropdown-menu>
                            <li class="menu-text"><span><i class="fi-cloud"></i>{this.state.title}</span></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <div class="top-bar-right">
                        <ul class="menu">
                            <li>
                                <input type="text" placeholder='Page Title' onChange={this.handleChange.bind(this)}/>
                            </li>
                            <li>
                                <button type="button" class="button" onClick={this.saveTitle.bind(this)}>Change title</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const addBottomMargin = {
    marginBottom: '1.5em'
}