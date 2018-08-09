

import axios from 'axios';

const GetUser = 'http://localhost:4000/users/alluser';
const addUser = 'http://localhost:4000/users/saveuser';



export function getClients(keyword) {

    var request = axios.get(GetUser).then(res => {    
        return res.data;
    });
    return {
        type: 'GET_CLIENTS',
        payload: request
    }
}

export function AddNewClient(val) {
    console.log(val);
    const addData = axios.post(addUser , val )
    .then(res => {
        alert('saved sucessfully');
    })
   return {
       type: 'ADD_CLIENT',
       payload: addData
   }
}

