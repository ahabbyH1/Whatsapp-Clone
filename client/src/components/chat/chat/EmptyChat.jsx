import { Box, Typography,styled,Divider } from "@mui/material";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)({
    backgroundColor: "#f8f9fa",
    padding: "30px 0",
    textAlign: "center",
    height: "100vh"
})
const Container = styled(Box)({
    padding: "0 200px"
})
const Image = styled("img")({
    width: 400,
    marginTop: 100
})
const Title = styled(Typography)({
    fontSize: 32,
    margin: "25px 0 10px 0",
    fontFamily: "inherit",
    fontWeight: "300",
    color: "#41525d"
})
const SubTitle = styled(Typography)({
    fontSize: 14,
    color: "#667781",
    fontWeight: "400",
    fontFamily: "inherit"
})
const StyledDivider = styled(Divider)({
    margin: "30px 0"
})

export default function EmptyChat()
{
    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="image" />
                <Title>Whatsapp web</Title>
                <SubTitle>Now send and receive messeges without without keeping you phone online</SubTitle>
                <SubTitle>Use whtsapp on up to 4 linke devices and 1 phone at the same time</SubTitle>
                <StyledDivider/>
            </Container>
        </Component>

    )
}