import { FC, useEffect } from "react";
import arrow from '../../../assets/arrow/arrow1.png';
import arrow2 from '../../../assets/arrow/arrow2.png';


interface ImageCard1Props {
    images: string[]
}

const ImageCard1:FC<ImageCard1Props> = ({ images }) => {
    useEffect(() => {
        let currentImageIndex = 0;
        const images = document.querySelectorAll('img:not(#poster)');
    
        const handleImageClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'IMG' && target.id !== 'poster' && target.id !== 'arrow') {
                const modal = document.createElement('div');
                const target = event.target as HTMLImageElement;
                modal.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center', 'z-50', 
                    'max-w-screen', 'max-h-screen', 'scale-125', 'duration-300', 'ease-in-out');
                const modalImage = document.createElement('img');
                modalImage.src = target.src;
                modalImage.alt = target.alt;
                modal.appendChild(modalImage);
                document.body.appendChild(modal);
    
                currentImageIndex = Array.prototype.indexOf.call(images, target);
    
                modal.addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
    
                document.addEventListener('keydown', handleKeyDown);
            }
        };
    
        const handleKeyDown = (event: KeyboardEvent) => {
            const modalImage = document.querySelector('.fixed img') as HTMLImageElement;
            if (event.key === 'ArrowLeft') {
              currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
              if (modalImage) {
                const currentImage = images[currentImageIndex] as HTMLImageElement;
                if (currentImage.id === 'arrow') {
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                }
                };
              updateModalImage();
            } else if (event.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1 + images.length) % images.length;
                if (modalImage) {
                  const currentImage = images[currentImageIndex] as HTMLImageElement;
                  if (currentImage.id === 'arrow') {
                      currentImageIndex = (currentImageIndex + 1 + images.length) % images.length;
                  }
                  };
              updateModalImage();
            }
          };
          
          const updateModalImage = () => {
            const modalImage = document.querySelector('.fixed img') as HTMLImageElement;
            if (modalImage) {
              const currentImage = images[currentImageIndex] as HTMLImageElement;
              if (currentImage.id !== 'arrow') {
                modalImage.src = currentImage.src;
                modalImage.alt = currentImage.alt;
              }
            }
          };
    
        document.addEventListener('click', handleImageClick);
    
        return () => {
            document.removeEventListener('click', handleImageClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-col flex-wrap items-center">
            <div className="flex flex-wrap">
              <div className="relative bg-white h-[1000px] w-[900px] shadow-2xl shadow-black rounded-2xl scale-90">
                <img id='' className='absolute top-[50px] left-[20px] max-w-[500px] object-cover -rotate-12 duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[0]} alt="" />
                <img id='arrow' className='absolute top-[50px] right-[20px] rotate-[62deg] max-w-[500px] object-cover' src={arrow2} alt="" />
                <img id="" className='absolute bottom-[280px] right-[60px] max-w-[400px] object-cover rotate-12 duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[1]} alt="" />
                <p className="absolute z-[10] max-w-[500px] bottom-[170px] left-[0px] rotate-[-75deg] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam </p>
              </div>
              <div className="relative bg-white h-[1000px] w-[900px] shadow-2xl shadow-black rounded-2xl scale-90">
                <img id='' className='absolute top-[50px] left-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[2]} alt="" />
                <img id="" className='absolute top-[450px] left-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[3]} alt="" />
                <img id="" className='absolute top-[250px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[4]} alt="" />
                <img id="" className='absolute top-[450px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[5]} alt="" />
                <img id="" className='absolute top-[250px] right-[320px] max-w-[300px] h-[400px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer ' src={images[6]} alt="" />
                <img id="" className='absolute top-[650px] right-[450px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[7]} alt="" />
                <img id="" className='absolute top-[650px] right-[20px] max-w-[400px] w-[350px] h-[200px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer ' src={images[9]} alt="" />
              </div>
            </div>
            <div className="flex">
              <div className="relative bg-white h-[1000px] w-[900px] shadow-2xl shadow-black rounded-2xl scale-90">
                <img id='' className='absolute top-[50px] left-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[10]} alt="" />
                <img id="" className='absolute top-[450px] left-[20px] max-w-[250px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[11]} alt="" />
                <img id="" className='absolute top-[250px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[12]} alt="" />
                <img id="" className='absolute top-[450px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[13]} alt="" />
                <img id="" className='absolute top-[250px] right-[320px] max-w-[300px] h-[400px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer ' src={images[14]} alt="" />
                <img id="" className='absolute top-[650px] right-[450px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[15]} alt="" />
              </div>
              <div className="relative bg-white h-[1000px] w-[900px] shadow-2xl shadow-black rounded-2xl scale-90">
                <img id='' className='absolute top-[50px] left-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[16]} alt="" />
                <img id="arrow" className='absolute top-[70px] right-[270px] max-w-[300px] rotate-[-70deg] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={arrow} alt=""/>
                <img id="" className='absolute top-[450px] left-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[17]} alt="" />
                <img id="" className='absolute top-[250px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[18]} alt="" />
                <img id="" className='absolute top-[450px] right-[20px] max-w-[300px] object-cover duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer' src={images[19]} alt="" />
                <img id="" className='absolute bottom-[150px] right-[320px] max-w-[280px] h-[400px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] cursor-pointer ' src={images[20]} alt="" />
              </div>
            </div>
        </div>
    );
   
}

export default ImageCard1