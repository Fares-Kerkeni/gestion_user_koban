import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./form.module.scss";

import GoogleIcon from "@mui/icons-material/Google";

const Form = () => {
  // Your component logic goes here

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "200px" },
        }}
        noValidate
        autoComplete="off"
        size="small"
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          sx={{
            "& > :not(style)": { width: "300px" },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Mot de passe"
          variant="outlined"
          type="password"
          size="small"
          sx={{
            "& > :not(style)": { width: "300px" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            "& > :not(style)": { width: "300px" },
          }}
          className={styles.button_connexion}
        >
          Connexion
        </Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<GoogleIcon />}
          className={styles.button_google}
        >
          Connexion via google
        </Button>
      </Box>
    </div>
  );
};

export default Form;
