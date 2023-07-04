const OrdersList=({ orders, deleteOrder }) => {
    const table1 = orders.filter(
      (ord) => ord.table === "table1"
    );
    const table2 = orders.filter(
        (ord) => ord.table === "table2"
      );
      const table3 = orders.filter(
        (ord) => ord.table === "table3"
      );
  
    return <div>
      <h4>Table 1</h4>
      <ul id="table1">
        {table1.map((ord)=>{
          return (<li key={ord.id}>
              {ord.dish}-{ord.price}
              <button onClick={()=>deleteOrder(ord.id)}>
              Delete
              </button>
          </li>)
        })}
      </ul>
      <h4>Table 2</h4>
      <ul id="table2">
        {table2.map((ord)=>{
          return (<li key={ord.id}>
              {ord.dish}-{ord.price}
              <button onClick={()=>deleteOrder(ord.id)}>
              Delete
              </button>
          </li>)
        })}
      </ul>
      <h4>Table 3</h4>
      <ul id="table3">
        {table3.map((ord)=>{
          return (<li key={ord.id}>
              {ord.dish}-{ord.price}
              <button onClick={()=>deleteOrder(ord.id)}>
              Delete
              </button>
          </li>)
        })}
      </ul>
    </div>;
  };
  
export default OrdersList