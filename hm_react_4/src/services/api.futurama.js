import axios from "axios";

let options={
    baseURL:'https://api.sampleapis.com/futurama'
}

let axiosInstance = axios.create(options);

const getUser = () => {
    return axiosInstance.get('/characters'); // promise
};
const getInventor = () => {
    return axiosInstance.get('/inventory'); // promise
};

export  {
    getUser,getInventor
};