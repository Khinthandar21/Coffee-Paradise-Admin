import React, { useContext } from "react";
import styles from "../styles/Orders.module.css";
import { ORDERS } from "../orderItems.js";

const Orders = () => {
  // const totalAmount = calculateTotalAmount();

  return (
    <div className={`container ${styles.container}`}>
      <div>
        <table className={`table table-striped table-bordered ${styles.table}`}>
          <thead className={`thead-dark ${styles.tableHeader}`}>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  {item.price
                    ? `$${item.price.toFixed(2)}`
                    : "Price not available"}
                </td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className={styles.totalAmount}>Total: ${totalAmount}</div> */}
      </div>
    </div>
  );
};

export default Orders;
