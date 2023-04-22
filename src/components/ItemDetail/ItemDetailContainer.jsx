import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const onAdd = (cantidad) => {
    const productToAdd = {
      ...product,
      quantity: cantidad,
    };
    setCart([...cart, productToAdd]);
    console.log(
      `Se agregaron al carrito ${cantidad} unidad/es del producto ${product.title}`
    );
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};
