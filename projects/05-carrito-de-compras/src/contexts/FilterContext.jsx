import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        'minPrice': 0,
        'category': 'all'
    });
    
    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

export { FilterContext, FilterProvider };