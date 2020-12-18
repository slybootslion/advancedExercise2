import React, { PureComponent } from 'react';
import { getRequest, postRequest } from './api/api'
import { Button } from 'antd'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  .axios-btn {
    margin: 0 10px;
    color: #ffffff;
    background-color: #c00;

    &.post {
      background-color: #e2b811;
    }
  }
`

class AxiosPage extends PureComponent {

  render () {
    return (
      <ContainerDiv>
        <Button className='axios-btn' onClick={() => this.getReq()}>get请求</Button>
        <Button className='axios-btn post' onClick={() => this.postReq()}>post请求</Button>
      </ContainerDiv>
    );
  }

  async getReq () {
    console.log('get: --->')
    const res = await getRequest()
    console.log(res.args)
  }

  async postReq () {
    console.log('post: --->')
    const data = { name: 'baidu', age: 10 }
    const res = await postRequest(data)
    console.log(JSON.parse(res.data))
  }
}

export default AxiosPage;
