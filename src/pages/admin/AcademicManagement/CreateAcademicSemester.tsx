import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";

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
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = semesterOptions[Number(data.name) - 1].label
        const semesterData = {
            name: name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        console.log(semesterData);
    }

    return (
        <Flex justify="center" align="center">
            <Col span={12}>
                <PHForm onSubmit={onSubmit}>
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