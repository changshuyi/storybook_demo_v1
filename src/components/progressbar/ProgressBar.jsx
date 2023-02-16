import { useEffect, useState } from 'react';
import './progressBar.scss';

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    let newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    if (!done) {
      newStyle = {
        opacity: 1,
        width: '100%',
        background:
          'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)',
        boxShadow: '0 3px 3px -5px #f2f2f2, 0 2px 5px #eaeaea',
      };
    }

    setStyle(newStyle);
  }, [done]);

  return (
    <div className="progress">
      <div className="progressdone" style={style}>
        {done}%
      </div>
    </div>
  );
};
export default ProgressBar;
