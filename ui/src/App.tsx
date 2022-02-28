import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ListNamespacesRequest, Namespace, ListNamespacesResponse} from './api/application/v1/app_pb'
import { ApplicationServiceClient } from './api/application/v1/AppServiceClientPb'

const client = new ApplicationServiceClient('http://localhost:7070', null, null)

function App() {
  const [namespaces, setNamespaces] = React.useState<Array<Namespace>>([]);

  React.useEffect(() => {
    let data : Array<Namespace> = [];
    let req = new ListNamespacesRequest();
    let stream = client.listNamespaces(req, {});

    stream.on("data", (response : ListNamespacesResponse) => {
      let ns = response.getNamespace()
      if (ns != undefined) {
        data.push(ns)
      }

      setNamespaces([...data])

      console.log(`One New Offer, Total: ${data.length}`, 0.4);
    });

    stream.on("end", async () => {
      console.log({
        message: "Offer Service",
        description: "GetOfferStream completed",
        duration: 2,
      })
    });

    stream.on("error", (err) =>
      console.log({
        message: "Offer Service",
        description: "Error at GetOfferStream",
        duration: 2,
        error: err,
      })
    );

    return () => {
      stream.cancel();
    };
  });

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
        {namespaces.map((item) => (
          <div>{item.getName()}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
