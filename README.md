# Run this Project
- `npm install`
- `npm start`

> Note: Please make sure backend is up and running on port 3080
> If backend is deployed somewhere, have to change the API_URL in `src > utils > constants.js`

# Infogen Workflow

Step 1: In the beginning, we have to hit the API to fetch the dealer array of object data.

Step 2: We have to fill in the data based on dealer code.

Step 3. The data the dealer will fill in those fields should be disabled for everyone.

Step 4. After fetching the dealer code, the user selects any dealer code so then we have to check whether the user is present in our database or not if the user is present then we will show his membership ID along with other data if not then we have to create a random Membership Number for the dealer.

Step 5. After filling in all the details, the user has to fill in at least a single row of the detail directory then only the user will be able to submit the forms.

Step 6. At the submitting and when the user is filling the form we have to check a few validations

*       *   The membership date should not be before the date of the dealer appointment date.
    *   Same for DD Date.

  

**Database related Tables**

*   For the Dealer code, we have to use `moeddealer`
*   To save the membership details we have to use `moedmember`
*   To save the membership directory we have to use `mdedmember_dtl`
*   To save the family details we have to use `mdedmember_dtl_family`
*   To extract the data for the Constitution we have to use `moed_constitution`
*   To extract the data for qualification we have to use `moed_qualification`
*   To extract the data for designation we have to use `moed_designation`

# API Documentation

`BASE API URL: <HOST>/api/v1/form-module`

  

## Fetch Constants

*   Constitutions
*   Qualifications
*   Designation

  

Endpoint: `<BASE_URL>/list-constants`

Method: `GET`

Function: `getFormBaseConstants`

Sample Response:

```elixir
{"constitutions":[{"code":1,"short_desc":"R","description":"PROPRIETOR","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":2,"short_desc":"T","description":"PARTNERSHIP","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":3,"short_desc":"L","description":"LIMITED","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":4,"short_desc":"V","description":"PRIVATE LIMITED","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":5,"short_desc":"P","description":"LLP","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":6,"short_desc":"H","description":"HUF","create_id":null,"create_date":null,"update_id":null,"update_date":null}],"qualitifcations":[{"code":1,"short_desc":"UM","description":"UNDER MATRICS","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":2,"short_desc":"MA","description":"10TH (MATRICS)","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":3,"short_desc":"IN","description":"12TH (INTERMEDIATE)","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":4,"short_desc":"GR","description":"GRADUATE","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":5,"short_desc":"PG","description":"POST GRADUATE","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":6,"short_desc":"DI","description":"DIPLOMA","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":7,"short_desc":"BT","description":"B.TECH","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":8,"short_desc":"MB","description":"MBA","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":9,"short_desc":"MC","description":"MCA","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":10,"short_desc":"OT","description":"OTHER","create_id":null,"create_date":null,"update_id":null,"update_date":null}],"designations":[{"code":1,"short_desc":"VP","description":"VIP","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":2,"short_desc":"PT","description":"PARTNER","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":3,"short_desc":"MP","description":"MANAGING PARTNER","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":4,"short_desc":"DR","description":"DIRECTOR","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":5,"short_desc":"MD","description":"MANAGING DIRECTOR","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":6,"short_desc":"CH","description":"CHAIRMAN","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":7,"short_desc":"KT","description":"KARTA","create_id":null,"create_date":null,"update_id":null,"update_date":null},{"code":8,"short_desc":"OT","description":"OTHERS","create_id":null,"create_date":null,"update_id":null,"update_date":null}]}
```

  

## Fetch Dealer List

Endpoint: `<BASE_URL>/dealers`

Method: `GET`

Function: `getDealerList`

Sample Response:

