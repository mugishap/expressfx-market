import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import LoginComponent from '../../components/Auth/LoginComponent'

const Login: React.FC<{}> = () => {
    return (
        <CommonComponent>
            <LoginComponent />
        </CommonComponent>
    )
}

export default Login