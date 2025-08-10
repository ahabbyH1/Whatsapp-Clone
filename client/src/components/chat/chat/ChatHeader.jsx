import {Box,Typography,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { defaultProfilePicture } from '../../../constants/data';

const Container = styled(Box)({
    height: 44,
    backgroundColor: "#ededed",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center"
})
const SubContainer = styled(Box)`
margin-left: auto;
& > *{
padding: 8px;
font-size: 22px;
color: #000; 
cursor: pointer
};
`
const Image = styled("img")({
    height: 40,
    width: 40,
    objectFit: "cover",
    borderRadius: "50%"
})
const Name = styled(Typography)({
    marginLeft: 12,
})
const Status = styled(Typography)({
    fontSize: 12,
    marginLeft: 12,
    color: "rgba(0,0,0,0.6)"
})
export default function ChatHeader({person}){
    return(
        <Container>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>offline</Status>
            </Box>
            <SubContainer>
                <SearchIcon/>
                <MoreVertIcon/>
            </SubContainer>
        </Container>
    )
}