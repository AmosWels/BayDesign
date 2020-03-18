import React from "react";
import ROUTES from "../../utils/index";
import { MDBIcon } from "mdbreact";

const data_collspan = {
  columns: [
    {
      field: "[]",
      sort: "head",
      label: [<input type="checkbox" />]
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
      field: "location",
      sort: "asc",
      label: "Location"
    },
    {
      label: "Status",
      field: "handle",
      sort: "status"
    },
    {
      label: "View",
      field: "handle",
      sort: "View"
    }
  ],
  rows: [
    {
      firstm: [<input type="checkbox" />],
      last: [<MDBIcon icon="male"></MDBIcon>, " Otto James, Otto@gmail.com"],
      handle: "02/01/2020, 06:50",
      first: "Uganda",
      status: "confirmed",
      view: [<a href={ROUTES.contactDetails}><MDBIcon icon="eye"></MDBIcon></a>]
    },
    {
      firstm: [<input type="checkbox" />],
      last: [<MDBIcon icon="female"></MDBIcon>," Miriam Nakiwuge, miriam@gmail.com"],
      handle: "02/02/2020, 05:50",
      first: "Uganda",
      status: "confirmed",
      view: [<a href={ROUTES.contactDetails}><MDBIcon icon="eye"></MDBIcon></a>]
    },
    {
      firstm: <input type="checkbox" />,
      last: [<MDBIcon icon="male"></MDBIcon>," Owor Yoakim, owor@gmail.com"],
      handle: "02/05/2020, 02:50",
      first: "Kenya",
      status: "confirmed",
      view: [<a href={ROUTES.contactDetails}><MDBIcon icon="eye"></MDBIcon></a>]
    }
  ]
};
export default data_collspan;
