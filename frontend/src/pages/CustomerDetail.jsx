import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import BasicCard from "../components/BasicCard";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import BasicModal from "../components/BasicModal";
import { Try } from "@mui/icons-material";


 const CustomerDetails  = () => {
    const { id } = useParams();
    const [customerDetail, setCustomerDetail] = useState();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleAccept = async () => {
      try {
         fetch(
          `/api/customers/${id}`,
          { method: "DELETE" }
        ).then((handleAccept) => {
          if (handleAccept.ok) {
            navigate("/customers");
          } else{
            alert("Fehler beim Löschen des Eintrags!");
          }
        })
          
      } catch (error) {
        alert("irgendwas ist shiefgelaufen!");
      }
        
      };
    
 
   useEffect(() => {
     fetch(`/api/customers/${id}`)
       .then((response) => {
         if (!response.ok) {
           throw new Error('Error fetching customer data');
         }
         return response.json();
       })
       .then((data) => {
         setCustomerDetail(data);
         setLoading(false);
       })
       .catch((error) => {
         console.error('Error:', error);
         setLoading(false);
       });
   }, []);
   
   return (
    <>
       
        {loading ? (
         <p>Loading data...</p>
       ) : (
        <>
        <Box sx={{display: 'flex', mt:2}}>
          <Box sx={{width: '60%'}}>
            <BasicCard firstName={customerDetail.firstName} lastName={customerDetail.lastName} />
          </Box>
          <Box sx={{width: '40%', ml: 4}}> 
            <Typography variant="h6">
              Kunde info
            </Typography>
            <Divider />
            <Stack direction="row" spacing={1} useFlexGap sx={{alignItems: "center", my: 1}}>
              <EmailIcon sx={{color: 'rgb(189, 189, 189)'}}/>
              <Typography>
                <Link  href={`mailto:${customerDetail.email}`} sx={{color: 'rgb(47, 104, 172)'}}>
                  {customerDetail.email}
                </Link>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} useFlexGap sx={{alignItems: "center",my: 1}}>
              <PersonIcon sx={{color: 'rgb(189, 189, 189)'}}/>
              <Typography  variant="p">
              {customerDetail.firstName} {customerDetail.lastName}
              </Typography>
            </Stack>
            <Divider />
              <Button  variant="contained" startIcon={<DeleteIcon/>} sx={{color: 'rgb(255, 255, 255)', background: 'rgb(211, 47, 47)', my:1}} onClick={handleOpen}>
                Delete
              </Button>
              <BasicModal open = {isModalOpen} handleClose= {handleClose} handleAccept= {handleAccept} firstName={customerDetail.firstName} lastName={customerDetail.lastName}/>
          </Box>
        </Box>
        </>     
       )}
    </>
   );
 };

 export default CustomerDetails;