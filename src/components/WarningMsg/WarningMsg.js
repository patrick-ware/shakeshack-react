import React from 'react';
import './WarningMsg.css';

function WarningMsg(props) {
  return (
    <div className="Warning">
      {{props.dataLength} > 20 &&
        <p>
          Warning! Your selection has queried more records 
          than can be displayed on the graph ({props.dataLength} records). 
          Only the 20 most recent records will be shown.
        </p>
      }
      {{props.dataLength} === 0 && minMag < maxMag &&
        <p>
          Warning! Your selection has queried no records.
        </p>
      }
      {minMag > maxMag &&
        <p>
          Warning! Minimum magnitude value must be less than maximum magnitude value.
        </p>
      }
    </div>
  )
}
export default WarningMsg;
