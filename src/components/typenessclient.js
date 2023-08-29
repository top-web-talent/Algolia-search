import React from "react";
import ReactDOM from "react-dom";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "6VI3q10ZxBcIw9j1bKAywMfRRC7sUkyB",
    nodes: [
      {
        host: "yexomk59q3zjg0i6p-1.a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title", // Replace with the field you want to search by
  },
  collectionSpecificSearchParameters: {
    auditions: {
      query_by: ["title", "performer"], // Fields to search within the "auditions" collection
      facet_by: ["type", "category", "instrument", "animal"], // Fields to use for faceting
      sort_by: ["created", "recorded"], // Fields to use for sorting
    },
  },
});

export const typenessclient = typesenseInstantsearchAdapter.searchClient;
