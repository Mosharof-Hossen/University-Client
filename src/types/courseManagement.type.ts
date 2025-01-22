import { TAcademicDepartment, TAcademicSemester } from "./academicManagement.type"

export type TRegisteredSemester = {
  _id: string
  academicSemester: TAcademicSemester
  status: string
  startDate: string
  endDate: string
  minCredit: number
  maxCredit: number
  createdAt: string
  updatedAt: string
}

export type TCourse = {
  _id: string
  title: string
  code: number
  credits: number
  prefix: string
  isDeleted: boolean
  preRequisiteCourse: PreRequisiteCourse[]
}

export interface PreRequisiteCourse {
  course: string
  isDeleted: boolean
}

export type TFaculty = {
  _id: string
  id: string
  user: string
  designation: string
  name: Name
  gender: string
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup: string
  presentAddress: string
  permanentAddress: string
  profileImage: string
  academicDepartment: TAcademicDepartment
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

export interface Name {
  firstName: string
  middleName: string
  lastName: string
  _id: string
}
