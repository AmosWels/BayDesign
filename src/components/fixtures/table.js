const data_collspan = {
  columns: [
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
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
      status: "confirmed"
    },
    {
      first: "Jacob",
      last: "Thornton",
      handle: "@fat",
      status: "confirmed"
    },
    {
      first: "Larry the Bird",
      last: "Thornton",
      handle: "@twitter",
      status: "confirmed" 
    }
  ]
};
export default data_collspan;
