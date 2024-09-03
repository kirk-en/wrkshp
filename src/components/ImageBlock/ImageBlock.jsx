import { ImageList, ImageListItem, Dialog } from "@mui/material";
import { useState } from "react";
import "./ImageBlock.scss";

const ImageBlock = ({ artworkImgs }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageList cols={3} gap={2} rowHeight={164}>
        {artworkImgs.map((artwork) => {
          return (
            <ImageListItem
              key={artwork.url}
              onClick={() => handleClickOpen(artwork)}
              style={{
                width: "15vw", // Ensures each item is square
                height: "15vw", // Matches the rowHeight
              }}
            >
              <img
                src={`${artwork}?fit=crop&auto=format`}
                alt=""
                loading="lazy"
                className="image-block__image"
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <img src={selectedImage} alt="" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default ImageBlock;
