import React from 'react';
import { connect } from 'react-redux';

const Add = (props) => {
  const { dispatch, result } = props
  function getResult() {
    dispatch({
      type: 'add/addResult'
    })
  }
  return (
    <div className="App">
      累计值： <span>{result}</span>     ------------<button onClick={getResult}>点我计算</button>
    </div>
  );
}

export default connect(({add})=> add) (Add);
