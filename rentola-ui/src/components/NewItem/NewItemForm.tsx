import { useState } from "react";
import { IItem } from "../Item";
import { serverRoute } from "../../routes";
import "./NewItemForm.scss";
import { ERR_ITEM_TO_CREATE_ALREADY_EXISTS_FMT, ERR_ITEM_TO_CREATE_EXISTS_ON_SERVER_FMT, constInterpolate } from "../../errorMessages";

interface NewItemFormProps {
  appendItemIfUnique: (newItem: IItem) => void;
  closeModal: () => void;
  itemMethods: {
    incrementItem: (itemName: string) => void;
    decrementItem: (itemName: string) => void;
    deleteItem: (itemName: string) => void;
    deleteItemOnUI: (itemName: string) => void;
    itemIsOnUI: (itemName: string) => boolean;
  }
  appendError: (newError: string) => void;
}

export default function NewItemForm(props: NewItemFormProps) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function addItemToUI() {
      const newItem: IItem = {
        name: itemName,
        qty: quantity,
        methods: {
          increment: () => props.itemMethods.incrementItem(itemName),
          decrement: () => props.itemMethods.decrementItem(itemName),
          delete: () => props.itemMethods.deleteItem(itemName),
          deleteOnUI: () => props.itemMethods.deleteItemOnUI(itemName)
        }
      };

      props.appendItemIfUnique(newItem);
  }

  function createItemRequest() {
    // reset error list

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
      if (res.status === 409) {
        if (props.itemMethods.itemIsOnUI(itemName)) {
          throw new Error(constInterpolate(
            ERR_ITEM_TO_CREATE_ALREADY_EXISTS_FMT,
            [itemName]
          ));
        } else {
          addItemToUI();
          throw new Error(constInterpolate(
            ERR_ITEM_TO_CREATE_EXISTS_ON_SERVER_FMT,
            [itemName]
          ));
        }
      } else if (res.status === 400) {
        for (const k in res.errors) {
          for (const err of res.errors[k]) {
            props.appendError(err);
          }
        }
      } else {
        addItemToUI();
      }
    })
    .catch(err => {
      props.appendError(err.message);
    });

    props.closeModal();
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

      <button type="button" onClick={createItemRequest}>
        Create
      </button>
    </form>
  );
}
