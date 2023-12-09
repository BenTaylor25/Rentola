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

  const newTestItem2: IItem = {
    name: "bar",
    qty: 2
  };

  const newTestItem3: IItem = {
    name: "baz",
    qty: 3
  };

  useEffect(() => {
    setItems([...items, newTestItem]);
    setItems([...items, newTestItem2]);
    setItems([...items, newTestItem3]);
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
