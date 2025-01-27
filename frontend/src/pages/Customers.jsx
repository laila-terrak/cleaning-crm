import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';

const Customers = () => {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleRowClick = (params) => {
    navigate(`/customers/${params.row.id}`)
  };

  useEffect(() => {
    // Fetch customer data
    fetch('api/customers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching customer data');
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  // Define columns for the DataGrid table
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fname', headerName: 'First Name', width: 200 },
    { field: 'lname', headerName: 'Last Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
  ];

  return (
    <>
    <Paper sx={{ height: 400, width: '100%' }}>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <DataGrid
        onRowClick={(params) => handleRowClick(params)}       
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
    </Paper>
    <AddButton/>
    </>
  );
};

export default Customers;







