import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const Gallery = ({view=1}) => {

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

 const images2 = [
   {
      original: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.jpeg?raw=true',
      thumbnail: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.jpeg?raw=true'
   },
   {
      original: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.jpeg?raw=true',
      thumbnail: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.jpeg?raw=true'
   },
   {
      original: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.jpeg?raw=true',
      thumbnail: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.jpeg?raw=true'
   },
   {
      original: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-5.jpeg?raw=true',
      thumbnail: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-5.jpeg?raw=true'
   }


 ]

    return (
         <> {

            <div style={{width:'100%'}}>
               {
                  //condição
                  view===1 ? 
                  (
                     <ImageGallery
                     items={images}
                     showPlayButton={false}
                     showFullscreenButton={false}
                     showThumbnails={false}
                     showBullets={true}
                     autoPlay={true}
                     showNav={false}
                  />
                  ) : (
                     <ImageGallery
                     items={images2}
                     showThumbnails={true}
                     showNav={true}
                     showFullscreenButton={true}
                     />
                  )
               } 
             </div> 
         }
        </>
    );
}
 
export default Gallery;