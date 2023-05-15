import { useState } from "react";

export function JobForm ({onAddJob}) {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState ('');
    const [name, setName] = useState ('');
    const [link, setLink] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddJob({title, description, name, link});
        setTitle('');
        setDescription('');
        setName('');
        setLink('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="link">Link:</label>
                <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button type="submit">Add Job</button>
        </form>
    )
}