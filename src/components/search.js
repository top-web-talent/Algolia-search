import React from "react";
import { InstantSearch } from "react-instantsearch-dom";

import { typenessclient } from "./typenessclient";
import SearchBx from "./searchbox";
import AddFilters from "./addfilters";
import GridStyle from "./gridstylesearchresults";

const Search = () => {
  return (
    <InstantSearch indexName="mockIndex" searchClient={{ search() {} }}>
      <SearchBx />
      <AddFilters />
      <GridStyle />
    </InstantSearch>
  );
};

export default Search;
