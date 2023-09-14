import "./App.scss";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SingleCharPage from "./pages/SingleCharPage/SingleCharPage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
          />
          <Route path=":charId" element={<SingleCharPage />} />
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
