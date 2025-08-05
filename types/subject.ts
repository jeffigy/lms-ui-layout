type SubjectStatus = "Ongoing" | "Completed" | "Pending" | "Cancelled"; // extend as needed

export type SubjectType = {
  id: number;
  subject_name: string;
  subject_photo: string;
  subject_description: string;
  is_coil: boolean;
  is_hali: boolean;
  max_number_of_enrollees: number | null;
  number_of_enrollees: number;
  duration: string;
  industry_partners: string;
  highlight: string;
  status: SubjectStatus;
};
