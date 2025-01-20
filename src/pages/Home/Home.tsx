import React from 'react';
import one from '../../assets/baner/1.webp';

import ImageCard2 from '../../ul/ux/imageCard/imageCard2y';
// import ImageCard1 from '../../ul/ux/imageCard/imageCard1';

const imagesContext = (require as any).context('../../assets/images', true, /\.(webp|jpg|png)$/);

const images = Array.prototype.map.call(imagesContext.keys(), (imagePath: string) => {
  return imagesContext(imagePath);
}) as string[];

function Home() {
  
  return (
    <>
      <main className='container relative h-[19750px] sm:h-[22320px] lg:h-[25700px] mb-4 mx-auto'>
      {/* <main className='container relative flex flex-col mb-4 mx-auto h-screen'> */}
        <div className='flex flex-col justify-between items-center'>
          <img id='poster' className='relative mb-16 object-cover' src={one} alt="" />
          {/* <ImageCard1 images={images} /> */}
          <ImageCard2 images={images} />
        </div>
      </main>
    </>
  );
}

export default Home;
