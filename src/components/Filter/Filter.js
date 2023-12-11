import { useDispatch, useSelector } from 'react-redux';
import { InputSearch, TitleInputSearch } from  '../FormContacts/FormContacts.styled'
import { selectFilter } from 'reduxFile/selectors';
import { filterContacts } from 'reduxFile/filterSlice';



 export const Filter =  () => { 
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);

    const handleFilterChange = (e) => {
        const { value } = e.target;
        dispatch(filterContacts(value));
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
 
