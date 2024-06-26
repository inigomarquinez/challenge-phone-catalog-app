const gridListHeight = '40%';
const tableHeight = `calc(100% - ${gridListHeight})`;

export default theme => ({
  content: {
    height: '100%',
    overflowY: 'hidden'
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    height: gridListHeight,
    overflowX: 'auto'
  },
  imgContainer: {
    padding: '15px'
  },
  img: {
    height: '100%'
  },
  tableContainer: {
    height: tableHeight,
    overflowY: 'auto'
  },
  table: {
    backgroundColor: theme.palette.primary[50]
  },
  titleCell: {
    fontWeight: 900,
    textAlign: 'right'
  },
  chip: {
    margin: theme.spacing.unit
  },
  description: {
    whiteSpace: 'pre-line'
  }
});
