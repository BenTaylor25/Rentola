import './NewItemButton.scss';

export default function NewItemButton() {
    function openNewItemModal() {
        console.log("hi");
    }

    return (
        <div
            id="new-item-button-container">
            <div id="new-item-button"
                onClick={openNewItemModal}>
                <p>+</p>
            </div>
        </div>
    );
}
