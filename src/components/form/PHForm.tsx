import { Form } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
}

const PHForm = ({ onSubmit, children }: TFormProps) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <Form
                style={{
                    border: "1px solid gray",
                    padding: "30px", borderRadius: "15px"
                }}
                layout='vertical'
                onFinish={methods.handleSubmit(onSubmit)}
            >
                {children}
            </Form>
        </FormProvider >
    );
};

export default PHForm;