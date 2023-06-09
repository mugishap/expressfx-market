import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import HomeComponent from '../../components/Home/HomeComponent'

const Home: React.FC<{}> = () => {
    return (
        <CommonComponent>
            <HomeComponent />
        </CommonComponent>
    )
}

export default Home