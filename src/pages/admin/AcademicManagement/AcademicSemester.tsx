import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";

interface DataType {
    key: string,
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
                text: 'Autumn',
                value: 'Autumn',
            },
            {
                text: 'Summer',
                value: 'Summer',
            },
            {
                text: 'Fall',
                value: 'Fall',
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
    const [params, setParams] = useState<TQueryParams[]>([]);
    const { data: semesters, isFetching } = useGetAllSemestersQuery(params);
    const tableData = semesters?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key: _id, name, startMonth, endMonth, year
    }))


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

export default AcademicSemester;