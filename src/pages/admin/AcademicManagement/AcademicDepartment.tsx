import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    academicFaculty: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Department',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Academic Faculty',
        dataIndex: 'academicFaculty',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },

];

const AcademicDepartment = () => {
    const { data } = useGetAllAcademicDepartmentQuery(undefined);
    const tableData = data?.data?.map((row) => ({
        key: row._id,
        name: row.name,
        academicFaculty: row.academicFaculty.name
    }))

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    console.log(data);
    return (
        <Table<DataType>
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default AcademicDepartment;