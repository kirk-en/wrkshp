import {
  Paper,
  Typography,
  Box,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import profile from "../../assets/artist-profile.jpg";
import "./VisitCard.scss";
import { useState } from "react";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VisitCard({ artist }) {
  const [open, setOpen] = useState(false);

  const handleRSVP = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("dialog closed");
    setOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          py: 2,
          px: 4,
        }}
      >
        <div>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={profile}
            variant="square"
          ></Avatar>
          <Typography variant="subtitle1">{artist.name}</Typography>
          <a href={artist.instagram} target="_blank">
            <Instagram></Instagram>
          </a>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          corporis tempore provident. Ab officia placeat tempore ex vitae veniam
          dolore nemo perferendis! Architecto culpa consequatur, tempora
          quibusdam dolores corporis excepturi!
        </div>
        <div>
          <Button variant="contained" onClick={handleRSVP}>
            RSVP
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogTitle>join us.</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {artist.name.toLowerCase()} on (visit.date) in{" "}
              {artist.neighborhood}
            </DialogContentText>
            <div className="rsvp__name-fields">
              <TextField
                autoFocus
                required
                variant="outlined"
                id="fname"
                name="fname"
                label="first name"
                type="text"
                margin="dense"
                sx={{ pr: 3 }}
              />
              <TextField
                autoFocus
                required
                variant="outlined"
                id="lname"
                name="lname"
                label="last name"
                type="text"
                margin="dense"
                sx={{ flexGrow: "2" }}
              />
            </div>
            <TextField
              required
              fullWidth
              variant="outlined"
              id="email"
              name="email"
              label="email"
              type="email"
              margin="dense"
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              id="phone"
              name="phone"
              label="cell"
              type="text"
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">RSVP</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  );
}

export default VisitCard;
