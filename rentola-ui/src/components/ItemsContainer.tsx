import Item, { IItem } from "./Item";
import NewItemButton from "./NewItemButton";
import './ItemsContainer.scss';

interface ItemsSectionProps {
    items: IItem[],
    deleteItem: (itemName: string) => void
}

export default function ItemsContainer(props: ItemsSectionProps) {

    return(
        <div id="items-container">
            {
                props.items.map(item =>
                    <Item
                        key={item.name}
                        name={item.name}
                        qty={item.qty}
                        delete={() => props.deleteItem(item.name)} />
                )
            }

            <NewItemButton />
        </div>
    );
}
