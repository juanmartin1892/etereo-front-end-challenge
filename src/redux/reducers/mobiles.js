const initialState = {
    mobiles: [],
    mobile: {},
    loader: true
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_MOBILES' :
        return {
            ...state,
            mobiles: action.mobiles,
            loader: false
        }
        case 'VIEW_MOBILE':
        return {
            ...state,
            mobile: action.mobile,
            loader: false
        }
        case 'LOADER':
        return {
            ...state,
            loader: action.loader
        }
        default:
            return state
    }
}
