import './SearchBar.scss';

export default function SearchBar() {

    function search() {
        
    }

    return (
        <div id="search-bar">
            <input
                id="search-bar-text"
                type="text"
                placeholder="Search Items" />

            <button
                id="search-bar-button"
                onClick={search}>
                Search
            </button>
        </div>
    );
}
