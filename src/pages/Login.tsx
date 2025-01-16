import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    const onSubmit = async (data: FieldValues) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        console.log(userInfo);
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        console.log(user);
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        navigate(`/${user.role}/dashboard`)
        toast('Successfully Login');
    };

    return (
        <Row justify={'center'} align={"middle"} style={{ height: "100vh", border: "1px solid black" }}>

            <PHForm onSubmit={onSubmit}  >
                <h1>Login</h1>
                <PHInput type='text' name='id' label='ID:'></PHInput>
                <PHInput type='text' name='password' label='Password:'></PHInput>
                <Button htmlType='submit'>Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;