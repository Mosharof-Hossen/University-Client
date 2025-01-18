import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../Schemas/academicDepartment.Schema";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { Button } from "antd";
import { useAddAcademicDepartmentMutation, useGetallAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

const CreateAcademicDepartment = () => {
    const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
    const { data: academicFaculty, isFetching } = useGetallAcademicFacultyQuery(undefined);
    if (isFetching) {
        return <p>Loading.....</p>
    }

    const options = academicFaculty?.data?.map((faculty) => ({
        value: faculty._id,
        label: faculty.name
    }))
    console.log(options);
    // console.log(academicFaculty);
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        
        try {
            const res = await addAcademicDepartment(data) as TResponse<TAcademicFaculty>;
            console.log(res);
            if(res.error){
                toast.error(res.error.data.message)
            }else{
                toast.success("Department Created Successfully")
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
            <PHInput name="name" type="text" label="Department Name"></PHInput>
            <PHSelect name="academicFaculty" label="Academic Faculty" options={options || []}></PHSelect>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
    );
};

export default CreateAcademicDepartment;