```elixir
[{"dealer_code":"M5300","division":"Division1","dealership_name":"Dealership One","phone":"1234567890","email":"email1@example.com","alt_email":"alt1@example.com","dlr_status":"N","location":"Location1","dlr_gstin":"GSTIN123456","dlr_active":"Y","dlr_appoint_dt":"2022-12-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2022-12-31T18:30:00.000Z","update_id":2,"update_date":"2023-12-31T18:30:00.000Z"},{"dealer_code":"M5400","division":"Division2","dealership_name":"Dealership Two","phone":"0987654321","email":"email2@example.com","alt_email":"alt2@example.com","dlr_status":"Y","location":"Location2","dlr_gstin":"GSTIN654321","dlr_active":"Y","dlr_appoint_dt":"2023-01-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-01-31T18:30:00.000Z","update_id":2,"update_date":"2024-01-31T18:30:00.000Z"},{"dealer_code":"M5500","division":"Division3","dealership_name":"Dealership Three","phone":"1234509876","email":"email3@example.com","alt_email":"alt3@example.com","dlr_status":"N","location":"Location3","dlr_gstin":"GSTIN789012","dlr_active":"Y","dlr_appoint_dt":"2023-02-28T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-02-28T18:30:00.000Z","update_id":2,"update_date":"2024-02-29T18:30:00.000Z"},{"dealer_code":"M5600","division":"Division4","dealership_name":"Dealership Four","phone":"0987612345","email":"email4@example.com","alt_email":"alt4@example.com","dlr_status":"Y","location":"Location4","dlr_gstin":"GSTIN321654","dlr_active":"Y","dlr_appoint_dt":"2023-03-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-03-31T18:30:00.000Z","update_id":2,"update_date":"2024-03-31T18:30:00.000Z"},{"dealer_code":"M5700","division":"Division5","dealership_name":"Dealership Five","phone":"1234987650","email":"email5@example.com","alt_email":"alt5@example.com","dlr_status":"N","location":"Location5","dlr_gstin":"GSTIN456789","dlr_active":"Y","dlr_appoint_dt":"2023-04-30T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-04-30T18:30:00.000Z","update_id":2,"update_date":"2024-04-30T18:30:00.000Z"},{"dealer_code":"M5800","division":"Division6","dealership_name":"Dealership Six","phone":"0987654329","email":"email6@example.com","alt_email":"alt6@example.com","dlr_status":"Y","location":"Location6","dlr_gstin":"GSTIN654987","dlr_active":"Y","dlr_appoint_dt":"2023-05-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-05-31T18:30:00.000Z","update_id":2,"update_date":"2024-05-31T18:30:00.000Z"},{"dealer_code":"M5900","division":"Division7","dealership_name":"Dealership Seven","phone":"1234560987","email":"email7@example.com","alt_email":"alt7@example.com","dlr_status":"N","location":"Location7","dlr_gstin":"GSTIN789654","dlr_active":"Y","dlr_appoint_dt":"2023-06-30T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-06-30T18:30:00.000Z","update_id":2,"update_date":"2024-06-30T18:30:00.000Z"},{"dealer_code":"M6000","division":"Division8","dealership_name":"Dealership Eight","phone":"0987123456","email":"email8@example.com","alt_email":"alt8@example.com","dlr_status":"Y","location":"Location8","dlr_gstin":"GSTIN321987","dlr_active":"Y","dlr_appoint_dt":"2023-07-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-07-31T18:30:00.000Z","update_id":2,"update_date":"2024-07-31T18:30:00.000Z"},{"dealer_code":"M6100","division":"Division9","dealership_name":"Dealership Nine","phone":"1234098765","email":"email9@example.com","alt_email":"alt9@example.com","dlr_status":"N","location":"Location9","dlr_gstin":"GSTIN654123","dlr_active":"Y","dlr_appoint_dt":"2023-08-31T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-08-31T18:30:00.000Z","update_id":2,"update_date":"2024-08-31T18:30:00.000Z"},{"dealer_code":"M6200","division":"Division10","dealership_name":"Dealership Ten","phone":"0987345612","email":"email10@example.com","alt_email":"alt10@example.com","dlr_status":"Y","location":"Location10","dlr_gstin":"GSTIN987321","dlr_active":"Y","dlr_appoint_dt":"2023-09-30T18:30:00.000Z","dlr_inoperative":"N","dlr_inoperative_dt":null,"dlr_cess_dt":null,"create_id":1,"create_date":"2023-09-30T18:30:00.000Z","update_id":2,"update_date":"2024-09-30T18:30:00.000Z"}]
```

  

