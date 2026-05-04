import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from "../data/pizzas";

export default function Home() {
  return (
    <main>
      <Header />

      <section style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "16px",
        margin: "40px 16px"
      }}>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
            
          />
        ))}
      </section>
    </main>
  );
}

  


