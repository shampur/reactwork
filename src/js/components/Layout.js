import React from 'react';

import Header from './Header';
import Footer from './Footer';
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {css: 'Foundation', title: 'Welcome'};
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <div class="row">
                    <div class="small-offset-2 columns">
                        <h3>Finally got webpack working<br/>
                            <small>
                                We are using {this.state.css} as a CSS framework
                            </small>
                        </h3>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}