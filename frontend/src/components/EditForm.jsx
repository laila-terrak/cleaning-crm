import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LetterAvatar from "./LetterAvatar";

function EditForm() {
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
          />
          <TextField
            id="outlined-basic"
            label="Nachname"
            variant="outlined"
            required
            sx={{ width: "65%" }}
          />
          <TextField
            id="outlined-basic"
            label="Email-Adresse"
            variant="outlined"
            required
            sx={{ width: "65%" }}
            type="email"
          />
        </Stack>
        <Button
          variant="contained"
          startIcon={<SaveAsIcon />}
          sx={{ color: "rgb(255, 255, 255)", background: "rgb(47, 83, 211)" }}
        >
          Speichern
        </Button>
      </Box>
      <Box sx={{ p: 2, textAlign: "center", color: "red" }}>
        <Typography variant="p"></Typography>
      </Box>
    </>
  );
}

export default EditForm;
