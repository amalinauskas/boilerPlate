import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => (
  <Card
    image="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
    price={20}
  />
);
