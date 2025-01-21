import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddRegistrationSemesterMutation } from "../../../redux/features/admin/courseManagement.api";
import { toast } from "sonner";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { TResponse } from "../../../types/global";


const statusOptions = [
    { value: 'UPCOMING', label: 'UPCOMING' },
    { value: 'ONGOING', label: 'ONGOING' },
    { value: 'ENDED', label: 'ENDED' }
];

const SemesterRegistration = () => {
    const [addRegistrationSemester] = useAddRegistrationSemesterMutation();
    const { data: semesters } = useGetAllSemestersQuery([{ name: "sort", value: "year" }]);
    const semesterOptions = semesters?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))
    console.log(semesters);


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const semesterRegistrationData = {
            ...data,
            maxCredit: Number(data.maxCredit),
            minCredit: Number(data.minCredit)
        }
        console.log(semesterRegistrationData);
        try {
            const res = await addRegistrationSemester(semesterRegistrationData) as TResponse<any>;
            console.log(res);
            if (res.error) {
                toast.error(res.error?.data.message)
            } else {
                toast.success("Academic Semester is created successfully")
            }
        } catch (err) {
            toast.error("Something Went wrong...")
        }


        console.log(semesterRegistrationData);
    }


    return (
        <Flex justify="center" align="center">
            <Col span={12}>
                <PHForm
                    onSubmit={onSubmit}
                >
                    <PHSelect label={"Academic Semester"} name="academicSemester" options={semesterOptions || []} ></PHSelect>
                    <PHSelect label={"Status"} name="status" options={statusOptions} ></PHSelect>

                    <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
                    <PHDatePicker name="endDate" label="End Date"></PHDatePicker>

                    <PHInput type="text" name="minCredit" label="Min. Credit"></PHInput>
                    <PHInput type="text" name="maxCredit" label="Max. Credit"></PHInput>

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default SemesterRegistration;