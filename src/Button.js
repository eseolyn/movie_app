import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  // create-react-app has random class name.so can use css module.
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
