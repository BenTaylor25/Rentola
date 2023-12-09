import { useState } from 'react';
import RentolaNav from './components/base/RentolaNav';
import './App.scss';

type Item = {
  name: string,
  qty: number
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  const newTestItem: Item = {
    name: "foo",
    qty: 1
  };

  setItems([...items, newTestItem]);

  return (
    <>
      <RentolaNav />

      <div>
        {/* search item section */}
        {/* new item section */}
      </div>

      {/* error list */}

      {/* existing items section */}
    </>
  );
}
