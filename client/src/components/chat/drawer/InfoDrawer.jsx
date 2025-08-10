import { Box, Drawer, Typography,styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const DrawerStyle = {
    left: 25,
    top: 11,
    height: "95%",
    width: "30%",
    boxShadow: "none",
    backgroundColor: "#ededed"

}
const Header = styled(Box)`
background: #008069;
height: 107px;
color: #ffffff;
display: flex;
&>*{
margin-top: auto;
padding: 15px;

};
`
export default function InfoDrawer({open,setOpen})
{
    const handleClose = () => {
        setOpen(false);
    }
    return(
        <Drawer PaperProps={{sx: DrawerStyle}} open={open} onClose={handleClose} style={{zIndex: 1500}} >
            <Header>
                <ArrowBackIcon onClick={handleClose}/>
                <Typography>Profile</Typography>
            </Header>
            <Box>
                <Profile/>
            </Box>
        </Drawer>
    )
}