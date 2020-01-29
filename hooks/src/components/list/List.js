import React, { useState, useContext } from "react";
import shortId from "shortid";
import { WishContext } from "../../context/wishes/wishContext";

const addAction = wish => ({
  type: "ADD_WISH",
  payload: { title: wish, id: shortId() }
});

export const List = () => {
  const [wish, setWish] = useState("");
  const { word, dispatch, addWish } = useContext(WishContext);

  const handleSubmit = evt => {
    evt.preventDefault();
    // addWish({ title: wish });
    dispatch(addAction(wish));
    addWish({ title: wish });
    setWish("");
  };

  const handleChange = evt => {
    setWish(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{word}</h2>
      <input type="text" onChange={handleChange} value={wish} />
    </form>
  );
};
