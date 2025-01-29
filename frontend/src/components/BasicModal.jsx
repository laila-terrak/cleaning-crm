import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BasicModal = ({open, handleClose,firstName, lastName,handleAccept}) => {
    
    return (
        <>
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 400,bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,}}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Kunde löschen
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Du bist gerade dabei, den Kunden {firstName} {lastName} zu löschen, bist du dir sicher?
            </Typography>
            <Button  variant="contained" startIcon={<DeleteIcon/>} sx={{color: 'rgb(255, 255, 255)', background: 'rgb(211, 47, 47)', m:1}} onClick={handleAccept} >
                ja,löschen!
            </Button>
            <Button  variant="contained"  sx={{color: 'rgb(255, 255, 255)', background: '#0288d1', m:1}} onClick = {handleClose}>
                abbrechen
            </Button>
          </Box>
        </Fade>
      </Modal>  
        </>
    )
}
 export default BasicModal;