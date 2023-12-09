import Item, { IItem } from "./Item";

interface ItemsSectionProps {
    items: IItem[]
}

export default function ItemsContainer(props: ItemsSectionProps) {

    console.log(props.items);

    return(
        <>
            {
                props.items.map(item =>
                    <Item
                        key={item.name}
                        name={item.name}
                        qty={item.qty} />
                )
            }
        </>
    );
}
