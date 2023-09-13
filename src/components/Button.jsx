import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, style, handleClick }) => {
    return (
        <button className={style} onClick={handleClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.string,
    handleClick: PropTypes.func.isRequired
};

export default Button;
