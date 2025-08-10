import express from 'express';


import { newConversation,getConversation } from '../controller/ConverController.js';
import { addUser,getUser } from '../controller/userController.js';
import { newMessage,getMessage } from '../controller/messageController.js';
// import { uploadImage } from '../controller/fileController.js';

// import upload from '../util/upload.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

// route.post('/file/upload', upload.single('file'), uploadImage);
// route.get('/file/:filename', getImage);


export default route;