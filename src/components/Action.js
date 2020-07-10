import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOption}>
      Mau ngapain yak hari ini?
    </button>
  </div>
);

export default Action;
