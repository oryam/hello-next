import fetch from 'isomorphic-unfetch';
import AppLayout from '../components/app/AppLayout.js';
import PostLink from '../components/app/PostLink.js';

const Posts = props => (
  <AppLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
  </AppLayout>
);

Posts.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Posts;
