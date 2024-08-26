import { ImageList, ImageListItem, Dialog } from "@mui/material";
import { useState } from "react";

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
      <ImageList variant="masonry" cols={3} gap={8}>
        {artworkImgs.map((artwork) => {
          return (
            <ImageListItem
              key={artwork.url}
              onClick={() => handleClickOpen(artwork)}
            >
              <img src={artwork} alt="" style={{ cursor: "pointer" }} />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <img src={selectedImage} alt="" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default ImageBlock;
