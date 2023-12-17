import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./Item.scss";

export interface IItem {
  name: string;
  qty: number;
  methods: {
    increment: () => void;
    decrement: () => void;
    delete: () => void;
    deleteOnUI: () => void;
  }
}

export default function Item(props: IItem) {
  const [uiQty, setUiQty] = useState(props.qty);

  function incrementButtonClick() {
    props.methods.increment();

    setUiQty(uiQty + 1);
  }

  function decrementButtonClick() {
    props.methods.decrement();

    if (uiQty === 1) {
      props.methods.deleteOnUI();
      /*
        The server will remove the item
        using this same logic, so we don't
        need to call delete on the API.
      */
    } else {
      setUiQty(uiQty - 1);
    }
  }

  return (
    <div className="item">
      <p>{props.name}</p>

      <div className="item-quantity">
        <button onClick={decrementButtonClick}>-</button>
        <p>{uiQty}</p>
        <button onClick={incrementButtonClick}>+</button>
      </div>

      <button className="item-delete-button" onClick={props.methods.delete}>
        <RiDeleteBin2Fill />
      </button>
    </div>
  );
}
