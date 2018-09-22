import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link as="/login" href="/views/LoginPage">
        <a style={linkStyle}>Login</a>
      </Link>
      <Link href="/posts">
        <Button variant="outlined" color="primary" className={classes.button}>
          Posts
        </Button>
      </Link>
      <Link href="/about">
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
