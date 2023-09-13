import PropTypes from 'prop-types';
import './Screen.css';



const Screen = ({ value }) => {
    return <div className="screen">{value}</div>;
};

Screen.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Screen;
