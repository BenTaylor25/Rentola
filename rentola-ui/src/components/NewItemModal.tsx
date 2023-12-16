import "./NewItemModal.scss";

interface NewItemModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function NewItemModal(props: NewItemModalProps) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div id="new-item-modal-background" onClick={props.close}>
      <div id="new-item-modal">
        <h1>test</h1>
      </div>
    </div>
  );
}
