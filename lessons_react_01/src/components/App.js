import React from 'react';
import Counter from '../components/counter/Counter';
// import Post from '../components/post/Post';
// import Wrapper from './wrapper/Wrapper';
// import { DATA } from './data';
// import * as css from './app.styled.js';

const App = ({ title }) => {
  return (
    <>
      <Counter step={10} />
      {/* <css.Title>{title}</css.Title>
      <Wrapper style={{ backgroundColor: 'tomato' }}>
        <h2>WORK</h2>
      </Wrapper>
      <Post data={DATA} /> */}
    </>
  );
};

export default App;
