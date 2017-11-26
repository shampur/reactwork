import React from 'react';

export default class Header extends React.Component {

    handleChange(e) {
        let title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div class="header">
                <h3> {this.props.title} </h3>
                <form>
                    <div class="grid container">
                        <div class="grid-x grid-padding-x">
                            <div class="medium-6 cell">
                                <label> Header
                                    <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)}/>
                                </label>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}