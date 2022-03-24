import PropTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation} />
    <Button text="-" clickHandler={onClickOperation} />
    <Button text="*" clickHandler={onClickOperation} />
    <Button text="/" clickHandler={onClickOperation} />
    <Button text="=" clickHandler={onClickEqual} />
  </section>
);

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

MathOperations.defaultProps = {};

export default MathOperations;
