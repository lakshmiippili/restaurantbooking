import "./Orders.css";
import Input from "../UI/Input.js";
import { useState ,useEffect} from "react";
import OrdersList from "./OrdersList";
import Button from '../UI/Button.js'
const Orders = () => {
  const [ordId, setOrdId] = useState("");
  const [ordPrice, setOrdPrice] = useState("");
  const [ordDish, setOrdDish] = useState("");
  const [ordTable, setOrdTable] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const order = {
      dish: ordDish,
      price: ordPrice,
      id: ordId,
      table: ordTable,
    };
    localStorage.setItem(ordId, JSON.stringify(order));
    // props.onAddProduct(product,enteredIdState)
    setOrderList([...orderList, order]);
  };
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const keys = Object.keys(localStorage);
    let storedOrdersList = [];
    for (let i = 0; i < keys.length; i++) {
      storedOrdersList = [
        ...storedOrdersList,
        JSON.parse(localStorage.getItem(keys[i])),
      ];
    }
    console.log(storedOrdersList);
    setOrderList(() => {
      return storedOrdersList;
    });
  }, []);

  const idChangeHandler = (e) => {
    setOrdId(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setOrdPrice(e.target.value);
  };
  const dishChangeHandler = (e) => {
    setOrdDish(e.target.value);
  };
  const tableChangeHandler = (e) => {
    setOrdTable(e.target.value);
  };
  const deleteOrder = (id) => {
    setOrderList(orderList.filter((ord) => ord.id !== id));
    localStorage.removeItem(id);
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} >
        <Input
          type="number"
          id="orderId"
          label="Enter Order Id"
          value={ordId}
          onChange={idChangeHandler}
        />
        <Input
          type="number"
          id="orderprice"
          label="Enter Price"
          value={ordPrice}
          onChange={priceChangeHandler}
        />
        <Input
          type="text"
          label="Enter Dish"
          id="orderDish"
          value={ordDish}
          onChange={dishChangeHandler}
        />
        <label htmlFor="table">Choose Table</label>
        <select
          name="table"
          id="table"
          value={ordTable}
          onChange={tableChangeHandler}
        >
          <option value="disabled">Select</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <Button type="submit" label="Add Order"></Button>
      </form>
      <OrdersList  orders={orderList} deleteOrder={deleteOrder}/>
    </div>
  );
};
export default Orders;
