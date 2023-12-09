import { Item } from "../types/Item";

interface ItemsSectionProps {
    items: Item[]
}

export default function ItemsContainer(props: ItemsSectionProps) {

    console.log(props.items);

    return(
        <>
            [items]
        </>
    );
}
