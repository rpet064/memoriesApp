// import React from "react";
// import axios from "axios";
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";

// const ImagesGallery = () => {
//   const [images, setImages] = React.useState(null);

//   React.useEffect(() => {
//     let shouldCancel = false;

//     const call = async () => {
//       const response = await axios.get(
//         "https://photos.app.goo.gl/QmmRN8qftuFoaZ5Y6"
//       );
//       if (!shouldCancel && response.data && response.data.length > 0) {
//         setImages(
//           response.data.map((url) => ({
//             original: `${url}=w1024`,
//             thumbnail: `${url}=w100`
//           }))
//         );
//       }
//     };
//     call();
//     return () => (shouldCancel = true);
//   }, []);

//   return images ? <ImageGallery items={images} /> : null;
// };

// export default ImagesGallery;
