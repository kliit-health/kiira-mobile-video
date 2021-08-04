import * as SVG from "~/svgs";

export const newUser = {
    title: 'Schedule your free 15 minute health assessment!',
    button: 'Yes, let\'s do it'
}

export const pending = {
    title: 'Health Assessment',
    items: [
        {
            title: "Fill out your health history in advance"
        },
        {
            title: "Select Appointments to meet with \nDr. Fraser"
        }
    ]
};

export const complete = {
    title: 'Select Get Treatment to schedule your visit for:',
    icons: [
        {
            title: "Mental \n Health",
            Icon: SVG.MentalHealth
        },
        {
            title: "Primary \n Care",
            Icon: SVG.PrimaryCare
        },
        {
            title: "Women\'s \n Health",
            Icon: SVG.WomensHealth
        }
    ]
};