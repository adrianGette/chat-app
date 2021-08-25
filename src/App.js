import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="469e36ec-2757-444d-842a-d0c44a5ef28d"
      userName={ localStorage.getItem( 'username' ) }
      userSecret={ localStorage.getItem( 'password' ) }
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
