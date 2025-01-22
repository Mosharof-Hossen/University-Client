import { Button, Col, Row } from 'antd';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHSelect from '../../../components/form/PHSelect';
import { useAddCourseMutation, useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.api';
import { toast } from 'sonner';

const CreateCourse = () => {
    const { data: courses } = useGetAllCoursesQuery(undefined);
    const [addCourse] = useAddCourseMutation();
    console.log(courses);
    const courseOptions = courses?.data?.map((course) => ({
        value: course._id, label: course.title
    }))


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const courseData = {
            ...data,
            code: Number(data.code),
            credits: Number(data.credits),
            preRequisiteCourse: data?.preRequisiteCourse?.map((courseId: string) => ({
                course: courseId,
            }))
        }

        console.log(courseData);
        const res = await addCourse(courseData);
        console.log(res);
        if (res.error) {
            toast.error("Something went wrong")
        } else {
            toast.success("Course Create Successfully")
        }
    }
    // {
    //     "title": "Basic HTML",
    //     "prefix": "HTML",
    //     "code": 108,
    //     "credits": 3,
    //     "preRequisiteCourse": [
    //         {
    //             "course": "675c699c1cc5f83cebd7296d"
    //         },
    //         {
    //             "course": "675c6a311cc5f83cebd72976"
    //         }
    //     ]
    // }
    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit} >
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="title" type="text" label="Title"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="prefix" type="text" label="Prefix"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="code" type="text" label="code"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput name="credits" type="text" label="Credits"></PHInput>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect mode='multiple' options={courseOptions || []} name='preRequisiteCourse' label='PreRequisite Course'></PHSelect>
                        </Col>
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateCourse;