import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
    const [login, { data, error }] = useLoginMutation();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: "A-0001",
            password: "12345"
        }
    });
    const onSubmit = async (data) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap();
        console.log(res);
    };
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="id" {...register("id", { required: true })} />
            </div>
            <div>
                <input type="password" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />
            </div>

            <Button htmlType='submit'>Login</Button>
        </form>
    );
};

export default Login;