import axios from 'axios'

// 下面的写法是 thunk 的要求，即定义一个函数，其返回值返回的还是一个函数，(dispatch)=>{异步操作}
export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}

export const isUserExists = (identifier) => {
    return dispatch => {
        return axios.get(`/api/users/${identifier}`, identifier)
    }
}
