import { useState } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from './images/banner-1.png';
import image2 from './images/banner-2.png';
import imageM1 from './images/banner-p-1.png';
import imageM2 from './images/banner-p-2.png';

const isMobile = window.screen.availWidth < 920;
const imageA = !isMobile ? image1 : imageM1;
const imageB = !isMobile ? image2 : imageM2;

export default () => {
  const [imagePosition, changeImagePosition] = useState(0);
  return (
    <div>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        onChange={()=> changeImagePosition(1)}
        animationSpeed={1000}
        value={imagePosition}
      >
        <img
          key='imagem-1'
          style={{ width: '100%', height: '100%' }}
          src={imageA}
          alt='image'
        />
        <img
          key='imagem-2'
          style={{ width: '100%', height: '100%' }}
          src={imageB}
          alt='image'
        />
      </Carousel>
    </div>
  );
};
