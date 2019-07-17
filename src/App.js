import React, { Suspense } from "react";
import "./App.css";
const LogoComponent = React.lazy(() => import("./LogoComponent"));

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Hol up...</div>}>
          <LogoComponent />
        </Suspense>
        <p>
          <code>
            this my{" "}
            <span role="img" aria-label="100">
              💯
            </span>{" "}
            app yo
          </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          a damn link even
        </a>
      </header>
    </div>
  );
};

export default App;
