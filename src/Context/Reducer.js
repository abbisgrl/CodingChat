//initial state of the app
export const initialState ={
    user:null,
};

//setting the action for context
export const actionTypes={
    SET_USER:'SET_USER',
};

//setting up the reducer for the state management and according to the action type
//the reducer will do his work .Here we use react context to set the user to centralized store so that
//all component can easily access
const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user:action.user,
            };

        default:
            return state;
    }
};

export default reducer;
