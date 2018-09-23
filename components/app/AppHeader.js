import Link from 'next/link';
import getConfig from 'next/config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

const linkStyle = {
  marginRight: 15
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <Link href={`${publicRuntimeConfig.appContext}`}>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href={`${publicRuntimeConfig.appContext}login`}>
        <a style={linkStyle}>Login</a>
      </Link>
      <Link href={`${publicRuntimeConfig.appContext}components`}>
        <a style={linkStyle}>Components</a>
      </Link>
      <Link href={`${publicRuntimeConfig.appContext}posts`}>
        <Button variant="outlined" color="primary" className={classes.button}>
          Posts
        </Button>
      </Link>
      <Link href={`${publicRuntimeConfig.appContext}about`}>
        <Button variant="outlined" color="secondary" className={classes.button}>
          About
        </Button>
      </Link>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
