import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getAllMobiles
} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        mobiles: state.mobiles.mobiles,
        loader: state.mobiles.loader
    }
}

class ListMobiles extends React.Component {
    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
      this.props.getAllMobiles();
    }

    render () {
      const mobiles = this.props.mobiles.map((mobile, index) =>
        <div className="card col-md-4 mb-3 mr-2 ml-2" key={index}>
          <img className="card-img-top" src={ mobile.productImage } alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ mobile.name }</h5>
            <p className="card-text">{ mobile.description }</p>
            <a href={`/mobile/${ mobile.id }`} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>)
      return (
        <div class="row col-md-12 d-flex justify-content-center">
          {mobiles}
        </div>
      )
      // return (
      //   <div>
      //     <span>Hola!, soy un componente</span>
      //   </div>
      // )
    }
}

export default connect(mapStateToProps, { getAllMobiles })(ListMobiles);
