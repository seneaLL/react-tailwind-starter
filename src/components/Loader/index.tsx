import React from 'react';
import { useSelector } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectLoading } from 'actions/selectors';

const stateSelector = createStructuredSelector({
  loading: selectLoading(),
});

const Loader = () => {
  const { loading } = useSelector(stateSelector);

  return loading ? (
    <div className="fixed top-0 left-0 flex w-screen h-screen items-center justify-center bg-transparent bg-gray-500 bg-opacity-50 backdrop-blur-sm z-1002">
      <div className="w-80 h-80 border-t-4 border-b-4 border-indigo-900 rounded-full animate-spin"></div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
