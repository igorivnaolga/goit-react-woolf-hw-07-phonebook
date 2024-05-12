import { useDispatch, useSelector } from 'react-redux';
import { filterPhone } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const { Label, Input } = require('./Filter.styled');

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const updateFilter = value => {
    dispatch(filterPhone(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={e => updateFilter(e.target.value)}
      />
    </Label>
  );
};

export default Filter;
