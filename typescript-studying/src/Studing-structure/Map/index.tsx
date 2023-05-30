import { useState } from "react";

const MapStudy = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Camiseta",
      price: 29.99,
      description: "Uma camiseta legal",
    },
    {
      id: 2,
      name: "Calça",
      price: 59.99,
      description: "Uma calça estilosa",
    },
    {
      id: 3,
      name: "Tênis",
      price: 99.99,
      description: "Um par de tênis confortavel",
    },
  ]);

  return (
    <div>
      <h1>Lista de produtos:</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <p>Preço: R${products.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapStudy;
