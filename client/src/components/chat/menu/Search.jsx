import { Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';


const Component = styled(Box)({
    backgroundColor: "#fff",
    height: "45px",
    borderBottom: "1px solid #f2f2f2",
    display: "flex",
    alignItems: "center"
})
const Wrapper = styled(Box)({
    backgroundColor: "#f0f2f5",
    position: "relative",
    margin: "0 13px",
    width: "100%",
    borderRadius: "10px"
})
const Icon = styled(Box)({
    position: "absolute",
    height: "100%",
    padding: "6px 10px",
    color: "#919191"
})
const InputField = styled(InputBase)({
    width: "100%",
    padding: "16px",
    paddingLeft: "65px",
    height: "15px",
    fontSize: "14px"
})

export default function Search({setText})
{
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <InputField placeholder="Search or start a new chat" onChange={(e) => setText(e.target.value)}/>
            </Wrapper>
        </Component>
    )
}