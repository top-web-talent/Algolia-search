import React, { useState } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
  Highlight,
  Configure,
  connectHits,
} from "react-instantsearch-dom";
import Drawer from "@material-ui/core/Drawer";
import Modal from "react-bootstrap/Modal";

import { typenessclient } from "./typenessclient";

const HitsModal = ({ hits }) => {
  return (
    <>
      {hits.map((hit) => (
        <div key={hit.id} className="mb-3">
          <h5>
            <Highlight attribute="title" hit={hit} />
          </h5>
          <p>
            <Highlight attribute="performer" hit={hit} />
          </p>
        </div>
      ))}
    </>
  );
};

const CustomHits = connectHits(HitsModal);

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState(null);

  const handleHitClick = (hit) => {
    setSelectedHit(hit);
    setOpen(true);
  };

  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="p-3">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <InstantSearch indexName="mockIndex" searchClient={{}}>
            <SearchBox />
            <RefinementList attribute="performer" />
            <RefinementList attribute="type" />
            <RefinementList attribute="category" />
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
                      <button
                        className="btn btn-primary"
                        onClick={() => handleHitClick(hit)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              )}
              hits={mockHits(4)}
            />
            {selectedHit && (
              <Modal show={open} onHide={() => setOpen(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedHit.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* Display details about selected hit */}
                </Modal.Body>
                <Modal.Footer>
                  {/* Display list of hits */}
                  <Configure hitsPerPage={5} />
                  <CustomHits />
                </Modal.Footer>
              </Modal>
            )}
          </InstantSearch>
        </div>
      </Drawer>
      {/* Other components go here */}
    </>
  );
};

export default ModalComponent;
