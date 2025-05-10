import React from 'react'
import {comments, users} from './mock'
import Comments from './Comments'

const CommentContainer = () => {
  return (
    <div className="p-10">
        <h1 className="text-3xl mb-10">Nested Comments</h1>
        <Comments comments={comments} users={users}/>
    </div>
  )
}

export default CommentContainer