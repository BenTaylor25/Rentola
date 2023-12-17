import { MouseEvent } from "react";
import NewItemForm from "./NewItemForm";
import { IItem } from "../Item";
import "./NewItemModal.scss";

interface NewItemModalProps {
  isOpen: boolean;
  close: () => void;
  appendItemIfUnique: (newItem: IItem) => void;
  deleteItem: (itemName: string) => void;
}

export default function NewItemModal(props: NewItemModalProps) {
  if (!props.isOpen) {
    return null;
  }

  function modalClicked(e: MouseEvent<HTMLDivElement>) {
    const backgroundClicked =
      (e.target as HTMLElement).id === "new-item-modal-background";

    if (backgroundClicked) {
      props.close();
    }
  }

  return (
    <div id="new-item-modal-background" onClick={modalClicked}>
      <div id="new-item-modal">
        <button id="close-new-item-modal-button" onClick={props.close}>
          X
        </button>
        <NewItemForm appendItemIfUnique={props.appendItemIfUnique} deleteItem={props.deleteItem} />
      </div>
    </div>
  );
}
