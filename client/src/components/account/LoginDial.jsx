import { useContext } from "react";
import { Box, Dialog,Typography,List,ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProveder";
import { addUser } from "../../service/api";



const DialogStyle = {
    width: "60%",
    height: "96%",
    marginTop: "12%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}
const Container = styled(Box)({
    display: "flex"
})
const Compo1 = styled(Box)({
    padding: "56px 0 56px 56px"
})
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: "50px 0 0 200px"
})
const Title = styled(Typography)({
    fontSize: "26px",
    color: "#525252",
    fontWeight: 300,
    fontFamily: "inherit",
    marginBottom: "25px"
})
const StyledList = styled(List)`
& > li{
padding: 0;
margin-top: 15px;
font-size: 18px;
line-height: 28px;
color: #4a4a4a
}
`

export default function LoginDial()
{
    const {setAccount} = useContext(AccountContext)
    const onLoginSuccess = async(res) => {
        let decode = jwtDecode(res.credential);
        setAccount(decode);
        await addUser(decode);
    }
    const onLoginError = (err) => {
        console.log("login failed",err)
    }

    return(
        <Dialog open={true} PaperProps={{sx:DialogStyle}} hideBackdrop={true}>
            <Container>
                <Compo1>
                    <Title>To use Whatsapp on your computer;</Title>
                    <StyledList>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap menu or setting and select linked devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Compo1>
                <Box style={{position: "relative"}}>
                    <QRCode src={qrCodeImage} alt="QR code" />
                    <Box style={{position: "absolute",top: "50%",transform: "translatex(110%)"}}>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
                    </Box>
                </Box>
            </Container>
        </Dialog>
    )
}