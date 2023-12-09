import Item, { IItem } from "./Item";
import './ItemsContainer.scss';

interface ItemsSectionProps {
    items: IItem[]
}

export default function ItemsContainer(props: ItemsSectionProps) {

    return(
        <div id="items-container">
            {
                props.items.map(item =>
                    <Item
                        key={item.name}
                        name={item.name}
                        qty={item.qty} />
                )
            }
        </div>
    );
}
