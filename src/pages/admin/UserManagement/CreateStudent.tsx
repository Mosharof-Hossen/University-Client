import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodOptions, genderOptions } from "./UserManagementConstant";
import { useGetAllAcademicDepartmentQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement";
import { toast } from "sonner";

const studentData = {
    password: '12345',
    student: {
        id: 'ST78901fad8',
        name: { firstName: 'Forid', middleName: 'Ali', lastName: 'Sheikh' },
        gender: 'male',
        dateOfBirth: '1998-02-25',
        bloodGroup: 'AB+',


        email: 'student1@gmail.com',
        contactNo: '+8801300123456',
        emergencyContactNo: '+8801400123456',
        presentAddress: 'Flat 3A, Road 5, Banani, Dhaka',
        permanentAddress: 'Village 45, Upazila, Khulna',


        guardian: {
            fatherName: 'Akbar Sheikh',
            fatherOccupation: 'Farmer',
            fatherContactNo: '+8801500123456',
            motherName: 'Rokeya Banu',
            motherOccupation: 'Tailor',
            motherContactNo: '+8801600123456'
        },
        localGuardian: {
            name: 'Mahmud Hossain',
            occupation: 'Businessman',
            contactNo: '+8801700123456',
            address: 'Plot 45, Block B, Baridhara, Dhaka'
        },

        admissionSemester: '67740646c59fb31f556fecbd',
        academicDepartment: '6773fc74c2f17420753f6c01',
        profileImg: 'https://example.com/profiles/hasan.jpg'
    }
}


const CreateStudent = () => {
    const [addStudent, { error }] = useAddStudentMutation();
    const { data: sData, } = useGetAllSemestersQuery(undefined);
    const { data: dData, } = useGetAllAcademicDepartmentQuery(undefined);
    console.log({ error });
    const semesterOptions = sData?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))
    const departmentOptions = dData?.data?.map((item) => ({
        value: item._id,
        label: `${item.name}`
    }))

    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        const studentData = {
            password: "123456",
            student: data
        }
        console.log( data );
        const formData = new FormData();
        formData.append("data", JSON.stringify(studentData));
        formData.append("file", data.profileImg);

        const res = await addStudent(formData);
        if(res.error){
            toast.error(res.error.messsage);
        }else(
            toast.success("Student Create Successfully")
        )
        
    }
    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit} >
                    <Divider>Personal Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="name.firstName" type="text" label="First Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="name.middleName" type="text" label="Middle Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="name.lastName" type="text" label="Last Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect options={genderOptions} name="gender" label="Gender"></PHSelect>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="dateOfBirth" type="date" label="Date of Birth"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect options={bloodOptions} name="bloodGroup" label="Blood Group"></PHSelect>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name="profileImg"
                                render={({ field: { onChange, value, ...field } }) => (
                                    <Form.Item label="Picture">
                                        <Input
                                            type="file"
                                            value={value?.fileName}
                                            {...field}
                                            onChange={(e)=>onChange(e.target.files?.[0])}
                                        />
                                    </Form.Item>
                                )}
                            >

                            </Controller>
                        </Col>
                    </Row>

                    <Divider>Contact Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="email" type="text" label="Email"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="contactNo" type="text" label="Contact No"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="emergencyContactNo" type="text" label="Emergency Contact No"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="presentAddress" type="text" label="Present Address"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="permanentAddress" type="text" label="Permanent Address"></PHInput>
                        </Col>
                    </Row>

                    <Divider>Guardian Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.fatherName" type="text" label="Father Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.fatherOccupation" type="text" label="Father Occupation"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.fatherContactNo" type="text" label="Father ContactNo"></PHInput>
                        </Col>

                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.motherName" type="text" label="Mother Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.motherOccupation" type="text" label="Mother Occupation"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="guardian.motherContactNo" type="text" label="Mother ContactNo"></PHInput>
                        </Col>

                    </Row>

                    <Divider>Local Guardian Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="localGuardian.name" type="text" label="Name"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="localGuardian.occupation" type="text" label="Occupation"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="localGuardian.contactNo" type="text" label="ContactNo"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="localGuardian.address" type="text" label="Address"></PHInput>
                        </Col>


                    </Row>

                    <Divider>Academic Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect name="admissionSemester" label="Academic Semester" options={semesterOptions || []}></PHSelect>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect name="academicDepartment" label="Academic Department" options={departmentOptions || []}></PHSelect>
                        </Col>

                    </Row>


                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;