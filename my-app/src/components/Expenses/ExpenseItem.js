import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // function clickHandler(){
  //   console.log ('Clicked!!!')
  // }
  // const [title, setTitle] = useState(props.title);
  // console.log('Expense Item Evaluated by React');

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
