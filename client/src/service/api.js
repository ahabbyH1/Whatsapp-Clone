import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data) =>{
    try{
        await axios.post(`${url}/add`,data);
    }catch(err){
    console.log("failed while adding user",err.message)
    }
}

export const getUser = async() => {
    try{
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    }catch(err)
    {
        console.log("error while fetching data",err.message);
    }
}

export const setConversation = async(data) => {
    try{
        await axios.post(`${url}/conversation/add`,data)
    }catch(err){
        console.log("error while calling setConversation function",err.message);
    }
}

export const getConversation = async(data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`,data);
        return response.data;
    }catch(err){
        console.log(err.message);
    }
}

export const newMessage = async(data) => {
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(err){
        console.log("error while calling message api",err.message);
    }
}

export const getMessage = async(id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(err){
        console.log("error while msg fetching",err.message);
    }
}

// export const uploadFile = async (data) => {
//     try {
//         return await axios.post(`${url}/file/upload`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }