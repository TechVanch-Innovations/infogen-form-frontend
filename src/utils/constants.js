const BASE_API_URL = "http://localhost:3080/api/v1/form-module";

const devURLS = {
    GET_DEALER_LIST_API: `/dealer.json`,
    GET_MEMBER_DATA_BY_DEALER_CODE: `/memberdetails.json`,
    GET_LIST_OF_CONSTANTS: `/list-constants.json`,
    POST_MEMBERSHIP_DATA: `/member-data.json`,
}

// toggle this false to simular behaviour in dev mode
const devEnv = process.env.NODE_ENV === "development" && false;

export const GET_DEALER_LIST_API = devEnv ? devURLS.GET_DEALER_LIST_API : `${BASE_API_URL}/dealers`;
export const GET_MEMBER_DATA_BY_DEALER_CODE = devEnv ? devURLS.GET_MEMBER_DATA_BY_DEALER_CODE : `${BASE_API_URL}/member-data`;
export const GET_LIST_OF_CONSTANTS = devEnv ? devURLS.GET_LIST_OF_CONSTANTS : `${BASE_API_URL}/list-constants`;
export const POST_MEMBERSHIP_DATA = devEnv ? devURLS.POST_MEMBERSHIP_DATA : `${BASE_API_URL}/member-data`;

export const familyInitialFormDataTemplate = {
    desigRelation: "",
    title: "",
    name: "",
    qualification: "",
    dob: "",
    dom: "",
    bloodGroup: "",
    mobileNo: "",
    emailId: "",
    resAdd: "",
    resPhone: "",
    involmentInBusiness: "",
    since: "",
    status: "",
};

export const directoryInitialFormDataTemplate = {
    id: 1,
    constitution: "",
    desigRelation: "",
    title: "",
    name: "",
    qualification: "",
    dob: "",
    dom: "",
    bloodGroup: "",
    mobileNo: "",
    emailId: "",
    resAdd: "",
    resPhone: "",
    memberStatus: "",
};