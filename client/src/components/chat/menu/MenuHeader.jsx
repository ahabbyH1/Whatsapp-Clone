import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProveder";
import ChatIcon from '@mui/icons-material/Chat';
import MenuMoreIcon from "./MenuMoreIcon";
import InfoDrawer from "../drawer/InfoDrawer";

const Component = styled(Box)({
    height: "40px",
    backgroundColor: "#ededed",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center"
});
const IconStyle = styled(Box)`
margin-left: auto;
& > *{
margin-left: 5px;
padding: 8px;
};
& :first-chile{
font-size: 22px;
};
`

const Image = styled("img")({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid grey",
    // display: "block"
});

export default function ManuHeader() {
    const { account } = useContext(AccountContext);
    const [openDrawer,setOpenDrawer] = useState(false);
    const handleOpen=() => {
        setOpenDrawer(true);
    }

    return (
        <>
        <Component>
            <Image
                onClick={handleOpen}
                src={account?.picture || "https://via.placeholder.com/32"}
                alt="dp"
                referrerPolicy="no-referrer"
            />
            <IconStyle>
                <ChatIcon/>
                <MenuMoreIcon setOpenDrawer={setOpenDrawer}/>
            </IconStyle>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    );
}
