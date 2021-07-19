import './ExpenseDate.css'

function ExpenseDate(props){
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'short'})
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})

    return (
        <div className="expense-date">
            <h2 className="expense-date__month">{month}</h2>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate