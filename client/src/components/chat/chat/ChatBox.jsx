import {Box} from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProveder'
import { getConversation } from '../../../service/api'

export default function ChatBox()
{
    const [conversation,setConversation] = useState({});
    const {person,account} = useContext(AccountContext);
    useEffect(() => {
        const getConverDetails = async() => {
        let data = await getConversation({senderId: account.sub, receiverId: person.sub});
        setConversation(data);
    }
    getConverDetails();
    },[person.sub]);
    return(
        <Box>
            <ChatHeader person = {person}/>
            <Messages person = {person} conversation = {conversation}/>
        </Box>
    )
}