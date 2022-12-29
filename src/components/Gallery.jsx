import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";



function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const customStyles = {
    view: () => ({
        // none of react-images styles are passed to <View />
        position: 'relative',
        '& > img': {
            position: 'relative',
            margin: '0 auto'
        },
    })
};

  return (
    <div className='!w-[10%] block'>
    <Gallery photos={photos} onClick={openLightbox} />
    <ModalGateway>
        {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                    currentIndex={currentImage}
                    styles={customStyles}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                />
            </Modal>
        ) : null}
    </ModalGateway>
</div>
  );
}
render(<PhotoGallery />, document.getElementById("app"));


