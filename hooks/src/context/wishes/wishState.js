import React, { useState, useReducer } from "react";
import { WishContext } from "./wishContext";
import { reducer } from "./wishReducer";
import axios from "axios";

export const Wishes = ({ children }) => {
  // const [wishes, setWishes] = useState('');
  const [state, dispatch] = useReducer(reducer, []);

  const addWish = async wish => {
    await axios.post("https://async-redux-todo.firebaseio.com/wishlist.json", wish);
  };

  const deleteWish = id => {
    dispatch({
      type: "DELETE_WISH",
      payload: id
    });
  };

  return (
    <WishContext.Provider
      value={{
        word: "HELLO",
        dispatch,
        state,
        deleteWish,
        addWish
      }}
    >
      {children}
    </WishContext.Provider>
  );
};
