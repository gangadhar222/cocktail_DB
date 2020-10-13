import {DATAREQUEST} from './actionTypes'
import axios from 'axios'

export const dataRequest = (payload) => ({
    type: DATAREQUEST,
    payload
})

export const getData = (payload) => dispatch => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${payload}`)
        .then(res => res.data)
        .then(res => dispatch(dataRequest(res)))
        .catch(err => dispatch(err));
}