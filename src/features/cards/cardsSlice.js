import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload
            state.cards[id] = { id, front, back }
        }
    }
})

export const selectCardById = (id) => (state) => state['cards'].cards[id]
export const { addCard } = cardSlice.actions
export default cardSlice.reducer