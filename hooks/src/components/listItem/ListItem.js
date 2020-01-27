import React, { useContext } from "react";
import { WishContext } from "../../context/wishes/wishContext";

export const ListItem = () => {
  const { state, dispatch, deleteWish } = useContext(WishContext);
  return (
    <ul>
      {state.map(({ title, id }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            {/* <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "DELETE_WISH",
                  payload: id
                })
              }
            >
              DELETE
            </button> */}

            <button type="button" onClick={() => deleteWish(id)}>
              DELETE
            </button>
          </li>
        );
      })}
    </ul>
  );
};
