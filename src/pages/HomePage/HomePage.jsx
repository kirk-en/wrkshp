import "./HomePage.scss";
import { Paper, Typography, Box, Button, Avatar } from "@mui/material";

import { Instagram } from "@mui/icons-material";
import VisitCard from "../../components/VisitCard/VisitCard";

const artists = [
  {
    name: "Timantha Warhol",
    instagram: "https://www.instagram.com/annebuckwalter/",
    id: 1000808241,
  },
  {
    name: "Jeff Gordon",
    instagram: "https://www.instagram.com/jeffgordonweb",
    id: 1000808241,
  },
];

function HomePage() {
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        wrkshp
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {artists.map((artist) => {
          return <VisitCard artist={artist} key={artist.id} />;
        })}
      </Box>
    </>
  );
}

export default HomePage;
