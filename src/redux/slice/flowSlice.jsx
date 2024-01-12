import { createSlice } from "@reduxjs/toolkit";

let flowArray = localStorage.getItem('object')

let initialState = {
    flowData:[],
     savedFlow:false,
     payPrice:5,
     instanceNode:{},
    
}

export const flowSlice = createSlice({
    initialState,
    name:'createflow',
    reducers:{
        getFlow:(state,{payload})=>{
            console.log("payloadd",payload.savedElements);
            state.flowData = [...state.flowData,payload.savedElements]
            
        },
        resetFormData:(state,{payload})=>{
            console.log("working ");
            state.flowData = []
            state.payPrice = 2
        },

        addPayment:(state,{payload})=>{
            console.log("addingpay");
            state.payPrice=state.payPrice+5;
        },
        addInstance:(state,{payload})=>{
                        state.instanceNode = payload.instance
                        
                     }
    }
})


export  const {getFlow,resetFormData,addPayment,addInstance} = flowSlice.actions;
export default flowSlice.reducer;