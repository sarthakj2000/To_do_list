import React from 'react'
import { PageHeader, Button } from 'antd';



const Header = () => {
    return (
        <div className="header">
            <PageHeader
    className="site-page-header"
    title="TodoList"
    style={{marginLeft:"200px"}}
    extra={[
        
        <Button key="1" type="primary" style={{marginRight:"350px"}}>
          sarthakj2000
        </Button>,
      ]}
    
  />,

        </div>
    )
}

export default Header
