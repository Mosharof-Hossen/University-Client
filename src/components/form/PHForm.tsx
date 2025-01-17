import { Form } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
    resolver: any;
}

const PHForm = ({ onSubmit, children, resolver }: TFormProps) => {
    const methods = useForm({resolver});
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