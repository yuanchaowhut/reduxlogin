import axios from 'axios';

export const createEvent = (event) => {
    return dispatch => {
        return axios.post('/api/event', event)
    }
}
