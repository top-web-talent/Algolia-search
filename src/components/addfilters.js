import React from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
} from "react-instantsearch-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

import { typenessclient, typesenseClient } from "./typenessclient";

const AddFilters = () => {
  return (
    <InstantSearch indexName="mockIndex" searchClient={{ search() {} }}>
      <RefinementList attribute="performer" />
      <RefinementList attribute="type" />
      <RefinementList attribute="category" />
      {/* Other search components go here */}
    </InstantSearch>
  );
};

export default AddFilters;