import './index.css';
import Nav from '../../components/nav';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner';

export default () => (
  <>
    <main className='grid-container'>
      <header className='header'>
        <Nav></Nav>
      </header>

      <section className='section'>
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
        Main section
      </section>
      <footer className='footer'>Footer</footer>
    </main>
  </>
);
