import './NewItemModal.scss';

interface NewItemModalProps {
    open: boolean
}

export default function NewItemModal(props: NewItemModalProps) {
    if (!props.open) {
        return null;
    }

    return (
        <div id="new-item-modal">
            <h1>test</h1>
        </div>
    )
}
