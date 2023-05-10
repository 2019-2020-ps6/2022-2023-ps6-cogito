import { Patient } from "./patient.model";

export interface GroupPractice {
    id: number;
    username: string;
    groupName: string;
    patientList: Patient[];
}