import React from "react";
import PropTypes from "prop-types";

import s from "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
    increment: 10,
    decrement: 5,
  };
  static propTypes = {
    initialValue: PropTypes.number,
    increment: PropTypes.number,
    decrement: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
    increment: this.props.increment,
    decrement: this.props.decrement,
  };

  handleincrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + this.state.increment,
      };
    });
  };
  handledecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - this.state.decrement,
      };
    });
  };
  handlerestart = () => {
    this.setState({ value: 0 });
  };
  render() {
    const { value, increment, decrement } = this.state;

    return (
      <div className={s.container}>
        <Value value={value} />

        <Controls
          onIncrement={this.handleincrement}
          onDecrement={this.handledecrement}
          onRestart={this.handlerestart}
          incrementState={increment}
          decrementState={decrement}
        />
      </div>
    );
  }
}

// Компонент
{
  /* 
const Counter = ({number,increment,decrement}) => {
  return (
    <div className={s.container}>
      <div className={s.item}>
       
        <span className={s.number}>{number}</span>
      </div>
      <div className={s.btn_container}>
        <button className={s.btn_increment}>
          <HiOutlinePlus fill="white" fontSize="15px"/>
          <span className={s.item_increment}>Збільшити на {increment}</span>
        </button>
        <button className={s.btn_decrement}>
          <HiOutlineMinus  fontSize="15px"/>
          <span className={s.item_decrement}>Зменшити на {decrement}</span>
          </button>
      </div>
      <div className={s.restart_wrap}>
        <button className={s.btn_restart}>
          <MdOutlineRestartAlt  fontSize="25px" />
          <span className={s.item_restart}>Restart</span> </button>
      </div>
      
    </div>
  )
} */
}

// Counter.propTypes = {
//   number: PropTypes.number.isRequired,
//   increment: PropTypes.number.isRequired,
//   decrement:PropTypes.number.isRequired,

// }

export default Counter;
