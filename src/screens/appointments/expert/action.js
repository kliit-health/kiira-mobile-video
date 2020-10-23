import { GET_APPOINTMENTS, CANCEL_APPOINTMENT } from "../../../redux/types";

export const getAppointmentsList = data => ({
	type: GET_APPOINTMENTS,
	data,
});

export const cancelAppointment = data => ({
	type: CANCEL_APPOINTMENT,
	data,
});
