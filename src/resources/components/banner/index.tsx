import './index.css';
import { Button } from '@material-ui/core';

export default () => (
  <div className='banner'>
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
        A harum commodi maxime ducimus quibusdam repudiandae enim earum, nam ut,
        dolorem consectetur omnis pariatur.
      </h2>
    </div>
  </div>
);
