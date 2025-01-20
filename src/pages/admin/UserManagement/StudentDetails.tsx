import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
    const {studentId} = useParams();
    return (
        <div>
            <h2>User Id is: {studentId}</h2>
        </div>
    );
};

export default StudentDetails;