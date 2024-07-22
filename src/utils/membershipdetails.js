export const fields = [
  {
    div: 1,
    data: [
      {
        component: "InputField",
        label: "Dealer Code",
        type: "text",
        name: "dealerCode",
        placeholder: "Enter dealer code",
      },
      {
        component: "InputField",
        label: "Membership No.",
        type: "text",
        name: "membershipNo",
        placeholder: "Enter membership no.",
      },
      {
        component: "SelectField",
        label: "Membership Status",
        name: "membershipStatus",
        options: [
          { value: "1", label: "Credit" },
          { value: "2", label: "Debit" },
        ],
      },
      {
        component: "InputField",
        label: "Membership Fee",
        name: "membershipFee",
        type: "checkbox",
      },
    ],
  },
  {
    div: 2,
    data: [
      {
        component: "InputField",
        label: "Division",
        type: "text",
        name: "division",
        placeholder: "Enter division",
      },
      {
        component: "InputField",
        label: "Dealership Name",
        type: "text",
        name: "dealershipName",
        placeholder: "Enter dealership name",
      },
      {
        component: "InputField",
        label: "Location",
        name: "location",
        placeholder: "Enter location",
      },
      {
        component: "InputField",
        label: "DD No.",
        type: "text",
        name: "ddNo",
        placeholder: "Enter DD no.",
      },
    ],
  },
  {
    div: 3,
    data: [
      {
        component: "InputField",
        label: "Alternate Email ID",
        type: "email",
        name: "alternateEmailId",
        placeholder: "Enter alternate email ID",
      },
      {
        component: "InputField",
        label: "GSTIN",
        type: "text",
        name: "gstin",
        placeholder: "Enter GSTIN",
      },
      {
        component: "SelectField",
        label: "Dealership Status",
        name: "dealershipStatus",
        options: [
          { value: "1", label: "Active" },
          { value: "2", label: "Non Active" },
        ],
      },
      {
        component: "InputField",
        label: "MemberShip form",
        name: "membershipForm",
        type: "checkbox",
      },
    ],
  },
  {
    div: 4,
    data: [
      {
        component: "InputField",
        label: "Dealer Appointment Date",
        type: "text",
        name: "dealerAppointmentDate",
        placeholder: "Enter dealer appointment date",
      },
      {
        component: "InputField",
        label: "Membership Date",
        type: "date",
        name: "membershipDate",
        placeholder: "Enter membership date",
      },
      {
        component: "InputField",
        label: "Board Meeting (Members Ceasation) Date",
        name: "boardMeetingCeasationDate",
        type: "date",
        placeholder: "",
      },
      {
        component: "InputField",
        label: "DD Date",
        type: "date",
        name: "ddDate",
        placeholder: "Enter  date",
      },
    ],
  },
  {
    div: 5,
    data: [
      {
        component: "InputField",
        label: "Inoprative Date",
        type: "date",
        name: "inoprativeDate",
        placeholder: "Enter inoperative date",
      },
      {
        component: "InputField",
        label: "Ceasation Date",
        type: "date",
        name: "ceasationDate",
        placeholder: "Enter ceasation date",
      },
      {
        component: "InputField",
        label: "Board Meeting (Members Reinstate) Date",
        name: "boardMeetingReinstateDate",
        type: "date",
        placeholder: "",
      },
      {
        component: "InputField",
        label: "Others",
        name: "others",
        type: "checkbox",
      },
    ],
  },
];
