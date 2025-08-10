import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Menu,MenuItem,styled } from '@mui/material';


const MenuOption = styled(MenuItem)({
    fontSize: "14px",
    padding: "15px 60px 5px 24px",
    color: "4a4a4a"
})
export default function MenuMoreIcon({setOpenDrawer})
{
    const [open,setOpen] = useState(null)

    const handleClose = () => {
        setOpen(null);
    }
    const handleOpen = (e) => {
        setOpen(e.currentTarget);
    }
    return(
        <>
            <MoreVertIcon onClick={handleOpen}/>
            <Menu
                id="basic-menu"
                anchorEl = {open}
                open={open}
                onClose={handleClose}
                keepMounted
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}

             
             >
                <MenuOption onClick={() => {handleClose();setOpenDrawer(true)}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}