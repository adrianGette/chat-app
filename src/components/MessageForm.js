import { useState } from 'react';

const MessageForm = () => {

    const [ value, setValue ] = useState('');

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Enviar un mensaje. . ."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </form>
    );
}

export default MessageForm;