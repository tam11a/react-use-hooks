import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePaginate } from '../.';

const App = () => {
  const {
		limit,
		setLimit,
		page,
		setPage,
		search,
		setSearch,
		watch,
		setFilterField,
		getQueryParams,
	} = usePaginate();


  return (
    <div>
		<button onClick={() => setPage(page - 1)}>-</button>
		{page}
		<button onClick={() => setPage(page + 1)}>+</button>		
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
