import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="small-offset-2 columns">
                    <h3>Home Component<br/>
                        <small>
                            This is a home component
                        </small>
                    </h3>
                </div>
            </div>
        );
    }
}

export class About extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="small-offset-2 columns">
                    <h3>About Component<br/>
                        <small>
                            This is an about component
                        </small>
                    </h3>
                </div>
            </div>
        );
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="small-offset-2 columns">
                    <h3>Contact Component<br/>
                        <small>
                            This is a contact component
                        </small>
                    </h3>
                </div>
            </div>
        );
    }
}

