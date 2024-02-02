import touch from "../../assests/images/touch.png";
import check from "../../assests/images/check.png";
import eye from "../../assests/images/eye.png";
import block from "../../assests/images/block.png";
import telegram from "../../assests/images/telegram.png";
import mail from "../../assests/images/mail.png";
import card from "../../assests/images/card.png"
import gpay from "../../assests/images/gpay.png"
import bank from "../../assests/images/bank.png"

export const CardItem = [
  {
    icon: touch,
    name: "Number of click on links",
    value: 370,
  },
  {
    icon: telegram,
    name: "Message Sent",
    value: 370,
  },
  {
    icon: mail,
    name: "Message Received",
    value: 120,
  },
  {
    icon: eye,
    name: "Number of Read",
    value: 370,
  },
  {
    icon: check,
    name: "Number of Yes",
    value: 370,
  },
  {
    icon: block,
    name: "Number of No",
    value: 370,
  },
];

export const ResponseCardItem = [
  { icon: eye, name: "Echobot", comment: "Not Identifying the user's" },
  { icon: touch, name: "TestBot", comment: "Not Identifying the user's" },
  { icon: check, name: "Buddy", comment: "Not Identifying the user's" },
  { icon: block, name: "Amigo", comment: "Not Identifying the user's" },
  { icon: telegram, name: "John", comment: "Not Identifying the user's" },
  { icon: eye, name: "Redmi", comment: "Not Identifying the user's" },
  { icon: mail, name: "Colan", comment: "Not Identifying the user's" },
  { icon: eye, name: "Echobot", comment: "Not Identifying the user's" },
  { icon: check, name: "Echobot", comment: "Not Identifying the user's" },
];

export const SubscriptionData = [
  { name: "Tier 1", value: "$7.80", checkList: ["50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation",] },
  { name: "Tier 2", value: "$8.80", checkList: ["50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation",] },
  { name: "Tier 3", value: "$9.80", checkList: ["50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation",] },
  { name: "For More Details", value: "Contact the sales person by using the button below", checkList: ["50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation","50 Imnage Generation",] },
];



export const AccountCardHead=[
  {icon:card,label:"Card"},
  {icon:gpay,label:"UPI"},
  {icon:bank,label:"Bank Account"},
]

export const AccountCardInputData=[
  {
    label:"Card Number",
    includeImg:"true",
    fullwidth:"true",
    placeholderText:"1234 1234 1234 1234 "
  },
  {
    label:"Expiration",
    includeImg:"false",
    fullwidth:"false",
    placeholderText:"MM/YY"
  },
  {
    label:"CCV",
    includeImg:"false",
    fullwidth:"false",
    placeholderText:"***"
  },
  {
    label:"Country",
    includeImg:"false",
    fullwidth:"true",
    placeholderText:"Select"
  },
]

export const GpayCardData = [
  {
    label:"Enter your UPI id",
    includeImg:"false",
    fullwidth:"true",
    placeholderText:"Enter upi id"
  }
]

export const BankAccountCardData=[
  {
    label:"Account Number",
    includeImg:"false",
    fullwidth:"true",
    placeholderText:"Enter Account number"
  },
  {
    label:"IFSC",
    includeImg:"false",
    fullwidth:"true",
    placeholderText:"Enter IFSC Code"
  }
]