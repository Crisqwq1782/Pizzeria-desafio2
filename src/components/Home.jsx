import Header from "./Header";
import CardPizza from "./CardPizza";

const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: "$5.950",
    ingredients: ["mozzarella", "tomate", "albahaca", "orégano"],
    img: "https://easyways.cl/storage/20210208143331pizza-napolitana.jpg"
  },
  {
    id: 2,
    name: "Española",
    price: "$6.950",
    ingredients: ["mozzarella", "pimentón", "pimiento", "cebolla"],
    img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg"
  },
  {
    id: 3,
    name: "Pepperoni",
    price: "$6.950",
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://cdn.blog.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg"
  }
];

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
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </section>
    </main>
  );
}
