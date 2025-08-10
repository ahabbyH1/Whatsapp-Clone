import { useContext, useEffect, useState } from "react";
import { getUser } from "../../../service/api";
import {Box,styled} from '@mui/material';
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProveder";


const StyledBox = styled(Box)({
    height: "81vh",
    overflow: "overlay",
})
export default function AllConversation({text})
{
    const {account} = useContext(AccountContext)
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            let response = await getUser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    },[text]);

    return(
        <StyledBox>
            {
                users.map(user => (
                    account && user.sub !== account.sub &&
                    <Conversation key={user.sub} user={user} />
                ))
            }

        </StyledBox>
    )
}