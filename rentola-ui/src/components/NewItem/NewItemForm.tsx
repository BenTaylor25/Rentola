import './NewItemForm.scss';

export default function NewItemForm() {

    return (
        <form id="new-item-form">

            <table>
                <tr>
                    <td>
                        <label htmlFor="new-item-name">Item Name:</label>
                    </td>
                    <td>
                        <input id="new-item-name" type="text" placeholder="Name" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="new-item-quantity">Quantity:</label>
                    </td>
                    <td>
                        <input id="new-item-quantity" type="number" defaultValue={1} />
                        {/*
                            This should really have min=1 and max=10000 but
                            I want to handle this on the server.
                        */}
                    </td>
                </tr>
            </table>

            <button type="submit">Create</button>
        </form>
    );
}
