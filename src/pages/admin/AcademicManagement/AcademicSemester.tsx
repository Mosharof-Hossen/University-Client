import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

interface DataType {
    _id: string,
    name: string,
    startMonth: string,
    endMonth: string,
    year: string
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim Red',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
    },
    {
        title: 'Year',
        dataIndex: 'year',
        defaultSortOrder: 'descend',
        sorter: (a, b) => Number(a.year) - Number(b.year),
    },
    {
        title: 'Start Month',
        dataIndex: 'startMonth',
    },
    {
        title: 'End Month',
        dataIndex: 'endMonth',

    },
];



const AcademicSemester = () => {

    const { data: semesters } = useGetAllSemestersQuery(undefined);
    console.log(semesters);
    const tableData = semesters?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key:_id, name, startMonth, endMonth, year
    }))


    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Table<DataType>
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default AcademicSemester;