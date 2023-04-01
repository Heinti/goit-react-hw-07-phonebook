// import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import {getFilterDataValue} from '../redux/selectors'
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../redux/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filterData =  useSelector(getFilterDataValue)

  const onChange = e => {
    const filterValue = e.target.value;
    // console.log(filterValue);
    dispatch(getFilterValue(filterValue));
    
  };
  

  return (
    <label className={css.label} htmlFor="find">
      Find contact by name
      <input type="text" value={filterData} onChange={onChange} />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
