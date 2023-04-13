import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  MCQs: [],
  answers: null,
  activeMCQ: 0,
  selectedInformation: [],
};
const showMcqSlice = createSlice({
  name: "mcq",
  initialState,
  reducers: {
    setMcqs: (state, action) => {
      state.MCQs = action.payload;
      state.answers =  null;
      state.activeMCQ = 0;
      state.selectedInformation= []
    },
    handleNext: (state, action) => {
      if (state.activeMCQ < state.MCQs.length - 1) {
        state.activeMCQ = state.activeMCQ + 1;
      }
    },
    handlePrevious: (state, action) => {
      if (state.activeMCQ > 0) {
        state.activeMCQ = state.activeMCQ - 1;
      } else {
        state.activeMCQ = 0;
      }
    },
    updateInformation: (state, action) => {
      const activeMcqData = state.selectedInformation.find(
        (value) => action.payload.selectedIndex === value.selectedIndex
      );

      if (activeMcqData) {
        console.log("This Mcq Exist before");
        activeMcqData.selectedOption = action.payload.selectedOption;
      } else {
        console.log("Does Not Exist");
        state.selectedInformation.push(action.payload);
      }
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

// actions
export const { setMcqs, handleNext, handlePrevious, updateInformation, setAnswers } =
  showMcqSlice.actions;

// selector functions
export const selectActiveMCQ = (state) => state.mcq.activeMCQ;

export const selectSelectedInformation = (state) =>
  state.mcq.selectedInformation;

export const selectActiveMcqOption = (state) =>
  state.mcq.selectedInformation[state.mcq.activeMCQ]?.selectedOption;

export const selectMcqs = (state) => state.mcq.MCQs;

export const selectAnswers = (state) => state.mcq.answers

// reducer
export default showMcqSlice.reducer;
