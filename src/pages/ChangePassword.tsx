import { Button, Row } from 'antd';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
import { useChangePasswordMutation } from '../redux/features/admin/userManagement';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const [changePassword] = useChangePasswordMutation();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const res = await changePassword(data);
        if (res?.data?.success) {
            dispatch(logout());
            navigate("/login")
        }
        console.log(res);
    }
    return (
        <Row justify={'center'} align={"middle"} style={{ height: "100vh", border: "1px solid black" }}>

            <PHForm onSubmit={onSubmit}  >
                <h1>Change password</h1>
                <PHInput type='text' name='oldPassword' label='Old Password'></PHInput>
                <PHInput type='text' name='newPassword' label='New Password'></PHInput>
                <Button htmlType='submit'>Change Password</Button>
            </PHForm>
        </Row>
    );
};

export default ChangePassword;