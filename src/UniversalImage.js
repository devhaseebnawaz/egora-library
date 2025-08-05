// import React from 'react';


// let NextImage;
// try {
//   NextImage = require('next/image').default;
// } catch (e) {
//   NextImage = null;
// }

// export default function UniversalImage({ src, alt = "image", width = '100%', height = '100%', objectFit = 'contain', style = {} }) {
//   const commonStyle = {
//     width,
//     height,
//     objectFit,
//     ...style,
//   };

//   if (NextImage) {
//     return (
//       <div style={{ position: 'relative', width, height }}>
//         <NextImage src={src} alt={alt} layout="fill" objectFit={objectFit} />
//       </div>
//     );
//   }

//   return <img src={src} alt={alt} style={commonStyle} />;
// }


import React from "react";
import Image from "next/image"; // Will work only in Next.js

export default function UniversalImage({
  src,
  alt = "image",
  width = "100%",
  height = "100%",
  objectFit = "contain",
  style = {},
  fallback = false, // Pass true to force <img> usage
}) {
  const commonStyle = {
    width,
    height,
    objectFit,
    ...style,
  };

  // If you want to use <img> instead of next/image in some cases
  if (fallback) {
    return <img src={src} alt={alt} style={commonStyle} />;
  }

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    </div>
  );
}
