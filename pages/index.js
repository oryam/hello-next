import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import Badge from '../components/vendors/Badge/Badge';
import Layout from '../components/app/Layout.js';
import MenuAppBar from '../components/app/AppBar.js';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const Index = props => {
  const { classes } = props;
  return (
    <Layout>
      <MenuAppBar />
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
      <Badge color="success">success</Badge>
      <h1>Hello</h1>
    </Layout>
  );
};

export default withStyles(styles)(Index);