## Fetch Member Data by Dealer Code

Endpoint: `<BASE_URL>/member-data?dealer_code=<code>`

Method: `GET`

Function: `fetchMembershipDetailsByDealerCode`

  

In this API, there are two possible scenarios:

1. Data exists for the associated dealer code
    1. The response will contain all the associated member details
    ```json
    {
      "type": "found",
      "memberData": {},
      "directory": [
        {
          ...directoryData,
          familyDetails: []
        }
      ]
    }
    ```
2. Data doesn't exist
    *   In that case, the backend will generate a sequential `membership_no` and will return the same, so we can show it in the form section.
    *   Sample response:
    ```haskell
    {
      "type": "created",
      "membershipNo": "<integer>"
    }
    ```

  

## Add/Edit Member Data

Endpoint: `<BASE_URL>/member-data?dealer_code=<code>`

Method: `POST`

Function: `postMembershipDetails`

  

**Request:**

```plain
{
  membership: {},
  directory: [
    {
      ...directoryData,
      familyDetails: []
    },
    ...more rows
  ]
}
```

Sample Payload:

```elixir
{"membership":{"dealerInoperative":"N","dealerCode":"M5300","membershipStatus":"N","division":"Division1","dealershipName":"Dealership One","location":"Location1","alternateEmailId":"email1@example.com","gstin":"GSTIN123456","dealershipStatus":"N","dealershipActive":"Y","dealerAppointmentDate":"2022-12-31T18:30:00.000Z","inoprativeDate":null,"ceasationDate":null,"membershipNo":3,"membershipFee":false,"ddNo":"DD no oooooo","membershipForm":true,"membershipDate":"1198-03-31","boardMeetingCeasationDate":"1998-11-27","ddDate":"1000-09-27","boardMeetingReinstateDate":"1998-03-31","other":false},"directory":[{"individual_sno":3,"member_no":3,"constitution":"1","designation":"2","title":"mr","name":"Rahul","qualification":"2","dob":"1994-04-05","dom":"1909-04-05","blood_group":"A+","mobile_no":"95828364444","email_id":"rahul@techvanch.com","res_add_1":null,"res_add_2":null,"res_add_3":null,"res_add_4":null,"res_city":null,"res_phone":null,"member_status":"Y","create_id":null,"create_date":null,"update_id":null,"update_date":null,"familyDetails":[{"family_member_sno":25,"member_no":3,"relation":"2","individual_sno":3,"title":"mr","name":"Rahul","qualification":"2","dob":"","dom":"","blood_group":null,"mobile_no":"09582836414","email_id":"rahulgoyal8312@gmail.com","res_add_1":"1/11464A Street-4 Subhash park extn.","res_add_2":null,"res_add_3":null,"res_add_4":null,"res_city":null,"res_phone":null,"involvement_in_buisness":"H","since":"1998","fam_memeber_status":null,"create_id":null,"create_date":null,"update_id":null,"update_date":null,"id":0,"desigRelation":"2","bloodGroup":null,"mobileNo":"09582836414","emailId":"rahulgoyal8312@gmail.com","resAdd":"1/11464A Street-4 Subhash park extn.","resPhone":null,"involmentInBusiness":"H","status":null}],"id":3,"desigRelation":"2","bloodGroup":"A+","mobileNo":"95828364444","emailId":"rahul@techvanch.com","resAdd":null,"resPhone":null,"memberStatus":"Y"},{"individual_sno":4,"member_no":3,"constitution":"2","designation":"2","title":"mr","name":"Sid","qualification":"4","dob":"1994-09-01","dom":"1994-09-01","blood_group":"B+","mobile_no":"9999999999","email_id":"sid@techvanch.com","res_add_1":null,"res_add_2":null,"res_add_3":null,"res_add_4":null,"res_city":null,"res_phone":null,"member_status":"N","create_id":null,"create_date":null,"update_id":null,"update_date":null,"id":4,"desigRelation":"2","bloodGroup":"B+","mobileNo":"9999999999","emailId":"sid@techvanch.com","resAdd":null,"resPhone":null,"memberStatus":"N"}]}
```

  

