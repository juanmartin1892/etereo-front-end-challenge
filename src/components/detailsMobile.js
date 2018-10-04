import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getMobilesDetails
} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        mobiles: state.mobiles.mobile
    }
}

class DetailsMobile extends React.Component {
    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
      this.props.getMobilesDetails(this.props.match.params.id);
    }

    render () {

      return (
        <div className = "d-flex justify-content-center">
          <div className="card col-md-8 mb-3 mr-2 ml-2 p-0">
            <img className="card-img-top" src={ this.props.mobiles.productImage } alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{ this.props.mobiles.name }</h5>
              <p className="card-text">{ this.props.mobiles.description }</p>
              <p className="card-text"> Disponible en: {this.props.mobiles.color}</p>
            </div>
            <div class="card-footer text-muted">
              {this.props.mobiles.price}
            </div>
          </div>
        </div>
      )
    }
}

export default connect(mapStateToProps, { getMobilesDetails })(DetailsMobile);
