import {actionTypes} from "./actionTypes";

export const spendMoney = (item) => {
    return {type: actionTypes.SPEND_MONEY, payload: item}
}

export const deleteMoney = (idx) => {
    return {type: actionTypes.DELETE_SPENT_MONEY, payload: idx}
}

export const sortMoney = (value) => {
    return {type: actionTypes.SORT_EXPENSES_LIST, payload: value}
}