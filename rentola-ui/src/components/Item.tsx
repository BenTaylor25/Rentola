import './Item.scss';

export interface IItem {
  name: string,
  qty: number
}

export default function Item(props: IItem) {
    return (
        <div className="item">
            <p>{props.name}</p>
            <p>{props.qty}</p>
        </div>
    );
}
