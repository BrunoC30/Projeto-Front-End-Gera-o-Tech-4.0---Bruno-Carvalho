import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const Gallery = () => {

 const images = [
         {
            original: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-7.jpeg?raw=true'
         },
         {
            original:'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-2.jpeg?raw=true'
         },
         {
            original:'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-8.jpeg?raw=true'
         },
         {
            original:'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-3.jpeg?raw=true'
         },
         {
            original:'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-4.jpeg?raw=true'
         }
       
       
 ]


    return (
         <div style={{width:'100%'}}>

            <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true}
                autoPlay={true}
                showNav={false}
    
            />
        </div> 
    );
}
 
export default Gallery;