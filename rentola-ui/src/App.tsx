import { useEffect, useState } from 'react';
import RentolaNav from './components/base/RentolaNav';
import ItemsContainer from './components/ItemsContainer';
import { IItem } from './components/Item';
import './App.scss';

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);

  const newTestItem: IItem = {
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
