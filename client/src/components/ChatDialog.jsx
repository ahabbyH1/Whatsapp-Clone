import { Box, Dialog,styled } from "@mui/material";
import Manu from "./chat/menu/Menu";
import ChatBox from "./chat/chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProveder";
import EmptyChat from "./chat/chat/EmptyChat";


const Component = styled(Box)({
    display: "flex"
})
const LeftComponent = styled(Box)({
    minWidth: "450px"
})
const RightComponent = styled(Box)({
    borderLeft: "1px solid rgba(0,0,0,0.14)",
    width: "73%",
    minWidth: "300px",
    height: "100%"
})
const dialogStyle = {
    height: "95%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "15px",
    boxShadow: "none",
    borderRadius: "0",
    overflow: "hidden"
}
export default function ChatDialog()
{
    const {person} = useContext(AccountContext)
    return(
        <Dialog open={true} PaperProps={{sx: {...dialogStyle}}} hideBackdrop={true}>
            <Component>
                <LeftComponent>
                    <Manu></Manu>
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                </RightComponent>
            </Component>
        </Dialog>
    )
}