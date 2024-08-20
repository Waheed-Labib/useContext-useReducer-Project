import { useContext } from "react";
import { productContext } from "../contexts/ProductProvider";

const useProduct = () => {
    const context = useContext(productContext)

    return context;
}

export default useProduct;