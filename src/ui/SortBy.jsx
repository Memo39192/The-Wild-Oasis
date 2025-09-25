import { useSearchParams } from 'react-router';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || options[0].value;

  function handleChange(e) {
    setSearchParams(searchParams => {
      searchParams.set('sortBy', e.target.value);
      return searchParams;
    });
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      $type='white'
    />
  );
}

export default SortBy;
