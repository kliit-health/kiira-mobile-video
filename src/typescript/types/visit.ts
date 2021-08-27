export type Visit = {
    complete: boolean;
    locked: boolean;
    plan: any;
    time: string;
    profile: string;
    prescription: boolean;
    dob: string;
    calendarID: string;
    createdAt: number;
    prepaid: boolean;
    expert: {
        firstName: string;
        profession: string;
        lastName: string;
        imageUrl: string;
        uid: string;
        rating: number;
    };
    insurance: string;
    id: number;
    gender: string;
    uid: string;
    email: string;
    appointmentType: {
        credits: number;
        duration: string;
        title: string;
        price: number;
        appointmentType: string;
        appointmentTypeID: string;
    };
    firstName: string;
    organizationId: string;
    reason: string;
    phoneNumber: any;
    pronouns: string;
    lastName: string;
};
