import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/Course Management/Courses";
import CreateCourse from "../pages/admin/Course Management/CreateCourse";
import OfferCourse from "../pages/admin/Course Management/OfferCourse";
import OfferedCourses from "../pages/admin/Course Management/OfferedCourses";
import RegisteredSemesters from "../pages/admin/Course Management/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/Course Management/SemesterRegistration";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import StudentDataTable from "../pages/admin/UserManagement/StudentDataTable";
import StudentDetails from "../pages/admin/UserManagement/StudentDetails";




export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester></CreateAcademicSemester>
            },
            {
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty></CreateAcademicFaculty>
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty></AcademicFaculty>
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment></CreateAcademicDepartment>
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment></AcademicDepartment>
            },
        ]
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent></CreateStudent>
            },
            {
                name: "All Students",
                path: "all-student",
                element: <StudentDataTable></StudentDataTable>
            },
            {
                path: "student-details/:studentId",
                element: <StudentDetails></StudentDetails>
            },
        ]
    },
    {
        name: "Course Management",
        children: [
            {
                name: "Semester Registration",
                path: "semester-registration",
                element: <SemesterRegistration></SemesterRegistration>
            },
            {
                name: "Registered Semester",
                path: "registered-semester",
                element: <RegisteredSemesters></RegisteredSemesters>
            },
            {
                name: "Create Course",
                path: "create-course",
                element: <CreateCourse></CreateCourse>
            },
            {
                name: "Courses",
                path: "courses",
                element: <Courses></Courses>
            },
            {
                name: "Offer Course",
                path: "offer-course",
                element: <OfferCourse></OfferCourse>
            },
            {
                name: "Offered Courses",
                path: "offered-courses",
                element: <OfferedCourses></OfferedCourses>
            },
        ]
    }
]




