import React from 'react';
import one from '../../assets/baner/1.webp';

import ImageCard2 from '../../ul/ux/imageCard/imageCard2y';

const imagesContext = (require as any).context('../../assets/images', true, /\.(webp|jpg|png)$/);

const images = Array.prototype.map.call(imagesContext.keys(), (imagePath: string) => {
  return imagesContext(imagePath);
}) as string[];

function Home() {
  
  return (
    <>
      <main className='container relative h-[14500px] sm:h-[22320px] lg:h-[16400px] mb-4 mx-auto'>
        <div className='flex flex-col justify-between items-center '>
          <img id='poster' className='relative mb-8  object-cover' src={one} alt="" />
          <ImageCard2 images={images} />
        </div>
      </main>
    </>
  );
}

export default Home;
