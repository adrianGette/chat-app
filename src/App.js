import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="469e36ec-2757-444d-842a-d0c44a5ef28d"
      userName="AdrianGette"
      userSecret="32967811"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
