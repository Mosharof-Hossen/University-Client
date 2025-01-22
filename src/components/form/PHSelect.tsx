import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TSelectProps = {
    name: string;
    label?: string;
    options: { value: string; label: string }[],
    mode?: "multiple" | undefined;
}

const PHSelect = ({ name, mode, label, options }: TSelectProps) => {

    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        mode={mode}
                        size='large'
                        style={{ width: "100%" }}
                        {...field}
                        options={options}
                    />
                    {
                        error && <small style={{ color: "red" }}>{error.message}</small>
                    }
                </Form.Item>
            )}
        />

    );
};

export default PHSelect;