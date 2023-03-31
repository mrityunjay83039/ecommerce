import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    FeatureProducts: [],
}

const AppProvider = ({children}) => {

    const [State, Dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        Dispatch({type : "SET_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            Dispatch({type : "SET_API_DATA", payload : products});

        }catch(error){
            Dispatch({type : "API_ERROR"})
        }
        
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return(

        <AppContext.Provider value={{...State}}>
            {children}
        </AppContext.Provider>

    );
}

export {AppContext, AppProvider};