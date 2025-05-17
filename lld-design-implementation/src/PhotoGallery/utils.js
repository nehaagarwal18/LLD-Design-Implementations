const fetchMockPhotos = (limit) => {
    return Array.from({ length: limit}, (_, i) => {
        const id = Math.floor(Math.random() * 1000)
        return {
            id: i + 1,
            title: `Photo ${i + 1}`,
            url: `https://picsum.photos/id/${id}/600/400`,
            thumbnailUrl: `https://picsum.photos/id/${id}/300/200`,
        }
    })
}

export {fetchMockPhotos}