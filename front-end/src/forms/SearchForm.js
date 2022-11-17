import React, {useState} from 'react';
//import { v4 as uuid } from 'uuid';

const SearchForm = ({setData}) => {
    const initialState = {
        search: '',
        method: 'newspace'
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    function setDataForParent(e) {
        e.preventDefault();
        console.log(e);
        setData(formData);
    }

    return (
        <form className="input-group p-3 m-0 border-0 bd-example" onSubmit={setDataForParent}>
            <input
                id="search"
                className="form-control"
                type="text"
                name="search"
                onChange={handleChange}
            />
            <select
                id="method"
                name="method"
                >
                <option value="newspace">NewSpace</option>
                <option value="google">Google</option>
            </select>
   
            <button>Search</button>
        </form>
    )
}

export default SearchForm;