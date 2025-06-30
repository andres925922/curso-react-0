import { useId, useContext } from "react";
import "./ProductFilter.css";
import { FilterContext } from "../../contexts/FilterContext";

export const ProductFilter = () => {
    const minPriceId = useId();
    const categoryId = useId();

    const {filters, setFilters} = useContext(FilterContext);

    const changeMinPrice = (e) => {
        setFilters({...filters, minPrice: e.target.value});
    }
    
    const changeCategory = (e) => {
        setFilters({...filters, category: e.target.value});
    }
    
    return (
        <div className="product-filter">
            <div className="filter" id={minPriceId}>
                <label htmlFor="minPrice">Min Price</label>
                <input 
                    type="range" 
                    id="minPrice" 
                    name="minPrice" 
                    min="0" 
                    max="1000" 
                    value={filters.minPrice} 
                    onChange={changeMinPrice} 
                /> <span>$ {filters.minPrice}</span>
            </div>
            <div className="filter" id={categoryId}>
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={filters.category} onChange={changeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="health">Health</option>
                    <option value="groceries">Groceries</option>
                    <option value="home">Home</option>
                    <option value="jewelry">Jewelry</option>
                </select>
            </div>
        </div>
    );
}
