import React from "react";

const data_collspan = {
  columns: [
    {
      field: "[]",
      sort: "head",
      label: [<input type="checkbox" />]
    },
    {
      field: "location",
      sort: "asc",
      label: "Location"
    },
    {
      label: "Basic Info",
      field: "first",
      sort: "asc"
    },
    {
      label: "Subscription Date",
      field: "last",
      sort: "asc"
    },
    {
      label: "Status",
      field: "handle",
      sort: "status"
    }
  ],
  rows: [
    {
      firstm: [<input type="checkbox" />],
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
      status: "confirmed"
    },
    {
      firstm: [<input type="checkbox" />],
      first: "Jacob",
      last: "Thornton",
      handle: "@fat",
      status: "confirmed"
    },
    {
      firstm: <input type="checkbox" />,
      first: "Larry the Bird",
      last: "Thornton",
      handle: "@twitter",
      status: "confirmed" 
    }
  ]
};
export default data_collspan;
