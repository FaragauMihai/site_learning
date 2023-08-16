import { useState } from "react";
import categories from "./components/expense-tracker/categories";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Tasta from "./components/Tasta";
// import Message from "./Message";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import produce from "immer";
// import Expandeble from "./components/Expandeble";
// import FormProject from "./components/expense-tracker/FromProject";

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Lapte", amount: 5, category: "Utilities" },
    { id: 2, description: "Branza", amount: 5, category: "Entertainment" },
    { id: 3, description: "Cas", amount: 5, category: "Grocieries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
