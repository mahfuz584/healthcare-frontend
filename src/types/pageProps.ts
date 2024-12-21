//home page props

//specialist component props
export interface TSpecialistObjProps {
  id: string;
  title: string;
  icon: string;
}
export interface TSpecialistProps {
  specialistData: TSpecialistObjProps[];
}

//top doctors component props
export interface TTOPDoctorObjProps {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: Array<any>;
  doctorSpecialties: Array<any>;
}

export interface TTopDoctorsProps {
  topDoctors: TTOPDoctorObjProps[];
}

//why choose us component props
export interface TChooseUsObjProps {
  id: number;
  title: string;
  description: string;
  img: string;
}
export interface TChooseUsProps {
  chooseUsContent: TChooseUsObjProps[];
}

//register page props
export interface TRegisterProps {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
}

export interface TSignInFormProps {
  email: string;
  password: string;
}
