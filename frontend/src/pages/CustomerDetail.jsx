import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';


 const CustomerDetails  = () => {
    const { id } = useParams();
   const [customerDetail, setCustomerDetail] = useState([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     // Fetch customer data
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
        <h1>Here are the Customer details! {id}</h1>
        <p>id:{customerDetail.id}</p> 
        <p>id:{customerDetail.firstName}</p>     
        </>     
       )}
    </>
    
    /*
     <Paper sx={{ height: 400, width: '100%' }}>
       {loading ? (
         <p>Loading data...</p>
       ) : (
         <DataGrid
           rows={customers.map((customer) => ({
             id: customer.id, 
             fname: customer.firstName, 
             lname: customer.lastName,
             email: customer.email,
           }))}
           columns={columns}
           pageSizeOptions={[5, 10]}
           checkboxSelection
           initialState={{
             pagination: {
               paginationModel: { page: 0, pageSize: 5 },
             },
           }}
         />
       )}
     </Paper>*/
   );
 };
 export default CustomerDetails;