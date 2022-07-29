import './style/App.scss'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortMoney, spendMoney} from "./redux/actions/actionCreators";
import TableRow from "./components/TableRow";

function App() {
    const dispatch = useDispatch()
    const [history, setHistory] = useState({
        date: '',
        name: '',
        amount: '',
    })
    const {balance, expenses, expensesList} = useSelector(s => s)
    const handleChange = (e) => {
        setHistory({...history, [e.target.name]: e.target.value})
    }
    const displayData = () => {
        return expensesList.map((el, idx) => (
            <TableRow el={el} idx={idx} key={idx}/>
        ))
    }
    useEffect(() => {
        displayData()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="item">
                        <h1 className="item__title">Balance: {balance}</h1>
                    </div>
                    <div className="item">
                        <h1 className="item__title">Expenses: {expenses}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="values">
                        <input
                            className="values__input"
                            onChange={handleChange}
                            type="date"
                            name='date'
                            value={history.date}/>
                        <input
                            className="values__input value"
                            onChange={handleChange}
                            type="text" name='name'
                            value={history.name}/>
                        <input
                            className="values__input value"
                            onChange={handleChange}
                            type="number"
                            name='amount'
                            value={history.amount}/>
                        <button
                            className="values__btn"
                            style={{
                                background: balance > history.amount ? "#30811b" : '#8cb283'
                            }}
                            disabled={balance < history.amount}
                            onClick={() => {
                                if (balance >= history.amount) {
                                    dispatch(spendMoney(history))
                                }
                            }}>
                            Pay
                        </button>
                        <select
                            className="values__select"
                            onChange={(e) => dispatch(sortMoney(e.target.value))}
                        >
                            <option
                                className="values__select__option"
                                value="a-z">a-z
                            </option>
                            <option
                                className="values__select__option"
                                value="z-a">z-a
                            </option>
                            <option
                                className="values__select__option"
                                value="lowest">lowest
                            </option>
                            <option
                                className="values__select__option"
                                value="highest">highest
                            </option>
                        </select>
                    </div>
                </div>
                <table className="table">
                    <thead className="table__thead">
                    <tr className="table__thead__tr">
                        <th className="table__thead__tr__td">When money is spent</th>
                        <th className="table__thead__tr__td">For what money is spent</th>
                        <th className="table__thead__tr__td" colSpan='2'>How much is spent</th>
                    </tr>
                    </thead>
                    <tbody className="table__tbody">
                    {
                        displayData()
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
