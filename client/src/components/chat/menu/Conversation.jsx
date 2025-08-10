import {Box,Typography,styled,Divider} from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProveder'
import { setConversation } from '../../../service/api'



const Component = styled(Box)({
    display: "flex",
    height: 45,
    padding: "13px 0",
    cursor: "pointer"
})
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
    objectFit: "cover"
})
const StyledDivider = styled(Divider)({
    margin: "0 0 0 70px",
    backgroundColor: "#e9edef",
    opacity: "0.6"
})
export default function Conversation({user})
{
    const {setPerson,account} = useContext(AccountContext);
    const getUser = async() => {
        setPerson(user);
        await setConversation({senderId: account.sub,receiverId: user.sub})
    }
    
    return(
        <>
        <Component onClick={getUser}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Component>
        <StyledDivider/>
        </>
    )
}