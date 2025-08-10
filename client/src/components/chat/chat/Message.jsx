import {Box,Typography,styled} from '@mui/material'
import { formateDate } from '../../../../utils/commonUtils.js'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProveder.jsx'

const Sender = styled(Box)({
    backgroundColor: "#dcf8c6",
    marginLeft: "auto",
    maxWidth: "60%",
    padding: 5,
    width: "fit-content",
    display: "flex",
    borderRadius: 10,
    wordBreak: "break-word",
})
const Receiver = styled(Box)({
    backgroundColor: "#cccbcbff",
    maxWidth: "60%",
    padding: 6,
    width: "fit-content",
    display: "flex",
    borderRadius: 10,
    wordBreak: "break-all"
})
const Text = styled(Typography)({
    fontSize: 14,
    padding: "0 25px 0 5px"
})
const Time = styled(Typography)({
    fontSize: 10,
    color: "#919191",
    marginTop: 6,
    wordBreak: "keep-all",
    marginTop: "auto"
})
export default function Message({message})
{
    const {account} = useContext(AccountContext)
    return(
        <>
        {
            account.sub === message.senderId ?
                <Sender>
                    <Text>{message.text}</Text>
                     <Time>{formateDate(message.createdAt)}</Time>
                </Sender>
                :
                <Receiver>
                    <Text>{message.text}</Text>
                     <Time>{formateDate(message.createdAt)}</Time>
                </Receiver>
        }
        </>
        
    )
}