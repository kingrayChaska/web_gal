  import React, { useState, useEffect } from 'react'; 
  
  const Carousel = () => {
    const images = [
      'Daniel.png',
      'ArmourofGod.png',
      'IdanWPlappy2.png',
      'daveandGans.png',
      'Ehud1.png',
      'AyabaAns.png',

    ];
    const [currentIndex, setCurrentIndex] = useState(1);

    const back = () => {
      if (currentIndex > 1) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const next = () => {
      if (currentIndex < images.length) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex <= images.length) {
        setCurrentIndex(images.length - currentIndex + 1);
      }
    };

    useEffect(() => {
      const intervalId = setInterval(next, 2500);
    
      return () => clearInterval(intervalId);
      
    }, [currentIndex])
    

    return (
      <div className="relative w-full flex flex-shrink-0 overflow-hidden shadow-xl">
        <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
          <span>{currentIndex}</span>/
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <figure
            key={index}
            className="h-[30rem]"
            style={{
              display: currentIndex === index + 1 ? 'block' : 'none',
              transition: 'transform 300ms',
              opacity: currentIndex === index + 1 ? 1 : 0,
              
            }}
          >
            <img src={`../Bible-hero/${image}`} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />
            <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-normal text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
              Here are some of Amaezing works 
            </figcaption>
          </figure>
        ))}

        <button onClick={back}
          className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
          <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
            </path>
          </svg>
        </button>

        <button onClick={next}
          className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
          <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    );
  };

  export default Carousel;
