import {DATAREQUEST} from './actionTypes'
   
   const initState = {
      data:[],
   }
   
   const reducer = (state = initState, { type, payload }) => {
       console.log(payload,"reducer")
       switch (type) {
           case DATAREQUEST: {
               return {
                   ...state,
                   data:payload.result
               }
           }
           default:
               return state
       }
   }
   
   
   export default reducer;