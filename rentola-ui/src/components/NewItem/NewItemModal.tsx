import { MouseEvent } from "react";
import "./NewItemModal.scss";
import NewItemForm from "./NewItemForm";

interface NewItemModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function NewItemModal(props: NewItemModalProps) {
  if (!props.isOpen) {
   return null;
  }

  function modalClicked(e: MouseEvent<HTMLDivElement>) {
    const backgroundClicked = (e.target as HTMLElement).id === "new-item-modal-background";

    if (backgroundClicked) {
        props.close();
    }
  }

  return (
    <div id="new-item-modal-background" onClick={modalClicked}>
      <div id="new-item-modal">
        <NewItemForm />
      </div>
    </div>
  );
}
