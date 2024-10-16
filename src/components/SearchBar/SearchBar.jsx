import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import "./SearchBar.css"
import { GeoApiUrl, GeoApiOptions } from "../../api";
import PropTypes from 'prop-types';  

const  SearchBar=({onSearchChange})=>{
    const [search, setSearch]=useState(null);
    const loadOptions=(inputValue)=>{
        return  fetch(`${GeoApiUrl}/cities?minPopulation=800000&namePrefix=${inputValue}`, GeoApiOptions).then(
            (response)=>response.json()
        ).then(
            (response=>{
                return {
                    options :response.data.map((city)=>{
                        return {
                            value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name},${city.countryCode}`,                        }
                    })
                        
                    }
                }
            )
        ).catch(error=>console.error(error));
           
    }
    
    const handleOnChange=(searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return(
       <AsyncPaginate placeholder="Search for a City"
        debounceTimeout={700}
        value={search}
        onChange={handleOnChange}
        className="nav"
        loadOptions={loadOptions}
       />
    )
    
}
SearchBar.propTypes = {
    onSearchChange: PropTypes.func.isRequired,  // Validate that onSearchChange is a required function
  };
export default SearchBar;