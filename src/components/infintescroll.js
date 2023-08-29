import React, { useState } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
  Highlight,
} from "react-instantsearch-dom";
import Drawer from "@material-ui/core/Drawer";
import { mockHits } from "../constants/mockhits";
export const InfiniteScroll = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Search
      </button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="p-3">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <InstantSearch indexName="auditions" searchClient={{ Search() {} }}>
            <SearchBox />
            <InfiniteHits
              hitComponent={({ hit }) => (
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Highlight attribute="title" hit={hit} />
                      </h5>
                      <p className="card-text">
                        <Highlight attribute="performer" hit={hit} />
                      </p>
                    </div>
                  </div>
                </div>
              )} 
              hits={mockHits}
            />
          </InstantSearch>
        </div>
      </Drawer>
      {/* Other components go here */}
    </>
  );
};
