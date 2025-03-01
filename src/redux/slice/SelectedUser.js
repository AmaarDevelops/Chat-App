import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedUser: null,  // ✅ Fixed typo here
};

const selectedUserSlice = createSlice({
    name: 'selectedUser', // ✅ Corrected the slice name
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        removeSelectedUser: (state) => { // ✅ Fixed function name typo
            state.selectedUser = null;
        }
    }
});

export const { setSelectedUser, removeSelectedUser } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
