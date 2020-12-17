import React, { PureComponent } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

class CommentItem extends PureComponent {

  render () {
    const { username, avatar, txt, time, id } = this.props.comment

    const actions = [
      <Tooltip title='删除'>
        <span onClick={() => this.del(id)}>
          <span className='del-icon'><DeleteOutlined/> <span className='del-txt'>删除</span></span>
        </span>
      </Tooltip>
    ];

    return (
      <Comment
        actions={actions}
        author={
          <Tooltip title={username}>
            {username}
          </Tooltip>
        }
        avatar={
          <Avatar
            src={avatar}
            alt={username}
          />
        }
        content={<p> {txt} </p>}
        datetime={
          <Tooltip title={time}>
            <span>{time}</span>
          </Tooltip>
        }
      />
    );
  }

  del (id) {
    this.props.handleDel(id)
  }

}

export default CommentItem;
