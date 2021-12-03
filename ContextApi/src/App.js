import react from "react";
import { Fragment } from "react";
import context from "./context/context";
import PackageContext from "./context/context";
import Provider from "./context/provider";

const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentThree />;
};
const AgentThree = () => {
  return (
    <Fragment>
      <h1>name</h1>
      <PackageContext.Consumer>
        {(context) => {
          return (
            <div>
              <h2> data : </h2> <mark>{context.data}</mark>
              <button onClick={context.acceptMission}>Acceptd Mission</button>
              <button onClick={context.rejectMission}>Reject Mission</button>
            </div>
          );
        }}
      </PackageContext.Consumer>
    </Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <h1>pranit</h1>
      <Provider>
        <AgentOne />
      </Provider>
    </div>
  );
}

export default App;
