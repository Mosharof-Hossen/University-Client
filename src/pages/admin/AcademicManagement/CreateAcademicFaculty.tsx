import PHForm from '../../../components/form/PHForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicFacultySchema } from '../../../Schemas/academicFaculty.Schema';
import PHInput from '../../../components/form/PHInput';
import { Button } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/academicManagement.api';
import { TResponse } from '../../../types/global';
import { TAcademicFaculty } from '../../../types/academicManagement.type';
import { toast } from 'sonner';

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        try {
            const res = await addAcademicFaculty(data) as TResponse<TAcademicFaculty>;
            console.log(res);
            if (res.error) {
                toast.error(res.error.data.message)
            } else {
                toast.success("Academic Faculty created Successfully")
            }
        } catch (err) {
            toast.error("Something went wrong.")
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