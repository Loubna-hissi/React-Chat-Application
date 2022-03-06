
// import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import Login from './components/Login.jsx';
function App() {
  if(!localStorage.getItem('username')) return <Login></Login>
  return (
    <ChatEngine
      height="100vh"
      projectID="89d03ae5-22e0-4a9a-a993-43a70b943b31"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}></ChatFeed>}
    ></ChatEngine>
  );
}
export default App;
