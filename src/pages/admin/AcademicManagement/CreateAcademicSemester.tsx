import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/academicSemester.Schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

// name: 'Autumn' | 'Summer' | 'Fall';
// code: '01' | '02' | '03';
// "year": "2025",
//     "startMonth": "January",
//         "endMonth": "July"

const currentYear = new Date().getFullYear();
const yearOption = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}))

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const name = semesterOptions[Number(data.name) - 1]?.label
        const semesterData = {
            name: name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        try {
            const res = await addAcademicSemester(semesterData) as TResponse;
            console.log(res);
            if (res?.error) {
                toast.error(res.error?.data.message)
            } else {
                toast.success(res.data?.message)
            }
        } catch (err) {
            toast.error("Something Went wrong...")
        }


        // console.log(semesterData);
    }


    return (
        <Flex justify="center" align="center">
            <Col span={12}>
                <PHForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(academicSemesterSchema)

                    }>
                    <PHSelect label={"Name"} name="name" options={semesterOptions} ></PHSelect>
                    <PHSelect label={"Year"} name="year" options={yearOption} ></PHSelect>
                    <PHSelect label={"Start Month"} name="startMonth" options={monthOptions} ></PHSelect>
                    <PHSelect label={"End Month"} name="endMonth" options={monthOptions} ></PHSelect>

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;