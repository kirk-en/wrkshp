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
  Modal,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import profile from "../../assets/artist-profile.jpg";
import studio from "../../assets/studio-2.jpg";
import "./VisitCard.scss";
import { useState } from "react";
import * as React from "react";

const slideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  height: "75vh",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function VisitCard({ artist }) {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRSVP = () => {
    setRsvpOpen(true);
  };
  const handleRsvpClose = () => {
    console.log("dialog closed");
    setRsvpOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("modal closed");
    setModalOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 2,
          py: 2,
          px: 4,
          height: "70vh",
          width: "100%",
          backgroundImage: `url('${artist.studio}')`,
          backgroundSize: "cover",
          backgroundPosition: `${
            artist.studioPos ? artist.studioPos : "center"
          }`,
        }}
        onClick={handleModalOpen}
      ></Paper>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-label={`${artist.name} profile`}
        disableBackdropClick={false}
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={artist.profileImage}
            ></Avatar>
            <Typography>{artist.name}</Typography>
            <Typography>{`b. ${artist.birthday}, ${artist.pob}`}</Typography>
            <Button variant="contained" onClick={handleRSVP}>
              RSVP
            </Button>
            <Typography>{`current location: ${artist.neighborhood}`}</Typography>
            <Typography>{`price range: ${artist.range}`}</Typography>
            <Typography>{`desc: ${artist.about}`}</Typography>
            <Dialog
              open={rsvpOpen}
              onClose={handleRsvpClose}
              TransitionComponent={slideTransition}
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
                <Button onClick={handleRsvpClose}>Cancel</Button>
                <Button type="submit">RSVP</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default VisitCard;
