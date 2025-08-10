import {Box,styled} from '@mui/material'
import ChatFooter from './ChatFooter'
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProveder'
import { getMessage, newMessage } from '../../../service/api'
import Message from './Message'



const Container = styled(Box)({
    backgroundImage: "url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)",
    backgroundSize: "50%"
})
const Component = styled(Box)({
    height: "80vh",
    overflowY: "scroll"
})
const MsgContainer = styled(Box)({
    padding: "1px 80px"
})
export default function Messages({person,conversation}){
    const {account} = useContext(AccountContext);
    const [value,setValue] = useState("");
    const [messages,setMessages] = useState([]);
    const [newMsgFlag,setNewMsgFlag] = useState(false);
    const [file,setFile] = useState();

    useEffect(() => {
        const getMessageDetail = async() => {
            let data = await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetail();
    },[person._id,conversation._id,newMsgFlag])

    const sendText = async(e) => {
        const code = e.keyCode || e.which;
        if(code == 13)
        {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
             await newMessage(message);
             setValue("");
             setNewMsgFlag(prev => !prev);
        }
    }
    return(
        <Container>
            <Component>
                {
                    messages && messages.map(message => (
                        <MsgContainer>
                            <Message message={message}/>
                        </MsgContainer>
                        
                    ))
                }
            </Component>
            <ChatFooter file={file} setFile={setFile} sendText = {sendText} setValue={setValue} value={value}/>
        </Container>
    )
}