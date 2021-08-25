import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        const authObject = { 
            'Project-ID': "469e36ec-2757-444d-842a-d0c44a5ef28d", 
            'User-Name': username,
            'User-Secret': password 
        };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            console.log(error);
            setError('Hubo un error, usuario o contraseña incorrectos');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input" 
                        placeholder="Nombre de usuario" required 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input" 
                        placeholder="Contraseña" required 
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Empezar a Chatear</span>
                        </button>
                    </div>
                    <h2 className="error">{ error }</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;