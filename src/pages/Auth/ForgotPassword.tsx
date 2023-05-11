import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import ForgotPasswordComponent from '../../components/Auth/ForgotPasswordComponent'

const ForgotPassword: React.FC<{}> = () => {
    return (
        <CommonComponent>
            <ForgotPasswordComponent />
        </CommonComponent>
    )
}

export default ForgotPassword