import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SaveAsIcon from "@mui/icons-material/SaveAs";

function EditForm({
  firstName,
  lastName,
  email,
  id,
  handleCloseEditForm,
  handleOpenEditForm,
}) {
  const [inputName, setName] = useState(firstName);
  const [inputLastname, setLastname] = useState(lastName);
  const [inputEmail, setEmail] = useState(email);
  const [error, setError] = useState("");
  const handleCreate = async () => {
    try {
      const response = await fetch(`/api/customers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: inputName,
          lastName: inputLastname,
          email: inputEmail,
        }),
      });
      console.log(inputName, "inputname");
      if (response.ok) {
        const responseBody = await response.json();
        console.log("respbody", responseBody);
        //navigate(`/api/customers/${id}`);
        handleCloseEditForm(responseBody);
      } else {
        const responseBody = await response.json();
        console.log("resbody", responseBody);
        setError(responseBody.errors[0].defaultMessage);
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <Box component="section" sx={{ p: 2, textAlign: "center" }}>
        <Stack spacing={2} useFlexGap sx={{ alignItems: "center", my: 4 }}>
          <TextField
            id="outlined-basic"
            label="Vorname"
            variant="outlined"
            required
            sx={{ width: "65%" }}
            type="text"
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
        <Box sx={{ p: 2, textAlign: "center", color: "red" }}>
          <Typography variant="p">{error}</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<SaveAsIcon />}
          sx={{ color: "rgb(255, 255, 255)", background: "rgb(47, 83, 211)" }}
          onClick={handleCreate}
        >
          Speichern
        </Button>
      </Box>
    </>
  );
}

export default EditForm;
