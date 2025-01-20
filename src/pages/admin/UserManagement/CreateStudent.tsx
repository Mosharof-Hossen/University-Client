import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodOptions, genderOptions } from "./UserManagementConstant";

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
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        // const formData = new FormData();
        // formData.append("data", JSON.stringify(data));
        // console.log(Object.fromEntries(formData));
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
                    </Row>


                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;