import './index.css';
import { Box } from '@material-ui/core';
export const Course = (props: { name: string; image: string }) => (
  <>
    <Box boxShadow={3} m={2} p={2} className='course'>
      <img
        src='https://blog.mrhgestao.com.br/wp-content/uploads/2017/08/113563-x-cursos-tecnicos-e-tecnologicos-possiveis-de-se-fazer-no-ensino-medio.jpg'
        className='course-image'
      ></img>
      <h2 className='course-label'>Curso Biologia</h2>
    </Box>
  </>
);
