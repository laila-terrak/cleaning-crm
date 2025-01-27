import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/customers/create");
    }
    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="info" aria-label="add" onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Box>
        </>
    )
}
 export default AddButton;