**Response:**

Note: Similar structure to that of GET Member Data API by Dealer code

```json
{
    "memberData": {
        "member_no": 3,
        "division": "Division1",
        "member_status": "P",
        "dlr_name": "Dealership One",
        "dlr_active": "Y",
        "member_active": "N",
        "dlr_gstin": "GSTIN123456",
        "dlr_email": null,
        "dlr_alt_email": "email1@example.com",
        "member_date": "1198-03-30T18:06:32.000Z",
        "member_board_appnt_date": "2022-12-30T18:30:00.000Z",
        "member_board_cease_date": "1998-11-26T18:30:00.000Z",
        "member_board_reinstate": "1998-03-30T18:30:00.000Z",
        "dlr_inoperative": "N",
        "membership_fee": "N",
        "member_form": "Y",
        "other": "N",
        "pay_instr_no": "DD no oooooo",
        "pay_instr_date": "1000-09-26T18:06:32.000Z",
        "create_id": null,
        "create_date": null,
        "update_id": null,
        "update_date": null,
        "dealer_code": "M5300"
    },
    "directory": [
        {
            "individual_sno": 3,
            "member_no": 3,
            "constitution": "1",
            "designation": "2",
            "title": "mr",
            "name": "Rahul",
            "qualification": "2",
            "dob": "1994-04-04T18:30:00.000Z",
            "dom": "1909-04-04T18:30:00.000Z",
            "blood_group": "A+",
            "mobile_no": "95828364444",
            "email_id": "rahul@techvanch.com",
            "res_add_1": null,
            "res_add_2": null,
            "res_add_3": null,
            "res_add_4": null,
            "res_city": null,
            "res_phone": null,
            "member_status": "Y",
            "create_id": null,
            "create_date": null,
            "update_id": null,
            "update_date": null,
            "familyDetails": [
                {
                    "family_member_sno": 27,
                    "member_no": 3,
                    "relation": "2",
                    "individual_sno": 3,
                    "title": "mr",
                    "name": "Rahul",
                    "qualification": "2",
                    "dob": null,
                    "dom": null,
                    "blood_group": null,
                    "mobile_no": "09582836414",
                    "email_id": "rahulgoyal8312@gmail.com",
                    "res_add_1": "1/11464A Street-4 Subhash park extn.",
                    "res_add_2": null,
                    "res_add_3": null,
                    "res_add_4": null,
                    "res_city": null,
                    "res_phone": null,
                    "involvement_in_buisness": "H",
                    "since": "1998",
                    "fam_memeber_status": null,
                    "create_id": null,
                    "create_date": null,
                    "update_id": null,
                    "update_date": null
                }
            ]
        },
        {
            "individual_sno": 4,
            "member_no": 3,
            "constitution": "2",
            "designation": "2",
            "title": "mr",
            "name": "Sid",
            "qualification": "4",
            "dob": "1994-08-31T18:30:00.000Z",
            "dom": "1994-08-31T18:30:00.000Z",
            "blood_group": "B+",
            "mobile_no": "9999999999",
            "email_id": "sid@techvanch.com",
            "res_add_1": null,
            "res_add_2": null,
            "res_add_3": null,
            "res_add_4": null,
            "res_city": null,
            "res_phone": null,
            "member_status": "N",
            "create_id": null,
            "create_date": null,
            "update_id": null,
            "update_date": null
        }
    ]
}
```

# DB Queries

**Few changes in DB queries:**

  

> Note: May have to adjust queries a little bit but this is an overview of schema adjustment  
> May have to increase limits of varchar a little in order to adjust the field values.

  

1. `moedmember`
    1. Add `member_no` as primary auto-increment key
    2. Add `dealer_code` as foreign key

