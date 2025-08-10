import { Box,styled, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProveder";


const ImagContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
})
const Image = styled("img")({
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "1px solid grey",
    margin: "30px 0 20px"
})

const Wrapper = styled(Box)`
background: #ffffff;
padding: 12px 30px 2px;
box-shadow: 0 1px 3px rgba(0,0,0,0.8);
& :first-of-type{
color: #009688;
font-size: 13px;
font-weight: 200;
}
& :last-child {
margin: 14px 0;
color: #4a4a4a;
}
`
const DescriptionContainer = styled(Box)`
padding: 15px 20px 28px 30px;
& > p{
font-size: 13px;
color: #8696;
}
`
export default function Profile()
{
    const {account} = useContext(AccountContext);

    return(
        <>
            <ImagContainer>
                <Image src={account.picture} alt="" />
            </ImagContainer>
            <Wrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Wrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin, This name will be visible to you whatsapp contact.</Typography>
            </DescriptionContainer>
            <Wrapper>
                <Typography>About</Typography>
                <Typography>Eat! sleep! code! repeat!</Typography>
            </Wrapper>
        </>
    )
}