import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import MarketComponent from '../../components/Market/MarketComponent'

const MarketData: React.FC<{}> = () => {
  return (
    <CommonComponent>
      <MarketComponent />
    </CommonComponent>
  )
}

export default MarketData