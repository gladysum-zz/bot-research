import axios from 'axios'

const initialState = {
  messages: [['watson', "Hi, I'm Medibot. How may I help you?"]],
  results: ["result1", "result2", "result3",
  "A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation.A widening partisan chasm now favors extreme positions and uncompromising rhetoric over cooperation and conciliation."

  ]
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      if (state.messages.length > 100) return {state, messages: state.messages.slice(1).concat(action.payload)};
      return {state, messages: state.messages.concat(action.payload)};
    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';

/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: [['me', input]]
})

export const addResponseAction = response => ({
  type: ADD,
  payload: [['watson', response]]
})

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







