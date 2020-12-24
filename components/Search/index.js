import { FaSistrix } from 'react-icons/fa';
import './index.css';

const Search = props => {
  const {
    placeholder = "Search",
    showButton = true,
    onChange,
    onClick,
  } = props;

  return (
    <div className="Search">
      <input
        type="serach"
        placeholder={placeholder}
        className={showButton ? 'Search-show-button' : ''}
        onChange={onChange}
      />

      {
        showButton ? (
          <button
            className="Search-button"
            onClick={onClick}
          >
              <FaSistrix />
            </button>
        ) : null
      }
    </div>
  );
};

export default Search;