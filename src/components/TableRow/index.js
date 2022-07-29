import React from 'react';
import {useDispatch} from "react-redux";
import {deleteMoney} from "../../redux/actions/actionCreators";

const TableRow = ({el, idx}) => {
    const dispatch = useDispatch()
    return (
        <>
            <tr key={el.name} className="table__tbody__tr">
                <td className="table__tbody__tr__td">{el.date}</td>
                <td className="table__tbody__tr__td">{el.name}</td>
                <td className="table__tbody__tr__td">{el.amount}</td>
                <td className="table__tbody__tr__td">
                    <button
                        className="table__tbody__tr__td__btn"
                        onClick={() => dispatch(deleteMoney(idx))}
                    >&times;
                    </button>
                </td>
            </tr>
        </>
    );
};

export default TableRow;