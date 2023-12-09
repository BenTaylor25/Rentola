
export interface IItem {
  name: string,
  qty: number
}

export default function Item(props: IItem) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.qty}</p>
        </div>
    );
}
