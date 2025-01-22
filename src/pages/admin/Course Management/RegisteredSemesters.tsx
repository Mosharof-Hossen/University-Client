
import { Button, Dropdown, Space, Table, TableColumnsType, TableProps, Tag } from "antd";

import { useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { useState } from "react";


interface DataType {
    key: string,
    name: string,
    status: string,
    startDate: string,
    endDate: string,
}

const items = [
    {
        label: "Upcoming",
        key: "UPCOMING"
    },
    {
        label: "Ongoing",
        key: "ONGOING"
    },
    {
        label: "Ended",
        key: "ENDED"
    },
]


const RegisteredSemesters = () => {
    const [semesterId, setSemesterId] = useState("");
    const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation();
    const { data: registeredSemesters, isFetching } = useGetAllRegisteredSemestersQuery([]);
    const tableData = registeredSemesters?.data?.map(({ _id, academicSemester, status, startDate, endDate }) => ({
        key: _id, name: academicSemester.name, status,
        startDate: moment(new Date(startDate)).format("MMMM"),
        endDate: moment(new Date(endDate)).format("MMMM")

    }))
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (item) => {
                let color = "blue";
                if (item === "UPCOMING") {
                    color = "blue"
                }
                if (item === "ONGOING") {
                    color = "green"
                }
                if (item === "ENDED") {
                    color = "red"
                }

                return <Tag color={color}>{item}</Tag>
            }
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
        },

        {
            title: 'Action',
            render: (item) => {
                return (<>
                    <Dropdown menu={menuProps} placement="bottom" trigger={['click']} arrow>
                        <Button onClick={() => setSemesterId(item.key)}>Update</Button>
                    </Dropdown>
                </>)
            }
        },
    ];


    const handleStatusUpdate = (data) => {
        console.log("semesterId", semesterId);
        console.log("New status", data.key);
        const updateInfo = {
            id: semesterId,
            data:{
                status:data.key 
            }
        }
        console.log(updateInfo);
        updateRegisteredSemester(updateInfo)
    }

    const menuProps = {
        items,
        onClick: handleStatusUpdate,
    };
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

export default RegisteredSemesters;