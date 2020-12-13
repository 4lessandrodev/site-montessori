import './index.css';
export default () => (
  <>
    <ul className='main-menu'>
      <li className='desktop-option'>
        <a href='http://'>Home</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>Institucional</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>Turmas</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>BLog</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>Contato</a>
      </li>
      <li className='mobile-menu'>
        <a href='http://' className='icon-mobile-menu'>
          <i className='material-icons'>view_module</i>
        </a>
      </li>
    </ul>
  </>
);
