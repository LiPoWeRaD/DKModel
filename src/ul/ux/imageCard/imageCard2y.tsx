import { FC, useEffect } from "react";
import arrow from '../../../assets/arrow/arrow1.png';
import arrow2 from '../../../assets/arrow/arrow2.png';

interface ImageCard1Props {
    images: string[]

}

const ImageCard2:FC<ImageCard1Props> = ({ 
    images }) => {

    useEffect(() => {
        
        const handleImageClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'IMG' && target.id !== 'poster') {
                const modal = document.createElement('div');
                const target = event.target as HTMLImageElement;
                modal.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center', 'z-50', 
                    'max-w-screen', 'max-h-screen', 'scale-125', 'duration-300', 'ease-in-out');
                const modalImage = document.createElement('img');
                modalImage.src = target.src;
                modalImage.alt = target.alt;
                modal.appendChild(modalImage);
                document.body.appendChild(modal);
                
                
                modal.addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
            }
        };
        document.addEventListener('click', handleImageClick);
        return () => {
            document.removeEventListener('click', handleImageClick);
        };
    }, []);

    return (
        <div className='relative mb-10 w-full h-full flex flex-wrap justify-center items-center gap-3'>
            <img className='absolute lg:max-w-[1000px] duration-150 ease-in hover:scale-110 hover:z-20 top-0 left-0 right-0 bottom-0 z-[0] cursor-pointer' src={images[0]} alt="" />
            <img className='absolute lg:max-w-[600px] duration-150 ease-in hover:scale-110 hover:z-20 top-[220px] sm:top-[450px] lg:top-0 right-0 z-[1] cursor-pointer' src={images[1]} alt="" />
            <img className='absolute sm:max-w-[400px] duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[400px] sm:top-[750px] lg:top-[370px] right-0 rotate-45 z-[3] cursor-pointer' src={images[2]} alt="" />
            <img className='absolute sm:max-w-[400px] duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[600px] sm:top-[900px] lg:top-[500px] sm:left-[0] lg:left-[400px] z-[2] -rotate-12 sm:rotate-[-45deg] lg:rotate-[12deg] cursor-pointer' src={images[3]} alt="" />
            <img className='absolute lg:max-w-[600px] duration-150 ease-in hover:scale-110 hover:z-20 top-[800px] sm:top-[1100px] lg:top-[600px] left-0 z-[2] sm:z-[1] lg:z-[2] rotate-12 sm:rotate-[-25deg] lg:rotate-12 cursor-pointer' src={images[4]} alt="" />
            <p className="absolute top-[280px] lg:top-20 right-0 lg:right-[400px] max-w-[300px] lg:max-w-[500px] rotate-12 z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] text-white pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe velit corporis cum magnam</p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[1000px] sm:top-[1400px] lg:top-[900px] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[5]} alt="" />
            <p className="absolute top-[1100px] sm:top-[1500px] lg:top-[1000px] lg:left-[500px] lg:max-w-[500px] z-[10] font-passions text-[64px] leading-[77px] rotate-6 text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[1200px] sm:top-[2250px] lg:top-[1300px] lg:left-80 z-[2] cursor-pointer' src={images[6]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[1420px] sm:top-[1800px] lg:top-[1100px] lg:right-52 z-[10] pointer-events-none' src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[1710px] sm:top-[2600px] lg:top-[1650px] sm:-right-24 lg:right-28 z-[2] rotate-45 cursor-pointer' src={images[9]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[1900px] sm:top-[2800px] lg:top-[1700px] lg:left-1/2 lg:transform lg:-translate-x-1/2 -rotate-[32deg] z-[1] cursor-pointer' src={images[10]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[2150px] sm:top-[3200px] lg:top-[1650px] left-0 z-[1] cursor-pointer' src={images[7]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[2350px] sm:top-[3600px] lg:top-[2200px] lg:left-[400px] rotate-6 z-[2] cursor-pointer' src={images[11]} alt="" />
            <p className="absolute top-[2200px] sm:top-[2450px] lg:top-[2200px] left-0 lg:max-w-[400px] z-[10] font-passions text-[64px] leading-[77px] rotate-[40deg] lg:rotate-0 text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[2600px] sm:top-[3900px] lg:top-[2600px] left-0 z-[2] sm:rotate-[-15deg] lg:rotate-0 cursor-pointer' src={images[12]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[2820px] sm:top-[4200px] lg:top-[3100px] left-0 z-[2] cursor-pointer' src={images[13]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[3320px] sm:top-[4600px] lg:top-[3100px] sm:rotate-[-25deg] lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[14]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[3800px] sm:top-[5000px] lg:top-[3100px] right-0 z-[2] cursor-pointer' src={images[15]} alt="" />
            <p className="absolute top-[3000px] lg:top-[2600px] lg:right-[100px] lg:max-w-[800px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] text-black sm:text-white lg:text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis  </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 w-full top-[3100px] sm:top-[5400px] lg:top-[3500px] right-0 sm:rotate-[-15deg] lg:rotate-0 z-[2] cursor-pointer' src={images[16]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[3600px] sm:top-[5700px] lg:top-[4600px] sm:rotate-[25deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[17]} alt="" />
            <p className="absolute top-[4000px] lg:top-[4650px] left-0 lg:max-w-[500px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[4120px] sm:top-[6150px] lg:top-[4650px] right-[50px] lg:right-[550px] z-[10] pointer-events-none -scale-x-100 rotate-[-5deg] lg:rotate-[55deg]'  src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[4400px] sm:top-[6600px] lg:top-[5020px] left-0 z-[2] cursor-pointer' src={images[18]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[4700px] sm:top-[7000px] lg:top-[5020px] rotate-12 lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[19]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[4950px] sm:top-[7350px] lg:top-[5020px] right-0 z-[2] cursor-pointer' src={images[20]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[700px] top-[5200px] sm:top-[7700px] lg:top-[5400px] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[21]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[700px] top-[5400px] sm:top-[8000px] lg:top-[5400px] sm:rotate-[15deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[22]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[5600px] sm:top-[8300px] lg:top-[5500px] lg:left-[700px] lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[23]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[5800px] sm:top-[8600px] lg:top-[5900px] right-0 z-[2] -rotate-6 cursor-pointer' src={images[24]} alt="" />
            <p className="absolute top-[5500px] lg:top-[5900px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-[400px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[5970px] sm:top-[8900px] lg:top-[5900px] left-0 z-[2] rotate-6 cursor-pointer' src={images[25]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[700px] top-[6170px] sm:top-[9200px] lg:top-[6300px] right-0 z-[2] cursor-pointer' src={images[26]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[700px] top-[6400px] sm:top-[9500px] lg:top-[6300px] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[27]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[300px] top-[6600px] sm:top-[9800px] lg:top-[6350px] lg:left-[700px] lg:transform lg:-translate-x-1/2 z-[2] rotate-12 cursor-pointer' src={images[28]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[6800px] sm:top-[10100px] lg:top-[6500px] lg:left-[900px] lg:transform lg:-translate-x-1/2  z-[2] -rotate-12 cursor-pointer' src={images[31]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 w-full top-[7000px] sm:top-[10450px] lg:top-[6800px] left-0 cursor-pointer' src={images[32]} alt="" />
            <p className="absolute top-[6900px] lg:top-[6900px] lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:max-w-[900px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-white pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <p className="absolute top-[7200px] lg:top-[7000px] lg:left-3/4 lg:transform lg:-translate-x-1/2 lg:max-w-[700px] z-[10] font-passions lg:text-[64px] lg:leading-[77px] rotate-12 text-white sm:text-black lg:text-white pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[7200px] sm:top-[10800px] lg:top-[7800px] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[33]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[7330px] sm:top-[11100px] lg:top-[7800px] lg:left-[550px] z-[10] rotate-[65deg] lg:rotate-[25deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[7580px] sm:top-[11620px] lg:top-[7800px] right-0 z-[2] cursor-pointer' src={images[34]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[7730px] sm:top-[11900px] lg:top-[8100px] lg:right-[450px] z-[10] rotate-[130deg] lg:rotate-[155deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[8000px] sm:top-[12440px] lg:top-[8200px] lg:left-40 z-[2] rotate-6 cursor-pointer' src={images[35]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[8150px] sm:top-[12700px] lg:top-[8400px] lg:left-[650px] z-[10] rotate-[55deg] pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[8400px] sm:top-[13200px] lg:top-[8750px] lg:right-0 z-[2] cursor-pointer' src={images[37]} alt="" />
            <p className="absolute top-[8500px] lg:top-[8700px] lg:left-40 lg:max-w-[700px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] rotate-12 text-white lg:text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[8600px] sm:top-[13650px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] left-0 z-[2] cursor-pointer' src={images[38]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[8850px] sm:top-[13900px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] rotate-12 lg:rotate-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[40]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[9100px] sm:top-[14150px] lg:top-[9150px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] right-0 z-[2] cursor-pointer' src={images[41]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[9300px] sm:top-[14450px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] sm:rotate-[-15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[42]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[9500px] sm:top-[14750px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[43]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[9700px] sm:top-[15050px] lg:top-[9500px] lg:rounded-[40px] lg:border-8 lg:border-[#75461ab2] sm:rotate-[-15deg] lg:rotate-0 right-0 z-[2] cursor-pointer' src={images[44]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 w-full top-[9870px] sm:top-[15350px] lg:top-[9850px] left-0 rotate-[35deg] lg:rotate-0 z-[2] cursor-pointer' src={images[45]} alt="" />
            <p className="absolute top-[9750px] sm:top-[9050px] lg:top-[9950px] lg:left-40 lg:max-w-[900px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] rotate-12 text-green-400 pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <p className="absolute top-[10050px] sm:top-[9250px] lg:top-[10450px] lg:right-40 lg:max-w-[1200px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-green-400 pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[10070px] sm:top-[15700px] lg:top-[10900px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[2] cursor-pointer' src={images[46]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[10200px] sm:top-[15950px] lg:top-[11000px] lg:left-[150px] z-[10] rotate-[125deg] -scale-y-100 pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] hidden lg:block top-[11000px] right-[150px] z-[10] rotate-[-125deg] -scale-100 pointer-events-none' src={arrow2} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[10470px] sm:top-[16480px] lg:top-[11350px] left-0 z-[3] rotate-12 cursor-pointer' src={images[47]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[10700px] sm:top-[16750px] lg:top-[11350px] right-0 z-[3] -rotate-12 cursor-pointer' src={images[48]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[700px] top-[10900px] sm:top-[17100px] lg:top-[11600px] lg:left-1/2 lg:transform lg:-translate-x-1/2 rotate-[25deg] z-[2] cursor-pointer' src={images[51]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[11150px] sm:top-[17400px] lg:top-[11800px] left-0 z-[2] cursor-pointer' src={images[49]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[11400px] sm:top-[17700px] lg:top-[11800px] right-0 z-[2] rotate-0 sm:rotate-[25deg] lg:rotate-0 cursor-pointer' src={images[50]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[11600px] sm:top-[18000px] lg:top-[12300px] rotate-[-25deg] left-0 z-[2] cursor-pointer' src={images[52]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[11800px] sm:top-[18300px] lg:top-[12300px] rotate-[25deg] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-[1] cursor-pointer' src={images[53]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[12000px] sm:top-[18600px] lg:top-[12300px] rotate-[-25deg] right-0 z-[2] cursor-pointer' src={images[54]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[12200px] sm:top-[18900px] lg:top-[12850px] left-0 z-[2] rotate-[25deg] cursor-pointer' src={images[55]} alt="" />
            <p className="absolute top-[12500px] sm:top-[12600px] lg:top-[12850px] lg:right-36 lg:max-w-[400px] z-[10] font-passions text-[32px] leading-[42px] lg:text-[64px] lg:leading-[77px] -rotate-12 text-black sm:text-white lg:text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[400px] top-[12720px] sm:top-[19350px] lg:top-[13000px] lg:left-[600px] z-[10] rotate-[-170deg] lg:rotate-[125deg] -scale-100 pointer-events-none' src={arrow} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[600px] top-[12930px] sm:top-[19800px] lg:top-[13300px] lg:left-[450px] z-[2] rotate-[-14deg] cursor-pointer' src={images[56]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[13200px] sm:top-[20100px] lg:top-[13800px] sm:rotate-[15deg] lg:rotate-0 left-0 z-[2] cursor-pointer' src={images[57]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[13450px] sm:top-[20400px] lg:top-[13800px] lg:left-1/2 lg:transform lg:-translate-x-1/2 sm:rotate-[-15deg] lg:rotate-0 z-[2] cursor-pointer' src={images[58]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[13700px] sm:top-[20700px] lg:top-[14150px] left-0 z-[2] cursor-pointer' src={images[59]} alt="" />
            <img className='absolute duration-150 ease-in hover:scale-110 hover:z-20 lg:max-w-[500px] top-[13900px] sm:top-[21000px] lg:top-[14450px] left-0 z-[2] sm:rotate-[15deg] lg:rotate-0 cursor-pointer' src={images[60]} alt="" />
            <p className="absolute hidden lg:block top-[14180px] right-[270px] transform -translate-x-1/2 lg:max-w-[450px] z-[10] font-passions text-[64px] leading-[77px] -rotate-12 text-black pointer-events-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi iusto quidem maxime provident numquam. Aut non quo fugit facilis aliquam sint ex eius, harum ab ad, est provident. Quas. </p>
        </div>
    );
}

export default ImageCard2