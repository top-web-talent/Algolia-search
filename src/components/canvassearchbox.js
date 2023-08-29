import React, { useState } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import Drawer from "@material-ui/core/Drawer";

import { typenessclient } from "./typenessclient";
import { mockHits } from "../constants/mockhits";




const Canvas = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Search
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="p-3">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <InstantSearch indexName="mockIndex" searchClient={{ search() {} }}>
            <SearchBox />
            {/* <RefinementList attribute="title" />
            <RefinementList attribute="description" /> */}
            <Hits hitComponent={({ hit }) => console.log("123123")} Hits={mockHits} />
          </InstantSearch>
        </div>
      </Drawer>
      {/* Other components go here */}
    </>
  );
};

function Hit({ hit }) {
  console.log({ hit });
  return (
    <div>
      <h1>title</h1>
      <p>description</p>
    </div>
  );
}

export default Canvas;
