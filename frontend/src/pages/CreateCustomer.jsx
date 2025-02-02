import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const [inputName, setName] = useState("");
  const [inputLastname, setLastname] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await fetch(`/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: inputName,
          lastName: inputLastname,
          email: inputEmail,
        }),
      });
      if (response.ok) {
        navigate("/customers");
      } else {
        const responseBody = await response.json();
        setError(responseBody.errors[0].defaultMessage);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Box component="section" sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">
          Bitte lege einen neuen Kunden an, indem du das folgende Formular
          ausfüllst.
        </Typography>
        <Divider />
        <Stack spacing={2} useFlexGap sx={{ alignItems: "center", my: 4 }}>
          <TextField
            id="outlined-basic"
            label="Vorname"
            variant="outlined"
            required
            sx={{ width: "65%" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={inputName}
          />
          <TextField
            id="outlined-basic"
            label="Nachname"
            variant="outlined"
            required
            sx={{ width: "65%" }}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            value={inputLastname}
          />
          <TextField
            id="outlined-basic"
            label="Email-Adresse"
            variant="outlined"
            required
            sx={{ width: "65%" }}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={inputEmail}
          />
        </Stack>
        <Button
          variant="contained"
          startIcon={<SaveAsIcon />}
          sx={{ color: "rgb(255, 255, 255)", background: "rgb(47, 83, 211)" }}
          onClick={handleCreate}
        >
          Kunde anlegen
        </Button>
      </Box>
      <Box sx={{ p: 2, textAlign: "center", color: "red" }}>
        <Typography variant="p">{error}</Typography>
      </Box>
    </>
  );
};

export default CreateCustomer;
