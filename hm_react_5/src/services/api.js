import axios from "axios";

let options={
    baseURL:'https://reqres.in/api'
}

let axiosInstance = axios.create(options);

const getUser = (id) => {
    return axiosInstance.get('/users/'+id); // promise
};
const getUserSearch = (page) => {
    return axiosInstance.get('/users?page='+page); // promise
};

export {getUser,getUserSearch}