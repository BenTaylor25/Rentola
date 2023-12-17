import { useState } from "react";
import RentolaNav from "./components/base/RentolaNav";
import ItemsContainer from "./components/ItemsContainer";
import { IItem } from "./components/Item";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import { serverRoute } from "./routes";
import NewItemModal from "./components/NewItem/NewItemModal";

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);

  function appendItemIfUnique(newItem: IItem): boolean {
    for (const item of items) {
      if (item.name == newItem.name) {
        return false;
      }
    }

    setItems([...items, newItem]);
    return true;
  }

  function deleteItem(itemName: string) {
    setItems(
      items.filter((item) => {
        return item.name !== itemName;
      })
    );

    fetch(`${serverRoute}/item/${itemName}`, {
      method: "DELETE",
    });
  }

  function incrementItem(itemName: string) {
    fetch(`${serverRoute}/item/${itemName}/increment/1`, {
      method: "PUT"
    });
  }

  function decrementItem(itemName: string) {
    fetch(`${serverRoute}/item/${itemName}/decrement/1`, {
      method: "PUT"
    });
  }

  return (
    <>
      <RentolaNav />

      <div>
        {/* search item section */}
        <SearchBar appendItemIfUnique={appendItemIfUnique} />

        {/* new item section */}
      </div>

      {/* error list */}

      {/* existing items section */}
      <ItemsContainer
        items={items}
        openNewItemModal={() => setNewItemModalOpen(true)}
        itemMethods={{
          incrementItem,
          decrementItem,
          deleteItem
        }}
      />

      <NewItemModal
        isOpen={newItemModalOpen}
        close={() => setNewItemModalOpen(false)}
        appendItemIfUnique={appendItemIfUnique}
        deleteItem={deleteItem}
      />
    </>
  );
}
