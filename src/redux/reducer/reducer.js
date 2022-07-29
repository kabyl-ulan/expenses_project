import {actionTypes} from "../actions/actionTypes";

const initialState = {
    balance: 100000,
    expenses: 0,
    expensesList: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SPEND_MONEY: {
            state.balance -= action.payload.amount
            state.expenses += +action.payload.amount
            return {...state, expensesList: [...state.expensesList, action.payload]}
        }
        case actionTypes.DELETE_SPENT_MONEY: {
            const foundProduct = state.expensesList.find((_, idx) => idx === action.payload)
            state.balance += +foundProduct.amount
            state.expenses -= +foundProduct.amount
            return {...state, expensesList: state.expensesList.filter((_, idx) => idx !== action.payload)}
        }
        case actionTypes.SORT_EXPENSES_LIST: {
            let value = [...state.expensesList]
            switch (action.payload) {
                case "a-z":
                    value = value.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                    return {...state, expensesList: value}
                case "z-a":
                    value = value.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
                    return {...state, expensesList: value}
                case "lowest":
                    value = value.sort((a, b) => b.amount - a.amount)
                    return {...state, expensesList: value}
                case "highest":
                    value = value.sort((a, b) => a.amount - b.amount)
                    return {...state, expensesList: value}
                default: {
                    return value
                }
            }
        }
        default: {
            return state
        }
    }
}