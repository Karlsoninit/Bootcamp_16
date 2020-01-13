import React from "react";
import { Link } from "react-router-dom";
const styles = () => ({
  imageContainer: {
    width: 300
  },
  image: {
    width: "100%"
  },
  container: {
    width: 1000,
    display: "flex",
    flexWrap: "wrap"
  }
});

export const Articles = ({ data }) => {
  const opt = styles();
  return (
    <div style={opt.container}>
      {data.map(({ urlToImage, publishedAt }) => (
        <div style={opt.imageContainer} key={publishedAt}>
          <Link
            to={{
              pathname: `/detail/${publishedAt}`,
              search: "?category=bitcoin",
              hash: "#treasure-island",
              state: { data, id: publishedAt }
            }}
          >
            <img style={opt.image} src={urlToImage} alt={urlToImage} />
          </Link>
        </div>
      ))}
    </div>
  );
};

{
  /* <Link
  to={{
    pathname: '/books',
    search: '?category=adventure',
    hash: '#treasure-island',
    state: { from: '/dashboard' },
  }}
/> */
}
