import PHForm from '../../../components/form/PHForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicFacultySchema } from '../../../Schemas/academicFaculty.Schema';
import PHInput from '../../../components/form/PHInput';
import { Button } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const CreateAcademicFaculty = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        try {
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
            <PHInput name='name' type='text' label='Name'></PHInput>
            <Button htmlType='submit'>Submit</Button>

        </PHForm>
    );
};

export default CreateAcademicFaculty;