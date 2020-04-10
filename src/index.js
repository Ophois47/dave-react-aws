import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Chat />
  </React.StrictMode>,
  document.getElementById('root')
);

const DUMMY_DATA = [
  {
    senderId: "dpetnick89",
    text: "First test text"
  },
  {
    senderId: "somerando",
    text: "Oh yo! Almost a chat app!"
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: DUMMY_DATA
    }
  }


  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">
        { this.props.messages.map(message => {
          return (
            <li key={message.id}>
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

serviceWorker.unregister();
