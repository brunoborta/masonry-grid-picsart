import { useContext } from "react";
import { LoaderContext} from "./providers/loaderProvider";

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};