import React from 'react';
import { connect } from 'react-redux';

const Base = (props) => {
  const { dispatch, baseNum } = props
  function changeBaseNum() {
    dispatch({
      type: 'baseNum/addBaseNum',
      payload: 1
    })
  }
  return (
    <div className="App">
      相加的基数是： <span>{baseNum}</span>     ------------<button onClick={changeBaseNum}>点击我增加基数</button>
    </div>
  );
}

export default connect(({baseNum})=> baseNum) (Base)