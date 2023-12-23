import { useState } from "react";
import RentolaNav from "./components/base/RentolaNav";
import ItemsContainer from "./components/ItemsContainer";
import { IItem } from "./components/Item";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import { serverRoute } from "./routes";
import NewItemModal from "./components/NewItem/NewItemModal";
import ErrorList from "./components/ErrorList";

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function appendItemIfUnique(newItem: IItem): boolean {
    for (const item of items) {
      if (item.name == newItem.name) {
        return false;
      }
    }

    setItems([...items, newItem]);
    return true;
  }

  function appendError(newError: string) {
    setErrors(errors => [...errors, newError]);
  }

  function resetErrors() {
    setErrors(() => []);
  }

  function itemIsOnUI(itemName: string): boolean {
    for (const item of items) {
      if (item.name === itemName) {
        return true;
      }
    }
    return false;
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
  
  function deleteItem(itemName: string) {
    deleteItemOnUI(itemName);

    fetch(`${serverRoute}/item/${itemName}`, {
      method: "DELETE",
    });
  }

  function deleteItemOnUI(itemName: string) {
    setItems(
      items.filter((item) => {
        return item.name !== itemName;
      })
    );
  }

  return (
    <>
      <RentolaNav />

      <SearchBar
        appendItemIfUnique={appendItemIfUnique}
        errorList={{
          appendError,
          resetErrors
        }} />

      <ErrorList errors={errors} />

      <ItemsContainer
        items={items}
        openNewItemModal={() => setNewItemModalOpen(true)}
        itemMethods={{
          incrementItem,
          decrementItem,
          deleteItem,
          deleteItemOnUI
        }}
        errorList={{
          appendError,
          resetErrors
        }}
      />

      <NewItemModal
        isOpen={newItemModalOpen}
        close={() => setNewItemModalOpen(false)}
        appendItemIfUnique={appendItemIfUnique}
        itemMethods={{
          incrementItem,
          decrementItem,
          deleteItem,
          deleteItemOnUI,
          itemIsOnUI
        }}
        errorList={{
          appendError,
          resetErrors
        }}
      />
    </>
  );
}
