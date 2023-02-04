import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "starbucks";
  return (
    <>
      <h1 className="orange">Hello</h1>
      <h2>Thank you to visit our store</h2>
      <p>{name} menu</p>
      <ul>
        <li>americano</li>
        <li>latte</li>
        <li>none coffee</li>
      </ul>
      <img
        src="https://i.guim.co.uk/img/media/d4e1ff1c19acb83b8cddd9752c91071cca4eeb57/0_74_6000_3600/master/6000.jpg?width=620&quality=45&dpr=2&s=none"
        alt="nature"
        style={{ width: "200px", height: "200px" }}
      ></img>
    </>
  );
}

export default App;
