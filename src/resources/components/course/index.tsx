import './index.css';
import { Box } from '@material-ui/core';
export const Course = (props: { name: string; image: string }) => (
  <>
    <Box boxShadow={3} m={2} p={2} className='course'>
      <img src={props.image} className='course-image' />
      <h2 className='course-label'>{props.name}</h2>
    </Box>
  </>
);
