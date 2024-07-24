import { DateTime } from "luxon";

export const validateFormSubmission = () => {
    return true;
};

export const validateDirectoryData = (data, isSingle = false) => {
    // const requiredFields = ["constitution", "desigRelation", "title", "name", "qualification", "dob", "dom", "mobileNo", "emailId"];
    const requiredFields = ["constitution"];

    if (isSingle) {
        return requiredFields.every((field) => !!(data[field] && data[field].trim() !== ""))
    }

    return data.every((row) => {
        return requiredFields.every((field) => {
            return !!(row[field] && row[field].trim() !== "");
        })
    });
};

export const validateFamilyData = data => {
    const requiredFields = ["desigRelation", "title", "name", "qualification"];
    return data.every((row) => {
        return requiredFields.every((field) => {
            return !!(row[field] && row[field].trim() !== "");
        })
    });
};

export const dateFormatter = (str) => {
    if (!str) {
        return "";
    }
    try {
        // const date = new Date(str);
        // const year = date.getUTCFullYear();
        // const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
        // const day = String(date.getUTCDate()).padStart(2, '0');

        // return `${year}-${month}-${day}`;
        const date = DateTime.fromISO(str, { zone: 'utc' }).setZone("Asia/Kolkata");
        return date.toFormat('yyyy-MM-dd');
    } catch (error) {
        console.log(error)
        return "";
    }
}

export const transformFamilyDetails = (data = []) => {
    if (Array.isArray(data) && data.length) {
        return data.map((row, index) => {
            return {
                ...row,
                id: index,
                desigRelation: row.relation,
                bloodGroup: row.blood_group,
                mobileNo: row.mobile_no,
                emailId: row.email_id,
                resAdd: row.res_add_1,
                resPhone: row.res_phone,
                involmentInBusiness: row.involvement_in_buisness,
                since: row.since,
                status: row.fam_memeber_status,
                dob: dateFormatter(row.dob),
                dom: dateFormatter(row.dom)
            }
        })
    };
    return;
};

export const transformDirectoryData = (data = []) => {
    if (Array.isArray(data) && data.length) {
        return data.map((row) => {
            return {
                ...row,
                id: row.individual_sno,
                desigRelation: row.designation,
                bloodGroup: row.blood_group,
                mobileNo: row.mobile_no,
                emailId: row.email_id,
                resAdd: row.res_add_1,
                resPhone: row.res_phone,
                memberStatus: row.member_status,
                dob: dateFormatter(row.dob),
                dom: dateFormatter(row.dom),
                familyDetails: transformFamilyDetails(row?.familyDetails)
            }
        })
    };
    return [];
};