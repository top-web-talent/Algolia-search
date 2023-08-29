import React from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { typesenseInstantsearchAdapter } from "typesense-instantsearch-adapter";

import { typenessclient } from "./typenessclient";

const SearchBx = () => {
  return (
    <InstantSearch indexName="auditions" searchClient={{ search() {} }}>
      <SearchBox />
    </InstantSearch>
  );
};

export default SearchBx;
