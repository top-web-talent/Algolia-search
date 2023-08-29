import React from "react";
import { InstantSearch, Hits } from "react-instantsearch";

import { typenessclient } from "./typenessclient";
import { mockHits } from "../constants/mockhits";

function Hit({ hit }) {
  console.log({ hit });
  return (
    <div>
      <h1>{hit.description}</h1>
    </div>
  );
}

export default function GridStyle() {
  return (
    <InstantSearch indexName="auditions" searchClient={typenessclient}>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
