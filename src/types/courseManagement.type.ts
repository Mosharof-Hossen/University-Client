import { TAcademicSemester } from "./academicManagement.type"

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

export type TCourse =  {
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