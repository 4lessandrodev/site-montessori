import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
          src='https://www.colegiocemp.com.br/wp-content/uploads/2019/06/DSC_0009.jpg'
          alt='image'
        />
        <img
          key='imagem-2'
          style={{ width: '100%', height: '100%' }}
          src='http://luciliadiniz.com/wp-content/uploads/2015/02/A-hora-do-recreio-cabo-de-forca.jpg'
          alt='image'
        />
      </Carousel>
    </div>
  );
};
