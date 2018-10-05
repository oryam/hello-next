import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Badge from '../components/vendors/Badge/Badge';
import AppLayout from '../components/app/AppLayout';
import MenuAppBar from '../components/app/AppBar.js';

import '../static/scss/material-kit-react.scss';

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
    <AppLayout>
      <MenuAppBar />
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        {/* <DeleteIcon className={classes.rightIcon} /> */}
        <Icon className={classes.rightIcon}>delete</Icon>
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        {/* <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} /> */}
        <Icon className={classNames(classes.leftIcon, classes.iconSmall)}>
          save
        </Icon>
        Save
      </Button>
      <Badge color="success">success</Badge>
      <h1>Hello</h1>
    </AppLayout>
  );
};

export default withStyles(styles)(Index);
