import './index.css';
import Nav from '../../components/nav';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner';
import { Title } from '../../components/title';
import { Paragraph } from '../../components/paragraph';
import { Course } from '../../components/course';
import { Paper } from '../../components/paper';
import GridImages from '../../components/grid-images';

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
        <article className='courses-grid'>
          <Course
            name='Educação Infantil'
            image='https://i0.wp.com/www.ambersistemas.com.br/2016/wp-content/uploads/2017/09/dicas-para-captar-alunos-para-sua-escola-20170821133431.jpg-1024x683.jpg'
          ></Course>
          <Course
            name='Fundamental I'
            image='https://seduca.com.br/wp-content/uploads/2018/08/227570-producao-de-texto-como-incentivar-os-alunos-a-escrever-melhor.jpg'
          ></Course>
          <Course
            name='Fundamental II'
            image='https://blog.estantemagica.com.br/wp-content/uploads/2018/01/alunos-com-livros-na-mao-primeiro-dia-de-aula-1024x585.jpg'
          ></Course>
          <Course
            name='Ensino Médio'
            image='https://dhojeinterior.com.br/wp-content/uploads/2020/01/equipe-de-alunos-que-completa-a-tarefa_23-2147666610.jpg'
          ></Course>
        </article>
      </section>
      <section className='blog'>
        <Paper />
      </section>
      <section className='grid-images'>
        <Title title='Eventos'></Title>
        <GridImages />
      </section>
      <footer className='footer'>Footer</footer>
    </main>
  </>
);
