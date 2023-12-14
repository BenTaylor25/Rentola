import { RiDeleteBin2Fill } from "react-icons/ri";
import './Item.scss';

export interface IItem {
  name: string,
  qty: number,
  delete: () => void
}

export default function Item(props: IItem) {
    return (
        <div className="item">
            <p>{props.name}</p>

            <div className="item-quantity">
                <button>-</button>
                <p>{props.qty}</p>
                <button>+</button>
            </div>

            <button
                className="item-delete-button"
                onClick={props.delete}>
                <RiDeleteBin2Fill />
            </button>
        </div>
    );
}
