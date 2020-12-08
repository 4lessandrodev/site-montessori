import './index.css';
export default () => (
  <>
    <ul className='main-menu'>
      <li className='desktop-option'>
        <a href='http://'>Opção 1</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>Opção 2</a>
      </li>
      <li className='desktop-option'>
        <a href='http://'>Opção 3</a>
      </li>
      <li className='mobile-menu'>
        <a href='http://' className='icon-mobile-menu'>
          <i className='material-icons'>view_module</i>
        </a>
      </li>
    </ul>
  </>
);
