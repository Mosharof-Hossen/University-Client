import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TSelectProps = {
    name: string;
    label?: string;
    options: { value: string; label: string }[]
}

const PHSelect = ({ name, label, options }: TSelectProps) => {

    return (
        <Controller
            name={name}
            render={({ field }) => (
                <Form.Item label={label}>
                    <Select
                        size='large'
                        style={{ width: "100%" }}
                        {...field}
                        options={options}
                    />
                </Form.Item>
            )}
        />

    );
};

export default PHSelect;