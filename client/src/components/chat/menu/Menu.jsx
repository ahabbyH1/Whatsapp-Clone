import { useState } from "react";
import AllConversation from "./AllConversation";
import ManuHeader from "./MenuHeader";
import Search from "./Search";

export default function Manu()
{
    const [text,setText] = useState("");
    return(
        <>
        <ManuHeader/>
        <Search setText={setText}/>
        <AllConversation text ={text}/>
        </>
    )
}