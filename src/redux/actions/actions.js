const axios = require('axios');

module.exports = {

  getAllMobiles: () => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/mobiles`)
        .then((res) => {
            let mobiles = res.data
            dispatch({type:'LOAD_MOBILES', mobiles})
        }).catch((err) => {
            console.log(err)
        })
    }
  },

  getMobilesDetails: (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/mobiles`)
        .then((res) => {
            let mobile = res.data.find((elemt) => {
              return elemt.id == id;
            });
            dispatch({type:'VIEW_MOBILE', mobile})
        }).catch((err) => {
            console.log(err)
        })
    }
  },

  openCloseLoader: (open) => {
    return (dispatch) => {
        dispatch({type:'LOADER', loader: open});
    }
  }

}
