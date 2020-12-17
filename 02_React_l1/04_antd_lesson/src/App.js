import React, { PureComponent } from 'react';
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

import styled from 'styled-components'

const ContainerDiv = styled.div`
  width: 500px;
  padding: 20px;
  box-sizing: border-box;

  .textarea {
    resize: none;
  }

  .add-btn {
    margin-top: 20px;
    float: right;
  }

  .del-icon {
    display: flex;
    align-items: center;

    .del-txt {
      margin-left: 5px;
    }
  }
`

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      commentList: []
    }
  }

  render () {
    const { commentList } = this.state
    return (
      <ContainerDiv>
        {commentList.map(item => <CommentItem key={item.id} comment={item} handleDel={this.handleDel.bind(this)}/>)}
        <CommentInput handleSubmit={this.handleSubmit.bind(this)}/>
      </ContainerDiv>
    );
  }

  handleSubmit (data) {
    const commentList = [...this.state.commentList]
    commentList.push(data)
    this.setState({
      commentList
    })
  }

  handleDel (id) {
    const commentList = [...this.state.commentList]
    this.setState({ commentList: commentList.filter(comment => comment.id !== id) })
  }
}

export default App;
