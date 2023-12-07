import { useDispatch, useSelector } from 'react-redux';
import { InputSearch, TitleInputSearch } from  '../FormContacts/FormContacts.styled'
import { setFilter } from 'redux/filterSlice';



 export const Filter =  () => { 
    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.filter.value);

   


    const handleFilterChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
      };
    

        return (
            <>
            <TitleInputSearch> Find contacts by name </TitleInputSearch>
            <InputSearch 
            type="text" 
            name="search" 
            value={filterValue} 
            onChange={handleFilterChange} 
            required />
            </>
        );
    }
 
