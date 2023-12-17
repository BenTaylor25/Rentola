import "./NewItemButton.scss";

interface NewItemButtonProps {
  openNewItemModal: () => void;
}

export default function NewItemButton(props: NewItemButtonProps) {
  return (
    <div id="new-item-button-container">
      <div id="new-item-button" onClick={props.openNewItemModal}>
        <p>+</p>
      </div>
    </div>
  );
}
