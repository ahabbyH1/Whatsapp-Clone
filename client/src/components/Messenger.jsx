import {AppBar,Toolbar,styled,Box} from '@mui/material';
import LoginDial from './account/LoginDial';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProveder';
import ChatDialog from './ChatDialog';


const Container = styled(Box)({
    height: "100vh",
    width: "100vw",
    backgroundColor: "#DCDCDC"
})
const Header = styled(AppBar)({
    backgroundColor: "#25D366",
    height: "220px",
    boxShadow: "none"
})
const ChatHeader = styled(AppBar)({
    backgroundColor: "#25D366",
    height: "150px",
    boxShadow: "none"
})


export default function Messenger()
{
    const {account} = useContext(AccountContext);
    return(
        <Container>
            {account ?
            <> 
            <ChatHeader>
                <Toolbar></Toolbar>
            </ChatHeader>
                <ChatDialog/>
            </>
             :
            <>
            <Header>
                <Toolbar></Toolbar>
            </Header>
            <LoginDial/>
            </>
        }
        </Container>
    )
}