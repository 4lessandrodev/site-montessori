import './index.css';
import { Button } from '@material-ui/core';

export default () => (
  <div className='main-banner'>
    <div className='banner-button'>
      <Button
        className='button-call-to-action'
        variant='outlined'
        color='primary'
      >
        Matricule-se já
      </Button>
    </div>
    <div className='banner-title'>
      <h2 className='title'>
        Educação transformadora para um mundo em transformação.
      </h2>
    </div>
  </div>
);
