import "./HomePage.scss";
import { Paper, Typography, Box, Button, Avatar, Grid } from "@mui/material";

import { Instagram } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import VisitCard from "../../components/VisitCard/VisitCard";
import "./HomePage.scss";

const generateProfileImageUrl = () => {
  return `https://thispersondoesnotexist.com/?random=${Math.random()}`;
};

const artists = [
  {
    name: "Egon Schiele",
    id: 1000808291,
    instagram: "https://www.instagram.com/averycollinsart/",
    range: "$2k - $8k",
    neighborhood: "Brooklyn, NY",
    date: "September 14, 2024",
    time: "10:00am ET",
    cv: "https://www.instagram.com/averycollinsart/",
    profileImage:
      "https://mymodernmet.com/wp/wp-content/uploads/2021/10/egon-schiele-0.jpeg",
    birthday: "1890",
    pob: "Austria",
    studio:
      "https://onlinecollection.leopoldmuseum.org/images/web-lm-07411-01-default.jpg",
    artworkImgs: [
      "https://uploads8.wikiart.org/images/egon-schiele/landscape-at-krumau-1916.jpg",
      "https://www.creativefabrica.com/wp-content/uploads/2022/11/22/Egon-Schiele-Self-Portrait-Elephant-Graphic-47903434-1-1.png",
      "https://www.belvedere.at/sites/default/files/jart-images/_499086419382_0.jpg",
      "https://asllinea.org/wp-content/uploads/2014/11/9.-Egon-Schiele-Self-Portrait-with-Arm-Twisted-above-Head-1910-copy-b.jpg",
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*zbVZgFyc4fAXnH-Y1EDekg.jpeg",
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/483438/1016551/main-image",
      "https://noeku.on.damlivery.com/s/e6e11ed9d744a41c0c3d2b2dd0222580/noeku/783798/rm:fit/h:500/w:600/q:90/rs:originalSizePng/f:webp/g:fp:0.5:0.5",
      "https://sothebys-brightspot-migration.s3.amazonaws.com/84/6b/5b/7a1ba5b6cabc54ff9c10624ef781129f119f3149ffdfee5c2498eb3eb2/024l11006-64pcc.jpg",
      "https://images-prod.dazeddigital.com/355/azure/dazed-prod/1210/3/1213736.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Egon_Schiele_-_Einzelne_H%C3%A4user_%281915%29.jpg",
      "https://www.arthistoryproject.com/site/assets/files/9104/egon-schiele-obelisk-art-history.webp",
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg",
    ],
    about:
      "Egon Schiele was an Austrian Expressionist known for his raw and emotive depictions of the human form. His work often involved a meticulous process of drawing, where he used sharp lines and distorted perspectives to convey intense psychological depth. The content of his art focused on themes of sexuality, mortality, and existential angst, frequently portraying contorted, skeletal figures in provocative and unsettling poses.",
  },
  {
    name: "Andy Warhol",
    id: 1000808292,
    instagram: "https://www.instagram.com/masonbradleyart/",
    range: "$3k - $15k",
    neighborhood: "SoHo, NY",
    date: "September 21, 2024",
    time: "2:00pm ET",
    cv: "https://www.masonbradleyart.com/",
    profileImage:
      "https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F0Xic80p4D5RbEMGvQEmYFQ%2Fnormalized.jpg&width=636",
    birthday: "1928",
    pob: "pennsylvania",
    studio:
      "https://news.artnet.com/app/news-upload/2023/05/andy-warhol-1024x1001.jpg",
    artworkImgs: [
      "https://images.masterworksfineart.com/product/andy-warhol/andy-warhol-artist.webp",
      "https://www.warhol.org/wp-content/uploads/2017/03/2002-4-24_pub_01-Web-Ready-475px-longest-edge-Check-Copyright-Before-Using-on-Web.jpg",
      "https://whitneymedia.org/assets/artwork/5633/69_13_8_cropped.jpeg",
      "https://imgix.ranker.com/user_node_img/50102/1002026002/original/portrait-of-maurice-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355",
      "https://sothebys-brightspot.s3.amazonaws.com/media-desk/46/bb/6774cd7347088f91e1cb985a88d9/l24160-cxddl-t1-01.jpg",
      "https://sothebys-md.brightspotcdn.com/9b/28/61fb0d234e5a9e4deef0a6d6dbcc/n11425-65lx5-t2-02-a.jpg",
      "https://sothebys-md.brightspotcdn.com/86/2e/891898604580883f2a90da893a37/n11424-cxyrh-t1-07.jpg",
      "https://sothebys-md.brightspotcdn.com/webnative/images/0d/8c/32c1305e4de8b6f407001f665c5a/n11471-cvtpq-t1-02-a.jpg",
      "https://sothebys-md.brightspotcdn.com/webnative/images/65/49/77ebf7484b96be750a01a706b34b/hk1521-cxrqh-t2-01-cropped.jpg",
      "https://sothebys-md.brightspotcdn.com/2c/ba/3056df0c450cb08d6994d6348942/l24160-cvtdw-t1-01.jpg",
      "https://sothebys-md.brightspotcdn.com/webnative/images/ee/0a/4431d87f4d1aa349a9308a1c53eb/de2360-cszyy-t2-01.jpg",
      "https://sothebys-md.brightspotcdn.com/03/89/d89f8a80467ebe49879992bb4601/n11349-bb5m9-t1-10.jpg",
    ],
    studioPos: "-255px",
    about:
      "My practice is centered around the exploration of movement and emotion through dynamic compositions. I use color and form to capture fleeting moments, aiming to evoke a visceral response in the viewer.",
  },
  {
    name: "Francis Bacon",
    id: 1000808293,
    instagram: "https://www.instagram.com/sloanemitchellart/",
    range: "$500 - $5k",
    neighborhood: "Queens, NY",
    date: "September 7, 2024",
    time: "11:00am ET",
    cv: "https://www.sloanemitchellart.com/",
    profileImage:
      "https://thatswhatidliketoknow.wordpress.com/wp-content/uploads/2014/02/francisbaconartist.jpg",
    birthday: "1909",
    pob: "Ireland",
    studio:
      "https://www.telegraph.co.uk/multimedia/archive/02733/bacon-3_2733197k.jpg",
    artworkImgs: [
      "https://dl6pgk4f88hky.cloudfront.net/2021/05/2021_04_francis_bacon-scaled.jpg",
      "https://media.npr.org/assets/img/2013/11/13/bacon132way_custom-bbeeca89db96a68dc29db68ea1fa1b9024a00080.jpg",
      "https://www.christies.com/-/jssmedia/images/features/articles/2017/09/12/bacon/francis-bacon-study-of-red-pope-1962-framed.jpg?h=2400&iar=0&w=1865&rev=4e3b25d5f1fa43509a35db1f62d605d2&hash=0f1ca2358b23a303e2b4b3d3a15f5782015dbee9",
      "https://sothebys-md.brightspotcdn.com/webnative/images/c0/ac/44ff621a4e6fbc44d32aa7d0dfee/pf2426-cpkx2-t2-01.jpg",
      "https://sothebys-md.brightspotcdn.com/6c/55/14f76d6c49128181a530aab0da00/l22010-c9tpg-cs-01-frame.jpg",
      "https://sothebys-brightspot-migration.s3.amazonaws.com/f1/47/58/d2d2877c62a5e2969e1a5e38bed4781ffc9e5c5aa628b2a3cce2fc0d90/n08317-22-lr-1.jpg",
      "https://sothebys-brightspot.s3.amazonaws.com/dotcom/1f/bc/d9/a9e688f23440a3729d3b42ba28151603bb38f816f4931b5df2c81025f5/l20020-bgwt2-framed-wall-web2.jpg",
      "https://sothebys-md.brightspotcdn.com/06/0a/cb397a964b90a6f13e28e51324fe/146n10098-b7znh-a.jpg",
      "https://www.nationalgalleries.org/sites/default/files/styles/ngs_default/public/externals/4287cc0b93fded1d8c398bf2e9f0fa69.jpg?itok=m1ZtDFan",
      "https://img.artlogic.net/w_1438,h_862,c_limit/exhibit-e/5a7db4e0a09a721a338b4568/5ba605cfe8371d10767a910e52ed6a07.jpeg",
      "https://www.onefishstore.com/cdn/shop/products/2006.webp?v=1680372569",
      "https://www.researchgate.net/publication/259337346/figure/fig3/AS:11431281252282831@1718634424960/Francis-Bacon-Portrait-of-Henrietta-Moraes-on-a-Blue-Couch-1965-an-example-of.tif",
    ],

    about:
      "Francis Bacon was a British painter renowned for his powerful and often disturbing portrayals of the human condition. His process involved using bold, expressive brushstrokes and a technique of layering and distorting figures to create a sense of movement and emotional intensity. The content of his work frequently explored themes of suffering, existential despair, and the fragility of the human body, often depicting twisted, screaming figures in confined, claustrophobic spaces.",
  },
];

function HomePage() {
  return (
    <>
      {/* LOGO DIV */}
      <header className="header">
        <img
          src={logo}
          alt="the words glyph in the color yellow with a retro style font"
          className="header__logo"
        />
        <p className="header__tagline">
          buy art directly from artist studios near you.
        </p>
      </header>

      <main className="main">
        <Typography
          variant="h2"
          sx={{ width: "22vw" }}
          className="main__tagline"
        >
          buy art directly from artist studios near you.
        </Typography>
        <div className="main__grid-container">
          <Grid container spacing={2}>
            {artists.map((artist) => {
              return (
                <Grid item xs={6} sm={4} key={artist.id}>
                  <VisitCard artist={artist} />
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                  >
                    {/* <Typography
                      sx={{ pt: 1, fontSize: "1.25rem", fontWeight: "300" }}
                    >
                      {artist.name.toLowerCase()}
                    </Typography> */}
                    {/* <a href={artist.instagram} target="_blank">
                        <Instagram></Instagram>
                      </a> */}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
}

export default HomePage;
