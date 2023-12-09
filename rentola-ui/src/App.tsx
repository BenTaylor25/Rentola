import { useEffect, useState } from 'react';
import { Item } from './types/Item';
import RentolaNav from './components/base/RentolaNav';
import ItemsContainer from './components/ItemsContainer';
import './App.scss';

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  const newTestItem: Item = {
    name: "foo",
    qty: 1
  };

  useEffect(() => {
    setItems([...items, newTestItem]);
  }, []);

  return (
    <>
      <RentolaNav />

      <div>
        {/* search item section */}
        {/* new item section */}
      </div>

      {/* error list */}

      {/* existing items section */}
      <ItemsContainer items={items} />
    </>
  );
}