```sql
-- Create moedmember table with member_no and dealer_code
CREATE TABLE IF NOT EXISTS integral.moedmember -- for member form
(
    member_no serial PRIMARY KEY,
    dealer_code integer NOT NULL, -- Assuming dealer_code is integer and already exists
    division character varying(10) COLLATE pg_catalog."default",
    member_status character varying(1) COLLATE pg_catalog."default",
    dlr_name character varying(100) COLLATE pg_catalog."default",
    dlr_active character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    member_active character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    dlr_gstin character varying(20) COLLATE pg_catalog."default",
    dlr_email character varying(100) COLLATE pg_catalog."default",
    dlr_alt_email character varying(100) COLLATE pg_catalog."default",
    member_date date,
    member_board_appnt_date date,
    member_board_cease_date date,
    member_board_reinstate date,
    dlr_inoperative character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    membership_fee character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    member_form character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    other character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    pay_instr_no character varying(20) COLLATE pg_catalog."default",
    pay_instr_date date,
    create_id smallint,
    create_date date,
    update_id smallint,
    update_date date,
    CONSTRAINT moedmember_member_status_check CHECK (member_status::text = ANY (ARRAY['P'::character varying::text, 'C'::character varying::text, 'O'::character varying::text])),
    CONSTRAINT moedmember_dealer_code_fkey FOREIGN KEY (dealer_code)
        REFERENCES integral.moeddealer (dealer_code) -- Make sure the dealers table and dealer_code column exist
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
```

2. `mdedmember_dtl`
    1. Add `member_no` as foreign key
    2. Add `individual_sno` as primary key and auto increment
    3. Increase `varchar` limit of `title`

```sql
-- Create mdedmember_dtl table with individual_sno as an auto-incrementing primary key
CREATE TABLE IF NOT EXISTS mdedmember_dtl -- for member detail section / block
(
    individual_sno serial PRIMARY KEY,
    member_no integer NOT NULL,
    constitution character varying(1) COLLATE pg_catalog."default",
    designation character varying(2) COLLATE pg_catalog."default",
    title character varying(5) COLLATE pg_catalog."default",
    name character varying(100) COLLATE pg_catalog."default",
    qualification character varying(2) COLLATE pg_catalog."default",
    dob date,
    dom date,
    blood_group character varying(3) COLLATE pg_catalog."default",
    mobile_no character varying(20) COLLATE pg_catalog."default",
    email_id character varying(100) COLLATE pg_catalog."default",
    res_add_1 character varying(60) COLLATE pg_catalog."default",
    res_add_2 character varying(60) COLLATE pg_catalog."default",
    res_add_3 character varying(60) COLLATE pg_catalog."default",
    res_add_4 character varying(60) COLLATE pg_catalog."default",
    res_city bigint,
    res_phone character varying(20) COLLATE pg_catalog."default",
    member_status character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    create_id smallint,
    create_date date,
    update_id smallint,
    update_date date,
    CONSTRAINT mdedmember_dtl_member_no_fkey FOREIGN KEY (member_no)
        REFERENCES integral.moedmember (member_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
```

3. `mdedmember_dtl_family`
    1. Add `family_member_sno` as primary key and auto increment
    2. Add `member_no` as foreign key
    3. Add `individual_sno` as foreign key
    4. Increase `varchar` limit of `title`

  

