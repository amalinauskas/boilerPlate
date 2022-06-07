import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";

const CardList = ({ products }) => {
  return (
    <S.CardList>
      {products &&
        products.map((product, index) => (
          <S.CardItem key={index} image={product.image} price={product.price} />
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardList;
