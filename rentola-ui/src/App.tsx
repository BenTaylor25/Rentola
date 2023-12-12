import { useState } from 'react';
import RentolaNav from './components/base/RentolaNav';
import ItemsContainer from './components/ItemsContainer';
import { IItem } from './components/Item';
import './App.scss';
import SearchBar from './components/SearchBar';

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);

  function appendItemIfUnique(newItem: IItem): boolean {
    for (const item of items) {
      if (item.name == newItem.name) {
        return false;
      }
    }

    setItems([...items, newItem]);
    return true;
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
      <ItemsContainer items={items} />
    </>
  );
}
