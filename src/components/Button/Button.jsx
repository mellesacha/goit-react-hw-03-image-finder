import PropTypes from 'prop-types';
import { ButtonLoad } from "./Button.styled";

const Button = ({ handleBtnClick }) => {
    return (
        <ButtonLoad type="button" onClick={handleBtnClick}>Load more</ButtonLoad>
    )
};

export default Button;

Button.propTypes = {
    handleBtnClick: PropTypes.func.isRequired
}