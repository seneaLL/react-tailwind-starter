import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Test from 'containers/TestContainer';
import Loader from 'components/Loader';

import { PrivateRoute } from 'components/PrivateRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/private" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Loader />
    </>
  );
};

export default App;
