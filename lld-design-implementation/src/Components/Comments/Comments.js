import React from 'react'

const Comments = ({comments, users}) => {
    console.log(comments)
  return (
    <div>
        {comments && comments.map((comment, index) => {
            const userInfo = users.find(user => user.id === comment.userId)
            return (<div className="mb-" key={comment.id}>
                        <div className="flex align-baseline pl-2">
                            <img className="w-[30px] h-[30px] rounded-full mr-5" alt={userInfo.id} src={userInfo?.photo}/>
                            <div>
                                <h2 className="text-l">{userInfo.name}</h2>
                                <p>{comment.text}</p>
                                <div className="m-2">
                                    {comment.replies && <Comments comments={comment.replies} users={users}/>}
                                </div>    
                            </div>
                            
                        </div>
                        
                    </div>)
        })}
    </div>
  )
}

export default Comments