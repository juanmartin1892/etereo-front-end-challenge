import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        loader: state.mobiles.loader
    }
}

class Loader extends React.Component {
    render () {
      return (
        <div className = { this.props.loader ? 'loader' : 'hiddenLoader' }>
          <img src= { process.env.PUBLIC_URL + "/lg.blue-longcat-spinner.gif"}/>
        </div>
      )
    }
}

export default connect(mapStateToProps, { })(Loader);
