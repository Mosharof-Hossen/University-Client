import React from 'react';
import { useGetallAcademicFacultyQuery } from '../../../redux/features/admin/academicManagement.api';

const AcademicFaculty = () => {
    const {data} = useGetallAcademicFacultyQuery(undefined);
    console.log(data);
    return (
        <div>
            AcademicFaculty
        </div>
    );
};

export default AcademicFaculty;