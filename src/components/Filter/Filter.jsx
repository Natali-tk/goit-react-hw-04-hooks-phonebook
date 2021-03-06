import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter  ({ value, changeFilterInput }){
  return(
<label className={s.findFild}>
    Find contacts by name
    <input
      className={s.inputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

