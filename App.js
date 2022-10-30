import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="general" // key dene se remount ho jeyega data aur jis category par click krenge
              country="in" // uska data aa jayega...
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="business"
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="entertainment"
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="health"
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="science"
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="sports"
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              key="technology"
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </>
  );
};
export default App;
