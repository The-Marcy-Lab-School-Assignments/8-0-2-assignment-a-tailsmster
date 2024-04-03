import { useState } from "react";

const UserForm = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a Search Term</p>
            <input type="text" placeholder="Search" value={query} onChange={handleChange}/>
            <button>Search Gifs</button>
        </form>
    )
}

export default UserForm