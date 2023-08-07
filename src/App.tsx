import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Tasta from "./components/Tasta";
// import Message from "./Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import produce from "immer";
import Expandeble from "./components/Expandeble";
import Form from "./components/Form";

function App() {
  // const [firstName, setFirsttName] = useState("");

  // const [lastName, setLastName] = useState("");
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   adress: {
  //     city: "Cluj",
  //     zipCode: 400243,
  //   },
  // });

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // +++++++++++++++CONST+++++++++++++++++++
  // const handleClick = () => {
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.fixed === false);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  // setCustomer({
  //   ...customer,
  //   adress: { ...customer.adress, zipCode: 112 },

  //   ...customer,
  //   price: 10,
  // });

  // setTags([...tags, "mazac"]);
  // setTags(tags.filter((tag) => tag != "happy"));
  // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

  // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "product 1", quantity: 1 },
  //     { id: 2, title: "product 2", quantity: 1 },
  //   ],
  // });

  // const handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: 2 } : item
  //     ),
  //   });

  // setCustomer({
  //   ...customer,
  //   adress: { ...customer.adress, zipCode: 112 },
  // };

  //   <div>
  //   <NavBar cartItemsCount={cartItems.length}></NavBar>
  //   <Cart
  //     cartItems={cartItems}
  //     onClear={() => {
  //       setCartItems([]);
  //     }}
  //   ></Cart>
  // </div>

  // <Expandeble>Aloha buei!</Expandeble>

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
