
const initState = {}

export default (state = initState, action = {}) => {
    switch (action.type) {
        case "SORT_DATA_ERROR":
            return {
            };
        case "SORT_DATA_SUCCESS":
            return {
                ...state,
                type: "SUCCESS",
                ...action.data,
            };
        default:
            return state
    }
}

