import Header from './Header';
// import css from '../static/global.css';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>
      {`
        @import 'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:300,400,500,700';
      `}
    </style>
  </div>
);

export default Layout;
