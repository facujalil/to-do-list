import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../utils/localStorage";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: getItem("tasks") || [],
  reducers: {
    addTask: (state, action) => {
      const { id, text, completed } = action.payload;
      return (state = [{ id: id, text: text, completed: completed }, ...state]);
    },
    completeTask: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    deleteTask: (state, action) => {
      return (state = state.filter((item) => item.id !== action.payload));
    },
    clearList: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask, clearList } =
  tasksSlice.actions;
