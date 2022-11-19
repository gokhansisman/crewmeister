import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    members: [],
}

 const membersSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        fetch_success: (state, action) => {
            state.members = action.payload.members
        }
    }
})

export const { fetch_success } = membersSlice.actions

export default membersSlice.reducer