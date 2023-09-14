import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    event.preventDefault();
    console.log(event.target.value);
    const filterValue = event.target.value;
    dispatch(handleFilter(filterValue));
  };

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filterValue"
        title="Enter the name"
        required
        onChange={changeFilter}
      />
    </Label>
  );
};
