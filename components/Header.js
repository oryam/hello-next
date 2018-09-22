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
        {/* <Button variant="outlined" className={classes.button}>
          Home
        </Button> */}
      </Link>
      <Link href="/posts">
        {/* <a style={linkStyle}>Posts</a> */}
        <Button variant="outlined" color="primary" className={classes.button}>
          Posts
        </Button>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
        {/* <Button variant="outlined" color="secondary" className={classes.button}>
          About
        </Button> */}
      </Link>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
