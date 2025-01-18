import { useGetallAcademicFacultyQuery } from '../../../redux/features/admin/academicManagement.api';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';


interface DataType {
    key: string;
    name: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Index',
        dataIndex: 'index',
    },
    {
        title: 'Faculty',
        dataIndex: 'name',
    },
];

const AcademicFaculty = () => {
    const { data,isFetching } = useGetallAcademicFacultyQuery(undefined);

    const tableData = data?.data?.map(({ _id, name }, i) => ({
        key: _id, index: i + 1, name
    }))

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    
    return (
        <Table<DataType>
            loading = {isFetching}
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
        />
    );
};

export default AcademicFaculty;