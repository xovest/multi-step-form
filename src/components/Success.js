import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //here we should send the info to a db/backend stuff but we suck for now
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success douche" />
          <h1>Thx 4 da submitz</h1>
          <p>You'll get an imaginary email about something so just think about it and nothing else</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
