import React from 'react';

import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

import { selectLoading } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  loading: selectLoading(),
});

const Loader = () => {
  const { loading } = useSelector(stateSelector);

  return loading ? (
    <div className="absolute bottom-0 w-full bg-gray-200 h-2">
      <div
        className="bg-purple-500 h-2 duration-1000"
        style={{ width: `${loading}%` }}
      ></div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
