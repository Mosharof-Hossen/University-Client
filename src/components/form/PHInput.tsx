import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
    type: string;
    name: string;
    label?: string
}

const PHInput = ({ name, type, label }: TInputProps) => {
    return (
        <div style={{marginBottom:"20px"}}>
            <Controller
                name={name}
                render={({ field }) => (
                    <Form.Item label={label}>
                        <Input {...field} type={type} id={name} size='large' ></Input>
                    </Form.Item>
                )}
            />
        </div>
    );
};

export default PHInput;