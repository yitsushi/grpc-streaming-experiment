import React from 'react';
import logo from './logo.svg';
import './App.css';

import {credentials} from '@grpc/grpc-js';
import {ApplicationServiceClient} from './api/application/v1/app_grpc_pb'
import {ListNamespacesRequest} from './api/application/v1/app_pb'

const client = new ApplicationServiceClient('localhost:7070', credentials.createInsecure(), {})

function App() {
  client.listNamespaces(new ListNamespacesRequest())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
