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
    {/* <style jsx global>
      {css}
    </style> */}
  </div>
);

export default Layout;
