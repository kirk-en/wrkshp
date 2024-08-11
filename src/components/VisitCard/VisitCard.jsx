import { Paper, Typography, Box, Button, Avatar } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import profile from "../../assets/artist-profile.jpg";

function VisitCard({ artist }) {
  console.log(artist);
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
          <Avatar sx={{ width: 100, height: 100 }} src={profile}></Avatar>
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
          <Button variant="contained">RSVP</Button>
        </div>
      </Paper>
    </>
  );
}

export default VisitCard;
