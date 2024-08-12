import "./HomePage.scss";
import { Paper, Typography, Box, Button, Avatar } from "@mui/material";

import { Instagram } from "@mui/icons-material";
import VisitCard from "../../components/VisitCard/VisitCard";

const artists = [
  {
    name: "Timantha Warhol",
    id: 1000808291,
    instagram: "https://www.instagram.com/annebuckwalter/",
    range: "$2k - $8k",
    neighborhood: "brooklyn",
    time: "10:00am ET",
    cv: "https://www.instagram.com/annebuckwalter/",
    profileImage: "image",
    birthday: "1993",
    pob: "Alaska",
    about:
      "My work addresses the tension between male and female experience in modern day America. I primarily paint figures in day glow colors to express the vivid emotions around this theme.",
  },
  {
    name: "Jeff Gordon",
    id: 1000808292,
    instagram: "https://www.instagram.com/jeffgordonofficial/",
    range: "$3k - $15k",
    neighborhood: "charlotte",
    time: "2:00pm ET",
    cv: "https://www.jeffgordon.com/",
    profileImage: "image",
    birthday: "1971",
    pob: "California",
    about:
      "Zooming from the fast lanes of NASCAR to the slow brushstrokes of the canvas, Jeff Gordon redefines what it means to blend speed and artistry. Known for his vivid abstract paintings that evoke the rush of a final lap, Jeff captures the energy and precision that made him a racing legend, now translating it into dynamic splashes of color and form. His work explores the intersection of velocity and emotion, leaving viewers breathless and exhilarated.",
  },
  {
    name: "Sid the Sloth",
    id: 1000808293,
    instagram: "https://www.instagram.com/sidthe_sloth/",
    range: "$500 - $5k",
    neighborhood: "prehistoric plains",
    time: "11:00am ET",
    cv: "https://www.sidthe_sloth.com/",
    profileImage: "image",
    birthday: "Ice Age",
    pob: "Pangea",
    about:
      "Sid the Sloth, the world's most laid-back artist, creates art at a pace only a true sloth could appreciate. With a flair for the unconventional, Sid's work features whimsical depictions of prehistoric life, often using natural elements like mud, leaves, and whatever he finds lying around. His art is a celebration of the simple joys of life—whether it's a leisurely dip in a tar pit or a nap under a canopy of ferns. Sid’s unique perspective invites viewers to slow down and enjoy the moment, one art piece at a time.",
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
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          height: "80vh",
        }}
      >
        <Typography variant="h2" sx={{ alignSelf: "flex-end" }}>
          buy art directly from artist studios
        </Typography>
        {artists.map((artist) => {
          return (
            <>
              <Box sx={{ alignSelf: "center" }}>
                <VisitCard artist={artist} key={artist.id} />
                <Typography>name</Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
}

export default HomePage;
