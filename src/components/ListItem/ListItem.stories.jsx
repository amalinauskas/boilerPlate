import React from "react";
import ListItem from "./ListItem";

export default {
  title: "ListItem",
  component: ListItem,
};

export const Primary = () => (
  <ListItem
    task="Cook"
    date={new Date().getTime()}
    onChecked={(checkboxValue) => {
      //
    }}
  />
);
