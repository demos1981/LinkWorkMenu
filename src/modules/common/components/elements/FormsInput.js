import React from 'react';


import Button from "@mui/material/Button";

import Popup from "reactjs-popup";
import "./formStyles.css";
import { TextField } from "@mui/material";

function FormsInput({ onCreate }) {
  function onFormSubmit(e) {
    e.preventDefault();
    onCreate({
      logo: e.target.elements.logo.value,
      urls: e.target.elements.urls.value,
    });
    e.target.reset();
  }

  return (
    <div className="formCard">
      <Popup
        trigger={
          <Button variant="contained" sx={{ marginTop: 10 }}>
            Create Cards
          </Button>
        }
        position="right center"
      >
        {(close) => (
          <form onSubmit={onFormSubmit}>
            <TextField
              required
              className="textField"
              id="logo"
              name="logo"
              label="Required"
              type="text"
              defaultValue="Name Site"
            />
            <TextField
              required
              className="textField"
              id="urls"
              name="urls"
              label="Required"
              type="text"
              defaultValue="Url address"
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              sx={{ height: 50, width: 200, marginLeft: 2 }}
            >
              Submit
            </Button>

            <Button
              color="primary"
              variant="contained"
              sx={{ height: 50, width: 200, marginLeft: 2 }}
              onClick={() => {
                close();
              }}
            >
              Close
            </Button>
          </form>
        )}
      </Popup>
    </div>

    //
  );
};
export default FormsInput;