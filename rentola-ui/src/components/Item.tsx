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

    setUiQty(uiQty - 1);
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
