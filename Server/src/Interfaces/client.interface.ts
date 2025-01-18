export interface Client {
    companyName: string;
    email: string;
    contactNumber: string;
    schedule: {
        date: string;
        time: string;
    };
    title: string;
    description: string;
}
