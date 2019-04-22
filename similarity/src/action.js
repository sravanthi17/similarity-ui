import { push } from 'react-router-redux';

export  function fetchSortedData(data, props) {
    return function(dispatch) {
        dispatch({
            type: 'SORT_DATA_REQUEST'
        });
        return fetch("http://localhost:8080/similarity/sort", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({dataList: data})
        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: 'SORT_DATA_ERROR',
                        error: body.error
                    });
                } else {
                    dispatch({
                        type: 'SORT_DATA_SUCCESS',
                        data: body
                    })
                    props.history.push("/viewData");
                }
            });
    }
}