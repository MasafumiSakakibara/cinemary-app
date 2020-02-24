import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search: React.FC = () => {
  return (
    <>
      <form>
        <TextField id="searchMovie" label="search movie" color="secondary" />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
};

export default Search;
