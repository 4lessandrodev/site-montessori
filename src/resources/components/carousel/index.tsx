import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from './images/banner-1.png';
import image2 from './images/banner-2.png';

export default () => {
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
        animationSpeed={1000}
        value={1}
      >
        <img
          key='imagem-1'
          style={{ width: '100%', height: '100%' }}
          src={image1}
          alt='image'
        />
        <img
          key='imagem-2'
          style={{ width: '100%', height: '100%' }}
          src={image2}
          alt='image'
        />
      </Carousel>
    </div>
  );
};
