import './index.css';
import Nav from '../../components/nav';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner';
import { Title } from '../../components/title';
import { Paragraph } from '../../components/paragraph';

export default () => (
  <>
    <main className='grid-container'>
      <header className='header'>
        <Nav></Nav>
      </header>

      <section className='banner'>
        <article
          style={{
            overflow: 'hidden',
            maxWidth: '98.7vw',
          }}
        >
          <Carousel />
        </article>
        <article>
          <Banner />
        </article>
      </section>
      <section className='about'>
        <Paragraph
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        aspernatur aliquid saepe quaerat officia nemo animi deleniti optio
        laudantium incidunt quibusdam sed, nesciunt, reprehenderit ab iusto
        itaque, obcaecati ratione dolores?'
        />
        <Paragraph
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        aspernatur aliquid saepe quaerat officia nemo animi deleniti optio
        laudantium incidunt quibusdam sed, nesciunt, reprehenderit ab iusto
        itaque, obcaecati ratione dolores?'
        />
      </section>
      <section className='courses'>
        <Title title='Cursos Regulares'></Title>
      </section>
      <footer className='footer'>Footer</footer>
    </main>
  </>
);
