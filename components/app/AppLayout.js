import AppHeader from './AppHeader';

// import css from '../../../static/scss/material-kit-react.css';

const layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: '#ccc'
};

const Layout = props => (
  <div style={layoutStyle}>
    <AppHeader />
    {props.children}
    {/* <style jsx global>
      {`
        @import 'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:300,400,500,700';
      `}
    </style> */}
  </div>
);

export default Layout;
