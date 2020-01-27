import React from "react";
import { List } from "./components/list/List";
import { Wishes } from "./context/wishes/wishState";
import { ListItem } from "./components/listItem/ListItem";

function App() {
  return (
    <Wishes>
      <List />
      <ListItem />
    </Wishes>
  );
}

export default App;
