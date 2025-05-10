const comments = [
    {
        "id": 1,
        "userId": 1,
        "text": "This is a dummy comment",
        "replies": [{
            "id": 2,
            "userId": 2,
            "text": "This is a dummy reply",
            "replies": [{
                "id": 4,
                "userId": 3,
                "text": "This is a dummy reply -level 3",
                "replies": [{
                    "id": 5,
                    "userId": 2,
                    "text": "This is a dummy reply -level 4",
                    "replies": [{
                        "id": 6,
                        "userId": 1,
                        "text": "This is a dummy reply -level 5",
                    }]
                }]
            }]
        }, 
        {
            "id": 3,
            "userId": 1,
            "text": "The previous comment was done by me",
            "replies": [{
                "id": 6,
                "userId": 1,
                "text": "This is a dummy reply -level 1"
            }]
        }]
    },
    {
        "id": 2,
        "userId": 2,
        "text": "This is a dummy comment",
        "replies": [{
            "id": 2,
            "userId": 2,
            "text": "This is a dummy reply",
            "replies": [{
                "id": 4,
                "userId": 3,
                "text": "This is a dummy reply -level 3",
                "replies": [{
                    "id": 5,
                    "userId": 2,
                    "text": "This is a dummy reply -level 4",
                    "replies": [{
                        "id": 6,
                        "userId": 1,
                        "text": "This is a dummy reply -level 5",
                    }]
                }]
            }]
        }, 
        {
            "id": 3,
            "userId": 1,
            "text": "The previous comment was done by me",
            "replies": [{
                "id": 6,
                "userId": 1,
                "text": "This is a dummy reply -level 1"
            }]
        }]
    },
    {
        "id": 3,
        "userId": 3,
        "text": "This is a dummy comment",
        "replies": [{
            "id": 2,
            "userId": 2,
            "text": "This is a dummy reply",
            "replies": [{
                "id": 4,
                "userId": 3,
                "text": "This is a dummy reply -level 3",
                "replies": [{
                    "id": 5,
                    "userId": 2,
                    "text": "This is a dummy reply -level 4",
                    "replies": [{
                        "id": 6,
                        "userId": 1,
                        "text": "This is a dummy reply -level 5",
                    }]
                }]
            }]
        }, 
        {
            "id": 3,
            "userId": 1,
            "text": "The previous comment was done by me",
            "replies": [{
                "id": 6,
                "userId": 1,
                "text": "This is a dummy reply -level 1"
            }]
        }]
    }
]

const users = [{
        "id": 1,
        "name": "John Doe",
        "photo": "https://randomuser.me/api/portraits/men/32.jpg"
    },{
        "id": 2,
        "name": "Karren",
        "photo": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "id": 3,
        "name": "Arron Gus",
        "photo": "https://randomuser.me/api/portraits/women/35.jpg"
}]

export {comments, users}
