import {Box,InputBase,styled} from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useEffect } from 'react';
// import { uploadFile } from '../../../service/api';

const Container = styled(Box)`
display: flex;
align-item: center;
height: 45;
width: 100%;
background-color: #ededed;
padding: 15px 15px;
& > *{
color: #919191;
margin: 5px; 
}
`
const Search = styled(Box)({
    backgroundColor: "#ffffff",
    width: "85%",
    borderRadius: 15,
    
})
const Input = styled(InputBase)({
    padding: 18,
    width: "100%",
    alignSelf: "center",
    height: 15,
    paddingLeft: 25,
    fontSize: 14,
})


export default function ChatFooter({sendText,setValue,value,file,setFile}){
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }
    useEffect(() => {
        const setFile = async () => {
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                // await uploadFile(data);
            }
        }
        setFile();
    },[file])


    return(
        <Container>
            <EmojiEmotionsOutlinedIcon sx={{cursor: "pointer","&:hover":{color: "black"}}}/>
            <label htmlFor='fileInput'>
                <AttachFileOutlinedIcon sx={{cursor: "pointer","&:hover":{color: "black"}}}/>
            </label>
            <input onChange={(e) => onFileChange(e)} id='fileInput' type='file' style={{display: "none"}}/>
            <Search>
                 <Input placeholder='Type a Message' onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => sendText(e)} value={value}/>
            </Search>
            <MicNoneOutlinedIcon sx={{cursor: "pointer","&:hover":{color: "black"}}}/>

        </Container>
    )
}