import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";

const Card = ({ image, price, className }) => {
  return (
    <S.Card className={className}>
      <S.Image src={image} />
      <h2>${price}</h2>
    </S.Card>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
