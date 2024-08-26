import "./HomePage.scss";
import { Paper, Typography, Box, Button, Avatar, Grid } from "@mui/material";

import { Instagram } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import VisitCard from "../../components/VisitCard/VisitCard";

const generateProfileImageUrl = () => {
  return `https://thispersondoesnotexist.com/?random=${Math.random()}`;
};

const artists = [
  {
    name: "Avery Collins",
    id: 1000808291,
    instagram: "https://www.instagram.com/averycollinsart/",
    range: "$2k - $8k",
    neighborhood: "Brooklyn",
    date: "September 14, 2024",
    time: "10:00am ET",
    cv: "https://www.instagram.com/averycollinsart/",
    profileImage: generateProfileImageUrl(),
    birthday: "1993",
    pob: "Alaska",
    studio:
      "https://pyxis.nymag.com/v1/imgs/244/cd6/e538f54607d1200f3ef646a437b8910694-1----.w710.jpg",
    about:
      "I explore themes of identity and place through a combination of abstract and figurative work. My art reflects a deep connection to the landscapes and environments that shape us, with a focus on the interaction between the personal and the universal.",
  },
  {
    name: "Mason Bradley",
    id: 1000808292,
    instagram: "https://www.instagram.com/masonbradleyart/",
    range: "$3k - $15k",
    neighborhood: "Charlotte",
    date: "September 21, 2024",
    time: "2:00pm ET",
    cv: "https://www.masonbradleyart.com/",
    profileImage: generateProfileImageUrl(),
    birthday: "1971",
    pob: "California",
    studio:
      "https://sistaticv2.blob.core.windows.net/cultured-mag/img/2019/11/SarahFaux_CF050913_sharp.jpg",
    studioPos: "-95px",
    about:
      "My practice is centered around the exploration of movement and emotion through dynamic compositions. I use color and form to capture fleeting moments, aiming to evoke a visceral response in the viewer.",
  },
  {
    name: "Sloane Mitchell",
    id: 1000808293,
    instagram: "https://www.instagram.com/sloanemitchellart/",
    range: "$500 - $5k",
    neighborhood: "Queens",
    date: "September 7, 2024",
    time: "11:00am ET",
    cv: "https://www.sloanemitchellart.com/",
    profileImage: generateProfileImageUrl(),
    birthday: "1985",
    pob: "New York",
    studio:
      "https://plus.unsplash.com/premium_photo-1675425205829-f175c8e5f2cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studioPos: "-462px",
    about:
      "I am driven by a fascination with texture and materiality, often incorporating unconventional materials into my work. My pieces are an exploration of the boundaries between sculpture and painting, creating tactile experiences that invite viewers to engage with the physicality of art.",
  },
];

function HomePage() {
  return (
    <>
      <Box sx={{ height: "15vh", display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="the words glyph in the color yellow with a retro style font"
          className="logo"
        />
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
        <Grid container spacing={2}>
          {artists.map((artist) => {
            return (
              <Grid item xs={4} key={artist.id}>
                <VisitCard artist={artist} />
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
