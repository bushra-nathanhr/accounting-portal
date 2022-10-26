export const CONFIG_DETAIL = Object.freeze({
    // Attendance and Payroll
    INCLUDE_ATTENDANCE: false,
    IS_WORKING_DAYS_TYPE: false,
    WEEKEND_DAYS:[0,6], // 0 - Sunday, 1 - Monday, ---- 5 - Friday, 6 - Saturday
    PAYROLL_BASE_URL:'https://erp.nathanhr.com/payroll/',
    HOME_URL:'https://erp.nathanhr.com/',
    PAYSLIP_DOWNLOAD_BASE_URL:'https:/erp.nathanhr.com/payslips/user/download/',
    FINANCIAL_START_MONTH: 1, // 1 - Jan, 2 - Feb, ------- 12 - Dec
    ADD_CLAIMS_PAYROLL : false,

    // Common constants
    SYSTEM_EMAIL_ID : 'erp@nathanhr.com',
    GROUP_NAME : 'Nathan & Nathan',

    //leaves
    WORKING_TYPE_LEAVES: false,
    HOLIDAYS_INCLUDED: false,
    FULL_YEAR : '365',
    HALF_YEAR : '180'
})