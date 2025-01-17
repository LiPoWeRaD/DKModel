import { FC, useEffect } from "react";

interface ImageCard1Props {
    image: string[]
}

const ImageCard1:FC<ImageCard1Props> = ({ image }) => {
    // при клике на картинку моданьное окно открывается с закрытием по клику вне модального окна
    useEffect(() => {
        
        const handleImageClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'IMG' && target.id !== 'poster') {
                const modal = document.createElement('div');
                const target = event.target as HTMLImageElement;
                modal.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center', 'z-50', 
                    'max-w-screen', 'max-h-screen', 'duration-300', 'ease-in-out');
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
        <div className='flex flex-wrap justify-center items-center gap-3'>
            {image.map((item, index) => (
                <img className="w-[300px] object-contain cursor-pointer duration-300 ease-in-out hover:scale-110" key={index} src={item} alt="" />
            ))}
        </div>
    );
}

export default ImageCard1