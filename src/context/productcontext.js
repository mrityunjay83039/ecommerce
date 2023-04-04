import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import { useContext } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    FeatureProducts: [],
    isSingleLoading : false,
    singleProduct : {},
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


    // 2nd api call to get singleproduct data

    const getSingleProduct = async (url) =>{
        Dispatch({type : "SET_SINGLE_LOADING"});

        try {
            
            const res = await axios.get(url);
            const singleProduct = await res.data;
            Dispatch({type : "SET_SINGLE_PRODUCT", payload:singleProduct});

        } catch (error) {
            Dispatch({type : "SET_SINGLE_ERROR"});
        }
    }


    useEffect(() => {
        getProducts(API);
    }, []);

    

    return(

        <AppContext.Provider value={{...State, getSingleProduct}}>
            {children}
        </AppContext.Provider>

    );
}

// custom hooks
    

const useProductContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useProductContext};