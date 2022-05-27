import { createSlice } from "@reduxjs/toolkit";

const initState = {

    dishes:[]

}

export const menuSlice = createSlice({

    name:"Menu",
    initialState:initState,
    reducers:{
        addDish:(state,action)=>{

            const dish = state.dishes.find((el)=> el.id === action.payload.id);
            if(dish){
                state.dishes = state.dishes.map((d)=> d.id === dish.id
                ? {...dish,quantity:dish.quantity+1,totalCost:dish.totalCost + dish.value}
                :d
                )
            }else{
                state.dishes.push({...action.payload,quantity:1,totalCost: action.payload.value})
            }
        },
        removeDish:(state,action)=>{

            const dish = state.dishes.find((el)=> el.id === action.payload.id);

            if(dish.quantity === 1){
                state.dishes = state.dishes.filter((el)=> el.id !== dish.id)
            }else{
                
                state.dishes = state.dishes.map((el)=> el.id === dish.id
                ?{...dish,quantity:dish.quantity-1,totalCost:dish.totalCost - dish.value}
                :el
                )

            }

        }
    }



})

export const {addDish,removeDish} = menuSlice.actions;