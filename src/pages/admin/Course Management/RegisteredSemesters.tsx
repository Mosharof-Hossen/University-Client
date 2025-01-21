
import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";
import { Link, NavLink } from "react-router-dom";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.api";


interface DataType {
    key: string,
    name: string,
    id: string,
    email: string,
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Status',
        dataIndex: 'status',
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
            console.log(item);
            return (<Space>
                <Button>Details</Button>
                <Button>Block</Button>
            </Space>)
        }
    },
];



const RegisteredSemesters = () => {
    const { data: registeredSemesters, isFetching } = useGetAllRegisteredSemestersQuery([]);
    console.log(registeredSemesters);
    const tableData = registeredSemesters?.data?.map(({ _id, academicSemester, status, startDate, endDate }) => ({
        key: _id, name: academicSemester.name, status, startDate, endDate

    }))

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