
import { Button, Modal, Table, TableColumnsType, TableProps, Tag } from "antd";

import { useAssignFacultyMutation, useGetAllCoursesQuery, useGetAllFacultiesQuery, } from "../../../redux/features/admin/courseManagement.api";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { TFaculty } from "../../../types/courseManagement.type";


interface DataType {
    key: string,
    name: string,
    code: string
}


const Courses = () => {
    const { data: courses, isFetching } = useGetAllCoursesQuery([]);
    console.log(courses);
    const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
        key: _id,
        name: title,
        code: `${prefix}${code}`

    }))
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Title',
            dataIndex: 'name',
        },
        {
            title: 'Code',
            dataIndex: 'code',
        },


        {
            title: 'Action',
            render: (item) => {
                return (<>
                    <FacultyModal facultyData ={item.key}></FacultyModal>
                </>)
            }
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {

    };
    return (
        <div>
            <Table<DataType>
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={false}
            />
        </div>
    );
};

export default Courses;



const FacultyModal = (facultyData:{facultyData:string}) => {

    const { data: faculties, } = useGetAllFacultiesQuery([]);
    const [assignFaculty] = useAssignFacultyMutation();
    console.log(faculties);
    const facultyOptions = faculties?.data?.map((faculty) => ({
        value: faculty._id,
        label: `${faculty.name.firstName} ${faculty?.name?.lastName}`,
    }))

    console.log(facultyData);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const onSubmit = async(data) =>{
        const updatedData = {
            id:facultyData.facultyData,
            data:data
        }
        // console.log(updatedData);
        const res = await assignFaculty(updatedData);
        console.log(res);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Assign Faculty
            </Button>
            <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel} footer= {null}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect mode="multiple" options={facultyOptions || []} name="faculties" label="Faculty"></PHSelect>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Modal>
        </>
    );
}