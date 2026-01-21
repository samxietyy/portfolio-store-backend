export declare const Role: {
    readonly CUSTOMER: "CUSTOMER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Status: {
    readonly CREATED: "CREATED";
    readonly SHIPPED: "SHIPPED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
    readonly RETURNED: "RETURNED";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const Size: {
    readonly XXS: "XXS";
    readonly XS: "XS";
    readonly S: "S";
    readonly M: "M";
    readonly L: "L";
    readonly XL: "XL";
    readonly XXL: "XXL";
    readonly XXXL: "XXXL";
};
export type Size = (typeof Size)[keyof typeof Size];
