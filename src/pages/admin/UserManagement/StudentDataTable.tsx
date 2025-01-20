import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";


interface DataType {
    key: string,
    name: string,
    id: string,
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Roll No.',
        dataIndex: 'id',
    },
    {
        title: 'Action',
        render:()=>(
            <Space>
                <Button>Update</Button>
                <Button>Details</Button>
                <Button>Block</Button>
            </Space>
        )
    },
];



const StudentDataTable = () => {
    const [params, setParams] = useState<TQueryParams[]>([]);
    const { data: students, isFetching } = useGetAllStudentsQuery(params);
    const tableData = students?.data?.map(({ _id, fullName,id}) => ({
        key: _id, name:fullName,id, 

    }))
    console.log(students);

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', { filters }, { extra });
        if (extra.action === "filter") {
            const queryParams:TQueryParams[] = [];

            filters.name?.forEach((item) => {
                queryParams.push({ name: "name", value: item });
            })

            setParams(queryParams)
        }
    };
    return (
        <Table<DataType>
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default StudentDataTable;