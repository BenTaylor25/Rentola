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
  return (
    <div className="item">
      <p>{props.name}</p>

      <div className="item-quantity">
        <button onClick={props.methods.increment}>-</button>
        <p>{props.qty}</p>
        <button onClick={props.methods.decrement}>+</button>
      </div>

      <button className="item-delete-button" onClick={props.methods.delete}>
        <RiDeleteBin2Fill />
      </button>
    </div>
  );
}
