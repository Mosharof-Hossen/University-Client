
import { Button, Dropdown, Space, Table, TableColumnsType, TableProps, Tag } from "antd";

import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";


interface DataType {
    key: string,
    name: string,
    status: string,
    startDate: string,
    endDate: string,
}

const items = [
    {
        label:"Upcoming",
        key:"UPCOMING"
    },
    {
        label:"Ongoing",
        key:"ONGOING"
    },
    {
        label:"Ended",
        key:"ENDED"
    },
]


const RegisteredSemesters = () => {
    const { data: registeredSemesters, isFetching } = useGetAllRegisteredSemestersQuery([]);
    console.log(registeredSemesters);
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
                console.log(item);
                return (<Tag>
                    <Dropdown menu={menuProps} placement="bottom" arrow>Update</Dropdown>
                </Tag>)
            }
        },
    ];
    

    const handleStatus = (data)=>{
        console.log(data);
    }

    const menuProps = {
        items,
        onClick:  handleStatus ,
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