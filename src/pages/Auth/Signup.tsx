import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import SignupComponent from '../../components/Auth/SignupComponent'

const Signup: React.FC<{}> = () => {
    return (
        <CommonComponent>
            <SignupComponent />
        </CommonComponent>
    )
}

export default Signup