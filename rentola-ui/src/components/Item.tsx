import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./Item.scss";
import { ALRT_DECREMENT_TO_DELETION_FMT, constInterpolate } from "../errorMessages";

export interface IItem {
  name: string;
  qty: number;
  methods: {
    increment: () => void;
    decrement: () => void;
    delete: () => void;
    deleteOnUI: () => void;
  }
  errorList: {
    appendError: (newError: string) => void;
    resetErrors: () => void;
  }
}

export default function Item(props: IItem) {
  const [uiQty, setUiQty] = useState(props.qty);

  function incrementButtonClick() {
    props.errorList.resetErrors();
    props.methods.increment();

    setUiQty(uiQty + 1);
  }

  function decrementButtonClick() {
    props.errorList.resetErrors();
    props.methods.decrement();

    if (uiQty === 1) {
      props.errorList.appendError(constInterpolate(
        ALRT_DECREMENT_TO_DELETION_FMT,
        [props.name]
      ));
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

  function deleteButtonClick() {
    props.errorList.resetErrors();
    props.methods.delete();
  }

  return (
    <div className="item">
      <p>{props.name}</p>

      <div className="item-quantity">
        <button onClick={decrementButtonClick}>-</button>
        <p>{uiQty}</p>
        <button onClick={incrementButtonClick}>+</button>
      </div>

      <button className="item-delete-button" onClick={deleteButtonClick}>
        <RiDeleteBin2Fill />
      </button>
    </div>
  );
}
