import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../Schemas/academicDepartment.Schema";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { Button } from "antd";
import { useGetallAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicDepartment = () => {
    const { data: academicFaculty, isFetching } = useGetallAcademicFacultyQuery(undefined);
    if(isFetching){
        return <p>Loading.....</p>
    }

    const options = academicFaculty?.data?.map((faculty)=>({
        value:faculty._id,
        label: faculty.name
    }))
    console.log(options);
    // console.log(academicFaculty);
    const onSubmit = (data) => {
        console.log(data);
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