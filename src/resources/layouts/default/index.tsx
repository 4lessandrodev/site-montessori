import './index.css';
import Nav from '../../components/nav';

export default () => (
  <>
    <main className='grid-container'>
      <header className='header'>
        <Nav></Nav>
      </header>
      <section className='section'>Main section</section>
      <footer className='footer'>Footer</footer>
    </main>
  </>
);
