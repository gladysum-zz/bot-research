import axios from 'axios'

const initialState = {
  messages: [['watson', "Hi, I'm your bot research assistant. How may I help you?"]],
  results: ["initial results"]
}

// const convert = object => {
//   let result = [];
//   for (let i in object) {
//     result.push(object[i]);
//   }
//   return result;
// }


/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      if (state.messages.length > 100) {
         return Object.assign({}, state, {
            messages: state.messages.slice(1).concat(action.payload)
         })
      }
      else {
        return Object.assign({}, state, {
          messages: state.messages.concat(action.payload)
        })
      }

    case OUTPUT_RESULTS:
      let obj = action.payload;
      let array = [];
      for (let i in obj) {
        array.push(obj[i]);
      }
      return Object.assign({}, state, {
              results: array
            })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';
const OUTPUT_RESULTS = 'OUTPUT_RESULTS';

/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: [['me', input]]
})

export const addResponseAction = response => ({
  type: ADD,
  payload: [['watson', response]]
})

export const outputResultsAction = results => ({
  type: OUTPUT_RESULTS,
  payload: results
})


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







