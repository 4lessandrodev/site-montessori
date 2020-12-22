import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      maxWidth: '100vw',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '90%',
      height: '400px',
      maxWidth: '100vw',
    },
  }),
);

const tileData = [
  {
    img:
      'http://chapelschool.com/novo/wp-content/themes/chapel_school/images/new/Admissions.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://www.gerardyphoto.com/wp-content/uploads/2019/10/Memory.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://www.schudio.com/wp-content/uploads/2015/03/DSC_2061.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
];

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={320} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            className='grid-img'
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
