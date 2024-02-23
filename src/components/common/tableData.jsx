export const subAdminTableHead = [
  {
    id: "id",
    label: "#",
  },
  {
    id: "first_name",
    label: "First Name",
  },
  {
    id: "last_name",
    label: "Last Name",
  },
  {
    id: "email_id",
    label: "Email ID",
  },
  {
    id: "designation",
    label: "Designation",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "Action",
    label: "Action",
  },
];

export const subAdminTableData = [
  {
    FirstName: "Jhon",
    LastName: "Doe",
    EmailID: "Johndoe@gmail.com",
    Designation: "Employer",
    Status: "Active",
  },
  {
    FirstName: "David ",
    LastName: "Beckham",
    EmailID: "david@gmail.com",
    Designation: "Accountant",
    Status: "InActive",
  },
  {
    FirstName: "Jennifer",
    LastName: "Lopez",
    EmailID: "jennifer@yopmail.com",
    Designation: "Employer",
    Status: "InActive",
  },
  {
    FirstName: "Sandeep",
    LastName: "Sharma",
    EmailID: "Sandeep@gmail.com",
    Designation: "Manager",
    Status: "Active",
  },
];

export const dashboardTableHead = [
  {
    id: "earnings_id",
    label: "ID",
  },
  {
    id: "chatbot",
    label: "Chatbot",
  },
  {
    id: "current_pledge",
    label: "Current Pledge",
  },
  {
    id: "lifetime_support",
    label: "Lifetime Support",
  },
  {
    id: "status",
    label: "Status",
  },
];

export const manageDataTableHead = [
  {
    id: "Name",
    label: "Name",
  },
  {
    id: "Email",
    label: "Email",
  },
  {
    id: "PhoneNumber",
    label: "Phone Number",
  },
];

export const manageDataTableData = [
  { Name: "John Doe", Email: "Johndoe@gmail.com", PhoneNumber: "8934575439" },
  { Name: "David", Email: "david@gmail.com", PhoneNumber: "893457539" },
  { Name: "Sandeep", Email: "Sandeep@gmail.com", PhoneNumber: "8934675439" },
];

export const RolesAndPermissionsHead = [
  {
    id:"#",
    label:"#"
  },

  {
    id: "Roles",
    label: "Roles",
  },
  {
    id: "Action",
    label: "Action",
  },
]
export const RolesAndPermissionsData = [
  { "#":"1",Roles: "Accountant", Action: "checkbox" },
  { "#":"2",Roles: "Manager", Action: "checkbox" },
  { "#":"3",Roles: "Employee", Action: "checkbox" },
]

export const RoleAuthoriZationHead = [
  {
    id: "#",
    label: "#",
  },
  {
    id: "Modules",
    label: "Modules",
  },
  {
    id: "View",
    label: "View",
  },
  {
    id: "Edit",
    label: "Edit",
  },
  {
    id: "Delete",
    label: "Delete",
  },
];

export const RoleAuthoriZationData = [
  {
    "#": 1,
    Modules: "Manage Sub Admin",
    View: "checkbox",
    Edit: "checkbox",
    Delete: "checkbox",
  },
  {
    "#": 2,
    Modules: "Manage Clients",
    View: "checkbox",
    Edit: "checkbox",
    Delete: "checkbox",
  },
  {
    "#": 3,
    Modules: "Manage  Chatbot",
    View: "checkbox",
    Edit: "checkbox",
    Delete: "checkbox",
  },
  {
    "#": 4,
    Modules: "Manage Subscription",
    View: "checkbox",
    Edit: "checkbox",
    Delete: "checkbox",
  },
];

export const ClientDataHead = [
  {id:"id",label:"#"},
  {
    id: "username",
    // id: "name",
    label: "Name",
  },
  {
    id: "email_id",
    label: "Email ID",
  },
  {
    id: "mobile_no",
    label: "Mobile Number",
  },
  {
    id: "plan",
    label: "Subscription Plan",
  },
  {
    id: "billing",
    label: "Billing",
  },
  {
    id: "clientAction",
    label: "Action",
  },
  // {
  //   id: "receiveddata",
  //   label: "Received Data",
  // },
];

export const DemoaHeadData = [
  {id:"#",label:"#"},
  {
    id: "name",
    label: "Name",
  },
  {
    id: "email_id",
    label: "Email ID",
  },
  {
    id: "mobile_no",
    label: "Mobile Number",
  },
  {
    id: "subscription_plan",
    label: "Subscription Plan",
  },
  {
    id: "billing",
    label: "Billing",
  },
  // {
  //   id: "Received_Data",
  //   label: "Received Data",
  // },
];

export const ClientData = [
  {
    "#": 1,
    name: "Sandeep",
    email_id: "Sharma",
    mobile_no: "Sandeep@gmail.com",
    subscription_plan: "Manager",
    billing: "Active",
    Received_Data: "None",
  },
  {
    "#": 2,
    name: "Sandeep",
    email_id: "Sharma",
    mobile_no: "Sandeep@gmail.com",
    subscription_plan: "Manager",
    billing: "Active",
    Received_Data: "None",
  },
  {
    "#": 3,
    name: "Sandeep",
    email_id: "Sharma",
    mobile_no: "Sandeep@gmail.com",
    subscription_plan: "Manager",
    billing: "Active",
    Received_Data: "None",
  },
  {
    "#": 4,
    name: "Sandeep",
    email_id: "Sharma",
    mobile_no: "Sandeep@gmail.com",
    subscription_plan: "Manager",
    billing: "Active",
    Received_Data: "None",
  },
];

export const SubscriptionDataHead = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "subscription_plan",
    label: "Tier",
  },
  {
    id: "billing",
    label: "Subscription Amount",
  },
  //no data in the api for description
  {
    id: "descrption",
    label: "Description",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "Action",
    label: "Edit",
  },
];

export const EditRole = [
  {
    id: "role_id",
    label: "#",
  },
  {
    id: "modules",
    label: "Modules",
  },
  {
    id: "checkbox",
    label: "View",
  },
  {
    id: "checkbox",
    label: "Edit",
  },
  {
    id: "checkbox",
    label: "Delete",
  },
];

export const chatBotTableTitle=[
    
  {id:"chatbot_id",label:"#"},
  {id:"Chatbot_name",label:"Chatbot Name"},
  {id:"question",label:"Question"},
  {id:"status",label:"Status"},
  {id:"Action",label:"Action"},
]