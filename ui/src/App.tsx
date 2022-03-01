import React from 'react';
import './App.css';

import {ListPodsRequest, Pod, ListPodsResponse} from './api/application/v1/app_pb'
import { ApplicationServiceClient } from './api/application/v1/AppServiceClientPb'

const client = new ApplicationServiceClient(
  'https://backend.aurora.efertone.me',
  null,
  null,
)

function App() {
  const [pods, setPods] = React.useState<Array<Pod>>([]);

  React.useEffect(() => {
    console.log("sending request")

    let data : Array<Pod> = [];
    let req = new ListPodsRequest();
    req.setNamespace("dummy");
    let stream = client.listPods(req, {});

    stream.on("data", (response : ListPodsResponse) => {
      let p = response.getPod()
      if (p !== undefined) {
        console.log(response.getType(), p.getName())

        if (response.getType() === "ADDED") {
          data.push(p)
        }

        if (response.getType() === "DELETED") {
          for (let idx = 0; idx < data.length; idx++) {
            if (data[idx].getName() === p.getName()) {
              data.splice(idx, 1);
              break
            }
          }
        }
      }

      setPods([...data])
    });

    stream.on("end", () => {
      console.log("Stream completed");
    });

    stream.on("error", (err) => {
      console.log(err);
    });

    return () => {
      stream.cancel();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pods:</h1>
        {pods.map((item) => (
          <div key={item.getName()}>{item.getName()}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
