import { useState } from 'react';
import RentolaNav from './components/base/RentolaNav';
import ItemsContainer from './components/ItemsContainer';
import { IItem } from './components/Item';
import './App.scss';
import SearchBar from './components/SearchBar';

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);
  function appendItem(newItem: IItem) {
    setItems([...items, newItem]);
  }

  return (
    <>
      <RentolaNav />

      <div>
        {/* search item section */}
        <SearchBar appendItem={appendItem} />

        {/* new item section */}
      </div>

      {/* error list */}

      {/* existing items section */}
      <ItemsContainer items={items} />
    </>
  );
}
