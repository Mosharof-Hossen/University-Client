import { TAcademicDepartment } from "./academicManagement.type"

export type TStudent =  {
    _id: string
    id: string
    user: User
    name: Name
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloodGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: Guardian
    localGuardian: LocalGuardian
    profileImg: string
    admissionSemester: string
    academicDepartment: TAcademicDepartment
    academicFaculty: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    fullName: string
  }
  
  export interface User {
    _id: string
    id: string
    email: string
    needsPasswordChange: boolean
    role: string
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface Name {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export interface Guardian {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherOccupation: string
    motherContactNo: string
    _id: string
  }
  
  export interface LocalGuardian {
    name: string
    occupation: string
    contactNo: string
    address: string
    _id: string
  }
  
 
  
