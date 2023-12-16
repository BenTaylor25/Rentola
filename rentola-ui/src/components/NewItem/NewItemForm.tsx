import { useState } from "react";
import { serverRoute } from "../../routes";
import "./NewItemForm.scss";

export default function NewItemForm() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function createItem() {
    fetch(`${serverRoute}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        qty: `${quantity}`
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
  }

  return (
    <form id="new-item-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="new-item-name">Item Name:</label>
            </td>
            <td>
              <input
                id="new-item-name"
                type="text"
                placeholder="Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="new-item-quantity">Quantity:</label>
            </td>
            <td>
              <input
                id="new-item-quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
              />
              {/*
                This should really have min=1 and max=10000 but
                I want to handle this on the server.
              */}
            </td>
          </tr>
        </tbody>
      </table>

      <button type="button" onClick={createItem}>
        Create
      </button>
    </form>
  );
}
