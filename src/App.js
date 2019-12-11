import React, { Suspense } from "react";
import "./App.css";
const LogoComponent = React.lazy(() => import("./LogoComponent"));

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Suspense fallback={<p>Loading</p>}>
          <LogoComponent />
        </Suspense>
        <p>
          <code>
            this my
            <span role="img" aria-label="100">
              &nbsp;💯&nbsp;
            </span>
            app yo
          </code>
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anchor link
        </a>
      </header>
    </div>
  );
};

export default App;
