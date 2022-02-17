import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Test from 'containers/TestContainer';
import Loader from 'components/Loader';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </>
  );
};

export default App;
