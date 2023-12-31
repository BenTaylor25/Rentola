import "./ErrorList.scss";

interface ErrorListProps {
    errors: string[]
}

export default function ErrorList(props: ErrorListProps) {
    return (
        <ul id="error-list">
            {props.errors.map(error => {
                return (
                    <li key={error}>{error}</li>
                );
            })}
        </ul>
    );
}
