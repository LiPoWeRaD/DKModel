import { FC, useEffect } from "react";
import arrow from '../../../assets/arrow/arrow1.png';
import arrow2 from '../../../assets/arrow/arrow2.png';

interface ImageCard1Props {
    images: string[]

}

const ImageCard2:FC<ImageCard1Props> = ({ 
    images }) => {

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
        <div className='relative mb-10 w-full h-full flex flex-wrap justify-center items-center gap-3'>
            <img className='absolute lg:max-w-[1000px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] top-0 left-0 right-0 bottom-0 z-[0] cursor-pointer' src={images[0]} alt="" />
            <img className='absolute lg:max-w-[600px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] top-[220px] sm:top-[450px] lg:top-0 right-0 z-[1] cursor-pointer' src={images[1]} alt="" />
            <img className='absolute sm:max-w-[400px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[400px] sm:top-[750px] lg:top-[370px] right-0 rotate-45 z-[3] cursor-pointer' src={images[2]} alt="" />
            <img className='absolute sm:max-w-[400px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[600px] sm:top-[900px] lg:top-[500px] sm:left-[0] lg:left-[400px] z-[2] -rotate-12 sm:rotate-[-45deg] lg:rotate-[12deg] cursor-pointer' src={images[3]} alt="" />
            <img className='absolute lg:max-w-[600px] duration-150 ease-in hover:scale-110 hover:hover:z-[9] top-[800px] sm:top-[1100px] lg:top-[600px] left-0 z-[2] sm:z-[1] lg:z-[2] rotate-12 sm:rotate-[-25deg] lg:rotate-12 cursor-pointer' src={images[4]} alt="" />
            <p className="absolute top-[280px] lg:top-20 right-0 lg:right-[400px] max-w-[300px] lg:max-w-[500px] rotate-12 z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] text-white pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe velit corporis cum magnam</p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[1000px] sm:top-[1400px] lg:top-[900px] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[5]} alt="" />
            <p className="absolute top-[1100px] sm:top-[1500px] lg:top-[1000px] lg:left-[500px] lg:max-w-[500px] z-[10] font-passions text-[64px] leading-[77px] rotate-6 text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[1200px] sm:top-[2250px] lg:top-[1300px] lg:left-80 z-[2] cursor-pointer' src={images[6]} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[1420px] sm:top-[1800px] lg:top-[1100px] lg:right-52 z-[10] pointer-events-none' src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[1710px] sm:top-[2600px] lg:top-[1650px] sm:-right-24 lg:right-28 z-[2] rotate-45 cursor-pointer' src={images[9]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[1900px] sm:top-[2800px] lg:top-[1700px] lg:left-1/2 lg:transform lg:-translate-x-1/2 -rotate-[32deg] z-[1] cursor-pointer' src={images[10]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[2150px] sm:top-[3200px] lg:top-[1650px] left-0 z-[1] cursor-pointer' src={images[7]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[2350px] sm:top-[3600px] lg:top-[2200px] lg:left-[400px] rotate-6 z-[2] cursor-pointer' src={images[11]} alt="" />
            <p className="absolute top-[2200px] sm:top-[2450px] lg:top-[2200px] left-0 lg:max-w-[400px] z-[10] font-passions text-[64px] leading-[77px] rotate-[40deg] lg:rotate-0 text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[2600px] sm:top-[3900px] lg:top-[2600px] left-0 z-[2] sm:rotate-[-15deg] lg:rotate-0 cursor-pointer' src={images[12]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[2820px] sm:top-[4200px] lg:top-[3100px] left-0 z-[2] cursor-pointer' src={images[13]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[3270px] sm:top-[4600px] lg:top-[3100px] sm:rotate-[-25deg] lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[14]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[3750px] sm:top-[5000px] lg:top-[3100px] right-0 z-[2] cursor-pointer' src={images[15]} alt="" />
            <p className="absolute top-[2700px] lg:top-[2600px] lg:right-[100px] lg:max-w-[800px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] text-black sm:text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis  </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] w-full top-[3050px] sm:top-[5400px] lg:top-[3500px] right-0 sm:rotate-[-15deg] lg:rotate-0 z-[2] cursor-pointer' src={images[16]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[3500px] sm:top-[5700px] lg:top-[4600px] sm:rotate-[25deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[17]} alt="" />
            <p className="absolute top-[4000px] lg:top-[4650px] left-0 lg:max-w-[500px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[4120px] sm:top-[6150px] lg:top-[4650px] right-[50px] lg:right-[550px] z-[10] pointer-events-none -scale-x-100 rotate-[-5deg] lg:rotate-[55deg]'  src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[4350px] sm:top-[6600px] lg:top-[5020px] left-0 z-[2] cursor-pointer' src={images[18]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[4500px] sm:top-[7000px] lg:top-[5020px] rotate-12 lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[19]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[4650px] sm:top-[7350px] lg:top-[5020px] right-0 z-[2] cursor-pointer' src={images[20]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[700px] top-[4800px] sm:top-[7700px] lg:top-[5400px] rotate-[-15deg] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[21]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[700px] top-[5000px] sm:top-[8000px] lg:top-[5400px] sm:rotate-[15deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[22]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[5250px] sm:top-[8300px] lg:top-[5500px] rotate-[15deg] sm:rotate-0 lg:left-[700px] lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[23]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[5400px] sm:top-[8600px] lg:top-[5900px] right-0 z-[2] -rotate-6 cursor-pointer' src={images[24]} alt="" />
            <p className="absolute top-[5050px] lg:top-[5900px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-[400px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[5570px] sm:top-[8900px] lg:top-[5900px] left-0 z-[2] rotate-6 cursor-pointer' src={images[25]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[700px] top-[5770px] sm:top-[9200px] lg:top-[6300px] right-0 z-[2] cursor-pointer' src={images[26]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[700px] top-[5920px] sm:top-[9500px] lg:top-[6300px] rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[27]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[6050px] sm:top-[9800px] lg:top-[6350px] lg:left-[700px] lg:transform lg:-translate-x-1/2 z-[2] rotate-12 cursor-pointer' src={images[28]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[6200px] sm:top-[10100px] lg:top-[6500px] lg:left-[900px] lg:transform lg:-translate-x-1/2  z-[2] -rotate-12 cursor-pointer' src={images[31]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] w-full top-[6400px] sm:top-[10450px] lg:top-[6800px] left-0 cursor-pointer' src={images[32]} alt="" />
            <p className="absolute top-[6300px] lg:top-[6900px] lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:max-w-[900px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-white pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <p className="absolute top-[7000px] lg:top-[7000px] lg:left-3/4 lg:transform lg:-translate-x-1/2 lg:max-w-[700px] z-[10] font-passions lg:text-[64px] lg:leading-[77px] rotate-12 text-white sm:text-black lg:text-white pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[6550px] sm:top-[10800px] lg:top-[7800px] rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[33]} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[6700px] sm:top-[11100px] lg:top-[7800px] lg:left-[550px] z-[10] rotate-[65deg] lg:rotate-[25deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[6960px] sm:top-[11620px] lg:top-[7800px] right-0 z-[2] cursor-pointer' src={images[34]} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[7120px] sm:top-[11900px] lg:top-[8100px] lg:right-[450px] z-[10] rotate-[130deg] lg:rotate-[155deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[7400px] sm:top-[12440px] lg:top-[8200px] lg:left-40 z-[2] rotate-6 cursor-pointer' src={images[35]} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[7520px] sm:top-[12700px] lg:top-[8400px] lg:left-[650px] z-[10] rotate-[55deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[7780px] sm:top-[13200px] lg:top-[8750px] lg:right-0 z-[2] cursor-pointer' src={images[37]} alt="" />
            <p className="absolute top-[8500px] lg:top-[8700px] lg:left-40 lg:max-w-[700px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] rotate-12 text-white lg:text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8000px] sm:top-[13650px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] left-0 z-[2] cursor-pointer' src={images[38]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8150px] sm:top-[13900px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] rotate-12 lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[40]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8300px] sm:top-[14150px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] right-0 z-[2] cursor-pointer' src={images[41]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8500px] sm:top-[14450px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] rotate-[15deg] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[42]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8670px] sm:top-[14750px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[43]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[8800px] sm:top-[15050px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] rotate-[-15deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[44]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] w-full top-[9000px] sm:top-[15350px] lg:top-[9850px] left-0 rotate-[35deg] lg:rotate-0 z-[2] cursor-pointer' src={images[45]} alt="" />
            <p className="absolute top-[9550px] sm:top-[9050px] lg:top-[9950px] lg:left-40 lg:max-w-[900px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] rotate-12 text-green-400 pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <p className="absolute top-[9950px] sm:top-[9250px] lg:top-[10450px] lg:right-40 lg:max-w-[1200px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-green-400 pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[9150px] sm:top-[15700px] lg:top-[10900px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[46]} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[9280px] sm:top-[15950px] lg:top-[11000px] lg:left-[150px] z-[10] rotate-[125deg] -scale-y-100 pointer-events-none' src={arrow2} alt="" />
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] hidden lg:block top-[11000px] right-[150px] z-[10] rotate-[-125deg] -scale-100 pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[9550px] sm:top-[16480px] lg:top-[11350px] left-0 z-[3] rotate-12 cursor-pointer' src={images[47]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[9700px] sm:top-[16750px] lg:top-[11350px] right-0 z-[3] -rotate-12 cursor-pointer' src={images[48]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[700px] top-[9850px] sm:top-[17100px] lg:top-[11600px] lg:left-1/2 lg:transform lg:-translate-x-1/2 rotate-[25deg] z-[2] cursor-pointer' src={images[51]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10000px] sm:top-[17400px] lg:top-[11800px] left-0 z-[2] cursor-pointer' src={images[49]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10170px] sm:top-[17700px] lg:top-[11800px] right-0 z-[2] rotate-[25deg] lg:rotate-0 cursor-pointer' src={images[50]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10300px] sm:top-[18000px] lg:top-[12300px] rotate-[-25deg] left-0 z-[2] cursor-pointer' src={images[52]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10450px] sm:top-[18300px] lg:top-[12300px] rotate-[25deg] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[1] cursor-pointer' src={images[53]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10600px] sm:top-[18600px] lg:top-[12300px] rotate-[-25deg] right-0 z-[2] cursor-pointer' src={images[54]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[10750px] sm:top-[18900px] lg:top-[12850px] left-0 z-[2] rotate-[25deg] cursor-pointer' src={images[55]} alt="" />
            <p className="absolute top-[11500px] sm:top-[12600px] lg:top-[12850px] lg:right-36 lg:max-w-[400px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black sm:text-white lg:text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img id="arrow" className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[11000px] sm:top-[19350px] lg:top-[13000px] lg:left-[600px] z-[10] rotate-[-170deg] lg:rotate-[125deg] -scale-100 pointer-events-none' src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[11230px] sm:top-[19800px] lg:top-[13300px] lg:left-[450px] z-[2] rotate-[-14deg] cursor-pointer' src={images[56]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[11400px] sm:top-[20100px] lg:top-[13800px] sm:rotate-[15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[57]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[11550px] sm:top-[20400px] lg:top-[13800px] lg:left-1/2 lg:transform lg:-translate-x-1/2 rotate-[-15deg] lg:rotate-0 z-[2] cursor-pointer' src={images[58]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[11700px] sm:top-[20700px] lg:top-[14150px] left-0 z-[2] cursor-pointer' src={images[59]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[11850px] sm:top-[21000px] lg:top-[14450px] left-0 z-[2] rotate-[15deg] lg:rotate-0 cursor-pointer' src={images[60]} alt="" />
            <p className="absolute hidden lg:block top-[11180px] sm:top-[14180px] right-[270px] transform -translate-x-1/2 lg:max-w-[450px] z-[10] font-passions text-[64px] leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[12000px] sm:top-[21350px] lg:top-[14800px] left-0 z-[2] cursor-pointer' src={images[61]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[12150px] sm:top-[21650px] lg:top-[15215px] left-0 z-[2] cursor-pointer' src={images[62]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[12300px] sm:top-[21950px] lg:top-[15020px] right-0 z-[2] cursor-pointer' src={images[63]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] max-w-[160px] lg:max-w-[300px] top-[12507px] sm:top-[22250px] lg:top-[15020px] right-0 lg:right-[300px] z-[2] cursor-pointer' src={images[64]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] max-w-[160px] lg:max-w-[300px] top-[12507px] sm:top-[22550px] lg:top-[15215px] left-0 lg:right-[300px] z-[2] cursor-pointer' src={images[65]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] max-w-[160px] lg:max-w-[300px] top-[12610px] sm:top-[22850px] lg:top-[15215px] left-0 lg:right-[600px] z-[2] cursor-pointer' src={images[67]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] max-w-[160px] lg:max-w-[600px] top-[12610px] sm:top-[23150px] lg:top-[15410px] right-0 lg:right-[800px] z-[2] cursor-pointer" src={images[68]} alt="" />
            <p className="absolute hidden lg:block top-[11180px] sm:top-[14180px] lg:top-[14780px] right-[0px] lg:max-w-[1200px] z-[10] font-passions text-[64px] leading-[77px] text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <p className="absolute hidden lg:block top-[11180px] sm:top-[14180px] lg:top-[14980px] left-[0px] lg:max-w-[900px] z-[10] font-passions text-[64px] leading-[77px] text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad </p>
            <img id="arrow" className='absolute top-[12650px] sm:top-[23150px] lg:top-[15310px] rotate-[65deg] lg:right-[100px] z-[2] cursor-pointer' src={arrow2} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[12920px] sm:top-[23150px] lg:top-[16050px] right-[0px] z-[2] cursor-pointer" src={images[69]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[13100px] sm:top-[23150px] lg:top-[16050px] rotate-[25deg] sm:rotate-0 lg:right-[600px] z-[2] cursor-pointer" src={images[70]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[13250px] sm:top-[23150px] lg:top-[16600px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer" src={images[74]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[13400px] sm:top-[23150px] lg:top-[16400px] left-[0px] z-[2] cursor-pointer" src={images[72]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[13550px] sm:top-[23150px] lg:top-[16450px] right-[0px] rotate-[-35deg] z-[2] cursor-pointer" src={images[73]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[13700px] sm:top-[23150px] lg:top-[17000px] right-[0px] z-[2] cursor-pointer" src={images[75]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[13800px] sm:top-[23150px] lg:top-[17000px] lg:right-[400px] z-[2] cursor-pointer" src={images[76]} alt="" />
            <img id="arrow" className='absolute hidden lg:block top-[13900px] sm:top-[23150px] lg:top-[17250px] max-w-[500px] rotate-[65deg] lg:right-[500px] z-[2] cursor-pointer' src={arrow} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[13950px] sm:top-[23150px] lg:top-[17300px] left-[0px] z-[2] cursor-pointer" src={images[77]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[14100px] sm:top-[23150px] lg:top-[17550px] rotate-[-25deg] lg:left-[600px] z-[2] cursor-pointer" src={images[78]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[14250px] sm:top-[23150px] lg:top-[17550px] left-[0px] z-[2] cursor-pointer" src={images[79]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[14400px] sm:top-[23150px] lg:top-[18100px] right-[0px] z-[2] cursor-pointer" src={images[80]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[14500px] sm:top-[23150px] lg:top-[18100px] left-[0px] z-[2] cursor-pointer" src={images[81]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[14650px] sm:top-[23150px] lg:top-[18100px] rotate-[25deg] sm:rotate-[0deg] lg:left-[300px] z-[2] cursor-pointer" src={images[82]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[14800px] sm:top-[23150px] lg:top-[18300px] left-[0px] z-[2] cursor-pointer" src={images[84]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[14950px] sm:top-[23150px] lg:top-[18250px] lg:right-[500px] rotate-[25deg] sm:rotate-[-25deg] z-[2] cursor-pointer" src={images[85]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[15100px] sm:top-[23150px] lg:top-[18700px] right-[0px] z-[2] cursor-pointer" src={images[86]} alt="" />
            <img id="arrow" className='absolute hidden lg:block top-[15200px] sm:top-[23150px] lg:top-[18700px] max-w-[500px] rotate-[155deg] lg:right-[500px] z-[2] cursor-pointer' src={arrow2} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[15250px] sm:top-[23150px] lg:top-[18910px] left-[0px] z-[2] cursor-pointer" src={images[87]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[15400px] sm:top-[23150px] lg:top-[19100px] rotate-[25deg] sm:rotate-[0deg] lg:right-[200px] z-[2] cursor-pointer" src={images[88]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[15500px] sm:top-[23150px] lg:top-[19100px] lg:right-[600px] z-[2] cursor-pointer" src={images[89]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[15650px] sm:top-[23150px] lg:top-[19293px] lg:left-[337px] z-[2] cursor-pointer" src={images[90]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[336px] top-[15750px] sm:top-[23150px] lg:top-[19464px] rotate-[25deg] sm:rotate-[0deg] left-[0px] z-[2] cursor-pointer" src={images[91]} alt="" />
            <p className="absolute top-[12900px] sm:top-[23150px] lg:top-[19400px] right-[150px] lg:max-w-[440px] rotate-[-35deg] z-[10] font-passions text-[64px] leading-[77px] text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[15900px] sm:top-[23150px] lg:top-[19730px] right-[0px] z-[2] cursor-pointer" src={images[92]} alt="" />
            <img id="arrow" className='absolute hidden lg:block top-[12900px] sm:top-[23150px] lg:top-[19730px] max-w-[500px] rotate-[165deg] right-[500px] z-[2] cursor-pointer' src={arrow2} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[16050px] sm:top-[23150px] lg:top-[19940px] left-[0px] z-[2] cursor-pointer" src={images[93]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[300px] top-[16200px] sm:top-[23150px] lg:top-[20134px] rotate-[25deg] sm:rotate-[0deg] lg:left-[600px] z-[2] cursor-pointer" src={images[94]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[900px] top-[16350px] sm:top-[23150px] lg:top-[20328px] left-[0px] z-[2] cursor-pointer" src={images[95]} alt="" />
            <p className="absolute top-[12900px] sm:top-[23150px] lg:top-[20130px] right-[0px] lg:max-w-[580px] rotate-[-25deg] z-[10] font-passions text-[64px] leading-[77px] text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[636px] top-[16500px] sm:top-[23150px] lg:top-[20500px] rotate-[-25deg] sm:rotate-[0deg] right-[0px] z-[2] cursor-pointer" src={images[96]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[16650px] sm:top-[23150px] lg:top-[20950px] lg:left-[400px] z-[2] cursor-pointer" src={images[98]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[16800px] sm:top-[23150px] lg:top-[21300px] lg:left-1/2 rotate-[-15deg] lg:translate-x-[-50%] z-[2] cursor-pointer" src={images[100]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[16950px] sm:top-[23150px] lg:top-[21000px] lg:rotate-[45deg] left-[0px] z-[2] cursor-pointer" src={images[97]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[17100px] sm:top-[23150px] lg:top-[21150px] lg:right-[100px] rotate-[15deg] lg:rotate-[-45deg] z-[2] cursor-pointer" src={images[99]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[17250px] sm:top-[23150px] lg:top-[21400px] right-[0px] z-[2] cursor-pointer" src={images[101]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[17400px] sm:top-[23150px] lg:top-[21550px] left-[0px] rotate-[-15deg] z-[2] cursor-pointer" src={images[102]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[17570px] sm:top-[23150px] lg:top-[21700px] left-1/2 rotate-[15deg] translate-x-[-50%] z-[2] cursor-pointer" src={images[103]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[17700px] sm:top-[23150px] lg:top-[22150px] left-[0px] z-[2] cursor-pointer" src={images[105]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[400px] top-[17900px] sm:top-[23150px] lg:top-[22150px] right-[0px] z-[2] cursor-pointer" src={images[106]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[500px] top-[18000px] sm:top-[23150px] lg:top-[22250px] rotate-[-15deg] sm:rotate-[0deg] lg:right-[400px] z-[2] cursor-pointer" src={images[107]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[450px] top-[18150px] sm:top-[23150px] lg:top-[22400px] right-[0px] z-[2] cursor-pointer" src={images[108]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[18300px] sm:top-[23150px] lg:top-[22500px] lg:right-[600px] z-[2] cursor-pointer" src={images[109]} alt="" />
            <img id="arrow" className='absolute hidden lg:block top-[12900px] sm:top-[23150px] lg:top-[22700px] max-w-[500px] rotate-[350deg] right-[180px] z-[2] cursor-pointer' src={arrow} alt="" />
            <p className="absolute top-[12900px] sm:top-[23150px] lg:top-[22950px] max-w-[600px] left-[250px] font-passions text-[64px] leading-[77px] text-black pointer-events-none z-[2]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, aut nihil id velit tempora sint cum</p>
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[18450px] sm:top-[23150px] lg:top-[23060px] rotate-[15deg] sm:rotate-[0deg] lg:right-[100px] z-[2] cursor-pointer" src={images[110]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[18600px] sm:top-[23150px] lg:top-[23210px] lg:left-[200px] z-[2] cursor-pointer" src={images[111]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[18750px] sm:top-[23150px] lg:top-[23350px] rotate-[-15deg] sm:rotate-[0deg] right-[0px] z-[2] cursor-pointer" src={images[112]} alt="" />
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[18900px] sm:top-[23150px] lg:top-[23450px] lg:left-1/2 lg:translate-x-[-50%] rotate-[15deg] lg:rotate-[-15deg] z-[2] cursor-pointer" src={images[113]} alt="" />  
            <img className="absolute duration-150 ease-in hover:scale-110 hover:hover:z-[9] lg:max-w-[600px] top-[19050px] sm:top-[23150px] lg:top-[23600px] left-[0px] z-[2] cursor-pointer" src={images[114]} alt="" />
        </div>
    );
}

export default ImageCard2