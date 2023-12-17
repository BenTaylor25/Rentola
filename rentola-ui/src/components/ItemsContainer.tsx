import Item, { IItem } from "./Item";
import NewItemButton from "./NewItem/NewItemButton";
import "./ItemsContainer.scss";

interface ItemsSectionProps {
  items: IItem[];
  openNewItemModal: () => void;
  itemMethods: {
    incrementItem: (itemName: string) => void;
    decrementItem: (itemName: string) => void;
    deleteItem: (itemName: string) => void;
    deleteItemOnUI: (itemName: string) => void;
  }
}

export default function ItemsContainer(props: ItemsSectionProps) {
  return (
    <div id="items-container">
      {props.items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          qty={item.qty}
          methods={{
            increment: () => props.itemMethods.incrementItem(item.name),
            decrement: () => props.itemMethods.decrementItem(item.name),
            delete: () => props.itemMethods.deleteItem(item.name),
            deleteOnUI: () => props.itemMethods.deleteItemOnUI(item.name)
          }}
        />
      ))}

      <NewItemButton openNewItemModal={props.openNewItemModal} />
    </div>
  );
}
