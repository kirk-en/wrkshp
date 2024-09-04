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
  createTheme,
  ThemeProvider,
  colors,
  useMediaQuery,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import profile from "../../assets/artist-profile.jpg";
import studio from "../../assets/studio-2.jpg";
import "./VisitCard.scss";
import { useState } from "react";
import * as React from "react";
import ImageBlock from "../ImageBlock/ImageBlock";

const slideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "glyph",
          },
          style: {
            backgroundColor: "white",
            border: "solid 1px black",
            textTransform: "lowercase",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          },
        },
      ],
    },
  },
});

function VisitCard({ artist }) {
  const tablet = useMediaQuery("(min-width:768px)");
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    height: "90vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    ...(tablet && {
      width: "50vw",
      height: "75vh",
    }),
  };

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
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 2,
          py: 2,
          px: 4,
          height: {
            xs: "55vh",
            sm: "75vh",
          },
          width: "100%",
          backgroundImage: `url('${artist.studio}')`,
          backgroundSize: "cover",
          backgroundPosition: `${
            artist.studioPos ? artist.studioPos : "center"
          }`,
          cursor: "pointer",
        }}
        onClick={handleModalOpen}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e0e0e0f0",
            width: "100%",
            borderRadius: ".5rem",
          }}
        >
          <Typography
            sx={{
              p: 1,
              fontSize: { xs: ".75rem", sm: "1rem", md: "1.25rem" },
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            {artist.name.toLowerCase()}
          </Typography>
          {/* <a href={artist.instagram} target="_blank">
                      <Instagram></Instagram>
                    </a> */}
        </Box>
      </Paper>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-label={`${artist.name} profile`}
        disableBackdropClick={false}
      >
        <Box sx={modalStyle}>
          {/* FLEX INFO SEC AND IMAGES */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* FLEX INFO LEFT AND RIGHT */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "column",
                mt: "-4rem",
                ...(tablet && {
                  flexDirection: "row",
                  mt: 0,
                }),
              }}
            >
              {/* FLEX INFO LEFT */}
              <Button
                variant="glyph"
                onClick={handleModalClose}
                sx={{
                  position: "relative",
                  left: "85%",
                  top: "3rem",
                  ...(tablet && {
                    display: "none",
                  }),
                }}
              >
                x
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: "9.5rem",
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{ width: 150, height: 150, mb: 1 }}
                  src={artist.profileImage}
                ></Avatar>
                <Typography>
                  {artist.name.toLowerCase()} <br />
                  {`(b. ${artist.birthday}, ${artist.pob.toLowerCase()})`}
                </Typography>
                <Button variant="glyph" onClick={handleRSVP}>
                  visit studio
                </Button>
              </Box>
              {/* FLEX INFO RIGHT */}
              <Box sx={{ flex: 1 }}>
                <Typography>
                  <span className="bold-span">artist statement: </span>
                  {artist.about}
                </Typography>
                <Typography sx={{ pt: 2 }}>
                  <span className="bold-span">current location: </span>
                  {artist.neighborhood.toLowerCase()}
                </Typography>
                <Typography>
                  <span className="bold-span">price range: </span>
                  {artist.range}
                </Typography>
              </Box>
            </Box>
            <ImageBlock artworkImgs={artist.artworkImgs} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                ...(tablet && {
                  display: "none",
                }),
              }}
            >
              <Button variant="glyph" onClick={handleModalClose}>
                close
              </Button>
            </Box>

            <Dialog
              open={rsvpOpen}
              onClose={handleRsvpClose}
              TransitionComponent={slideTransition}
              keepMounted
            >
              <DialogTitle>join us.</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {artist.name.toLowerCase()} on {artist.date.toLowerCase()} in{" "}
                  {artist.neighborhood.toLowerCase()}
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
    </ThemeProvider>
  );
}

export default VisitCard;
