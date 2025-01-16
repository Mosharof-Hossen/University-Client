import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: "A-0001",
            password: "12345"
        }
    });
    const onSubmit = async (data:FieldValues) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        console.log(user);
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        navigate(`/${user.role}/dashboard`)
        toast('Successfully Login');
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