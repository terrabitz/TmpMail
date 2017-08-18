import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import  '../styles/main.scss';

injectTapEventPlugin();

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => {
        this.setState((prevState, props) => ({
            open: !prevState.open
        }));
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <AppBar title={<Link to="/">TmpMail</Link>} onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >

                    <Link to="/domains">
                        <MenuItem primaryText="Domains" onTouchTap={this.handleClose}/>
                    </Link>
                    <Link to="/users">
                        <MenuItem primaryText="Users" onTouchTap={this.handleClose}/>
                    </Link>
                </Drawer>
            </div>
        )
    }


}


const Index = () => (
    <div>Hello World</div>
);

const Domains = () => (
    <div>Hello Domains</div>
);

render(
    <BrowserRouter>
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <MainMenu/>
            </MuiThemeProvider>

            <Route exact path="/" component={Index}/>
            <Route path="/domains" component={Domains}/>
        </div>
    </BrowserRouter>,
    document.getElementById("main")
);
