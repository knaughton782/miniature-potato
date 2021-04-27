import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {

    return (

        <Card className='expenses'>
            <h2>Expense Tracker</h2>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />

        </Card>
    )
}

export default Expenses;