import './index.css';
export const Paper = () => (
  <div className='main'>
    <div className='paper'>
      <div className='lines'>
        <div className='text-paper' spellCheck='false'>
          <h1 className='blog-title'>Blog</h1>
          <h2>Acompanhe o que acontece em nosso blog</h2>
        </div>
        <div>
          <img
            className='blog-image'
            src='https://media.gazetadopovo.com.br/2020/10/15120715/capa-frases-professores-660x372.png'
            alt='imagem'
          />
        </div>
        <p className='blog-text-resume'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem soluta aliquam rem repudiandae accusantium deleniti
          vitae iste nobis est quibusdam sunt provident a adipisci animi ab,
          dolorum dolorem earum. Perferendis.
        </p>
        <a href='http://'>Saiba mais</a>
      </div>
      <div className='holes hole-top'></div>
      <div className='holes hole-middle'></div>
      <div className='holes hole-bottom'></div>
    </div>
  </div>
);
