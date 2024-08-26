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
    artworkImgs: [
      "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578321271369-d008a1ee4fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578320743746-788d990bd318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1575995874161-325b260c9b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1669749216793-040be16ade1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1631792510680-8883d3d26270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1580711508381-9934107eb02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1654663477425-acf704a970d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1579009120005-df2fd9baf7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321709412-0fa051e5bb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
    ],
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
    artworkImgs: [
      "https://images.unsplash.com/photo-1578321271369-d008a1ee4fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631792510680-8883d3d26270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321709412-0fa051e5bb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1654663477425-acf704a970d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1575995874161-325b260c9b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1579009120005-df2fd9baf7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1669749216793-040be16ade1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1580711508381-9934107eb02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578320743746-788d990bd318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    ],
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
    artworkImgs: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578321271369-d008a1ee4fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1669749216793-040be16ade1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321709412-0fa051e5bb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578320743746-788d990bd318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1654663477425-acf704a970d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579009120005-df2fd9baf7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1580711508381-9934107eb02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1575995874161-325b260c9b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631792510680-8883d3d26270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
    ],

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
