import "./HomePage.scss";
import { Paper, Typography, Box, Button, Avatar } from "@mui/material";

import { Instagram } from "@mui/icons-material";
import VisitCard from "../../components/VisitCard/VisitCard";

const artists = [
  {
    name: "Coming Soon",
    id: 1000808291,
    instagram: "https://www.instagram.com/annebuckwalter/",
    range: "$2k - $8k",
    neighborhood: "brooklyn",
    time: "10:00am ET",
    cv: "https://www.instagram.com/annebuckwalter/",
    profileImage: "image",
    birthday: "1993",
    pob: "Alaska",
    studio:
      "https://pyxis.nymag.com/v1/imgs/244/cd6/e538f54607d1200f3ef646a437b8910694-1----.w710.jpg",
    about:
      "My work addresses the tension between male and female experience in modern day America. I primarily paint figures in day glow colors to express the vivid emotions around this theme.",
  },
  {
    name: "Coming Soon",
    id: 1000808292,
    instagram: "https://www.instagram.com/jeffgordonofficial/",
    range: "$3k - $15k",
    neighborhood: "charlotte",
    time: "2:00pm ET",
    cv: "https://www.jeffgordon.com/",
    profileImage: "image",
    birthday: "1971",
    pob: "California",
    studio:
      "https://sistaticv2.blob.core.windows.net/cultured-mag/img/2019/11/SarahFaux_CF050913_sharp.jpg",
    studioPos: "-95px",
    about:
      "Zooming from the fast lanes of NASCAR to the slow brushstrokes of the canvas, Jeff Gordon redefines what it means to blend speed and artistry. Known for his vivid abstract paintings that evoke the rush of a final lap, Jeff captures the energy and precision that made him a racing legend, now translating it into dynamic splashes of color and form. His work explores the intersection of velocity and emotion, leaving viewers breathless and exhilarated.",
  },
  {
    name: "Coming Soon",
    id: 1000808293,
    instagram: "https://www.instagram.com/sidthe_sloth/",
    range: "$500 - $5k",
    neighborhood: "prehistoric plains",
    time: "11:00am ET",
    cv: "https://www.sidthe_sloth.com/",
    profileImage: "image",
    birthday: "Ice Age",
    pob: "Pangea",
    studio:
      "https://plus.unsplash.com/premium_photo-1675425205829-f175c8e5f2cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about:
      "Sid the Sloth, the world's most laid-back artist, creates art at a pace only a true sloth could appreciate.",
  },
];

function HomePage() {
  return (
    <>
      <Box sx={{ height: "15vh", display: "flex", alignItems: "center" }}>
        <Typography variant="h1" sx={{ textAlign: "left" }}>
          glyph
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          height: "80vh",
        }}
      >
        <Typography variant="h2" sx={{ width: "22vw", alignSelf: "flex-end" }}>
          buy art directly from artist studios near you.
        </Typography>

        {artists.map((artist) => {
          return (
            <>
              <Box sx={{ width: "15vw", alignSelf: "flex-start" }}>
                <VisitCard artist={artist} key={artist.id} />
                <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                  <Typography
                    sx={{ pt: 1, fontSize: "1.25rem", fontWeight: "300" }}
                  >
                    {artist.name.toLowerCase()}
                  </Typography>
                  {/* <a href={artist.instagram} target="_blank">
                      <Instagram></Instagram>
                    </a> */}
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
}

export default HomePage;
