import React from "react";
import ItemCard from "./ItemCard";
import { data } from "./data";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">Все товары</h1>
      <section className="py-4 container">
        <div style={styles}>
          {data.productName.map((pr, id) => {
            return (
              <ItemCard
                key={id}
                img={pr.img}
                title={pr.title}
                description={pr.description}
                price={pr.price}
                item={pr}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const styles = {
  display: "flex",
  justifyContent: "space-around",
};

export default Home;
