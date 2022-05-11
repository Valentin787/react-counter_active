import PropTypes from "prop-types";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { MdOutlineRestartAlt } from "react-icons/md";
import s from "../Counter.module.css";

const Controls = ({
  onIncrement,
  onDecrement,
  onRestart,
  incrementState,
  decrementState,
}) => {
  return (
    <>
      <div className={s.btn_container}>
        <button onClick={onIncrement} className={s.btn_increment}>
          <HiOutlinePlus fill="white" fontSize="15px" />
          <span className={s.item_increment}>
            Збільшити на {incrementState}
          </span>
        </button>

        <button onClick={onDecrement} className={s.btn_decrement}>
          <HiOutlineMinus fontSize="15px" />
          <span className={s.item_decrement}>Зменшити на {decrementState}</span>
        </button>
      </div>
      <div className={s.restart_wrap}>
        <button onClick={onRestart} className={s.btn_restart}>
          <MdOutlineRestartAlt fontSize="25px" />
          <span className={s.item_restart}>Restart</span>
        </button>
      </div>
    </>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onRestart: PropTypes.func,
  incrementState: PropTypes.number,
  decrementState: PropTypes.number,
};

export default Controls;
