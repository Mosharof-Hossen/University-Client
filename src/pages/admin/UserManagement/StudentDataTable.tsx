import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";
import { Link, NavLink } from "react-router-dom";


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
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Roll No.',
        dataIndex: 'id',
    },
    {
        title: 'Action',
        render: (item) => {
            console.log(item);
            return (<Space>
                <Link to={`/admin/student-details/${item.key}`}>
                    <Button>Update</Button>
                </Link>
                <Button>Details</Button>
                <Button>Block</Button>
            </Space>)
        }
    },
];



const StudentDataTable = () => {
    const [params, setParams] = useState<TQueryParams[]>([]);
    const [page, setPage] = useState<number>(1)
    const { data: students, isFetching } = useGetAllStudentsQuery([
        { name: "limit", value: 10 },
        { name: "page", value: page },
        { name: "sort", value: "id" },

        ...params]);
    const tableData = students?.data?.map(({ _id, fullName, id, email, }) => ({
        key: _id, name: fullName, id, email

    }))
    const meta = students?.meta;
    console.log(students);

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', { filters }, { extra });
        if (extra.action === "filter") {
            const queryParams: TQueryParams[] = [];

            filters.name?.forEach((item) => {
                queryParams.push({ name: "name", value: item });
            })

            setParams(queryParams)
        }
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
            <Pagination

                pageSize={meta?.limit}
                total={meta?.total}
                onChange={(value) => setPage(value)}
                align="center"
                style={{ marginTop: "20px" }}
            ></Pagination>
        </div>
    );
};

export default StudentDataTable;