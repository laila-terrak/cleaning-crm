import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Button from '@mui/material/Button';

const CreateCustomer = () => {
    return (
          <Box component="section" sx={{ p: 2, textAlign:"center"}}>
            <Typography variant="h6">
               Bitte lege einen neuen Kunden an, indem du das folgende Formular ausfüllst.
            </Typography>
            <Divider />
            <Stack  spacing={2} useFlexGap sx={{alignItems: "center", my: 4}}>
               <TextField id="outlined-basic" label="Vorname" variant="outlined" required sx={{width: '65%'}}/>
               <TextField id="outlined-basic" label="Nachname" variant="outlined" required sx={{width: '65%'}}/>
               <TextField id="outlined-basic" label="Email-Adresse" variant="outlined"  sx={{width: '65%'}} type='email'/>
            </Stack>
            <Button  variant="contained" startIcon={<SaveAsIcon/>} sx={{color: 'rgb(255, 255, 255)', background: 'rgb(47, 83, 211)',}}>
                Kunde anlegen
              </Button>
         </Box>
    );
 };
  
 export default CreateCustomer;