```sql
-- Create mdedmember_dtl_family table with member_no and individual_sno as foreign keys
CREATE TABLE IF NOT EXISTS mdedmember_dtl_family -- for member_detail family section/block
(
    family_member_sno serial PRIMARY KEY,
    member_no integer NOT NULL,
    relation character varying(2) COLLATE pg_catalog."default",
    individual_sno integer NOT NULL,
    title character varying(5) COLLATE pg_catalog."default",
    name character varying(100) COLLATE pg_catalog."default",
    qualification character varying(2) COLLATE pg_catalog."default",
    dob date,
    dom date,
    blood_group character varying(3) COLLATE pg_catalog."default",
    mobile_no character varying(20) COLLATE pg_catalog."default",
    email_id character varying(100) COLLATE pg_catalog."default",
    res_add_1 character varying(60) COLLATE pg_catalog."default",
    res_add_2 character varying(60) COLLATE pg_catalog."default",
    res_add_3 character varying(60) COLLATE pg_catalog."default",
    res_add_4 character varying(60) COLLATE pg_catalog."default",
    res_city integer,
    res_phone character varying(20) COLLATE pg_catalog."default",
    involvement_in_buisness character varying(2) COLLATE pg_catalog."default",
    since character varying(4) COLLATE pg_catalog."default",
    fam_memeber_status character varying(2) COLLATE pg_catalog."default",
    create_id smallint,
    create_date date,
    update_id smallint,
    update_date date,
    CONSTRAINT mdedmember_dtl_family_involvement_in_buisness_check CHECK (involvement_in_buisness::text = ANY (ARRAY['H'::character varying, 'L'::character varying]::text[])),
    CONSTRAINT mdedmember_dtl_family_member_no_fkey FOREIGN KEY (member_no)
        REFERENCES integral.moedmember (member_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT mdedmember_dtl_family_individual_sno_fkey FOREIGN KEY (individual_sno)
        REFERENCES mdedmember_dtl (individual_sno) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
```

# Frontend Workflow

### **Components**

1. Title
2. Divider
3. Button
4. Form Layout
5. Generic Components
    1. Input
    2. Select
    3. Loader
6. Membership Details
7. Member Directory
8. Family Details

  

### **Pages**

In this, we have only one page and only one form.

*   Form

  

### **Workflow**

*   Initially, when the application is loaded two APIs are triggered `dealer` and `constants` to fetch the list of dealers and constants, including qualification, constitution and designation.
    *   We fetch constants to pre-fill the select dropdowns in the UI.
        *   We do this to ensure minimum API is being fired.
        *   This adds the flexibility to add more constants in the API to ensure dynamic usage.
*   Initially, all forms are in an empty state.
*   The user must select the dealer code to proceed further.
*   Once, the dealer code is selected, the following things happen:
    *   API is fired to fetch the member data of the selected dealer
    *   Two scenarios
        *   A: Data exists
        *   B: Data doesn't exist

  

**In case of event A:**

*       *   All the forms are pre-filled with the fetched data from the backend.
    *   We can make modifications and then save & submit the form so that it will be updated on the backend.

**In case of event B:**

*       *   A randomly generated membership number is provided to the frontend
    *   This generated membership number may change upon successful submission
        *   Why?
            *   Because there is a possibility that the same page might be opened in another system and may submit the form before the current system that occupies that randomly generated membership number.

  

### Validations:

*   Membership form -
    *   All user input fields are required
    *   Membership date should be greater than Dealer Appointment Date
*   Directory form -
    *   The following fields are mandatory
        *   `Constitution`
        *   `Desig/Relation`
        *   `Title`
        *   `Name`
        *   `Qualification`
        *   `DOB`
        *   `DOM`
    *   The User can add family data once these fields are filled and then click on the `click on` button.
    *   The User can add more directory rows if all the existing directory rows are completed.
*   Family Details form -
    *   The following fields are mandatory
        *   `Desig/Relation`
        *   `Title`
        *   `Name`
        *   `Qualification`
    *   The User can add more family rows if all the existing family rows are filled and completed.
    *   To save the family details, the user must click on the `Save` button.
    *   If the user wants to close the family details box, click on the `close` button.

  

### Additional Packages used

```json
{    
    "classnames": "^2.5.1",
    "luxon": "^3.4.4",
    "react-hot-toast": "^2.4.1",
    "sass": "^1.77.8",
}
```

  

1. `classNames` : [https://www.npmjs.com/package/classnames](https://www.npmjs.com/package/classnames)
2. `luxon` : [https://www.npmjs.com/package/luxon](https://www.npmjs.com/package/luxon)
3. `react-hot-toast` : [https://react-hot-toast.com/](https://react-hot-toast.com/)