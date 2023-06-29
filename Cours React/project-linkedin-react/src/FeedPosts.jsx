const FeedPosts = () =>{
    const postsFeedFromFakeApi = [
        {
            id: 1,
            title: "Vous ne devinerez jamais ce qui s'est passé",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            },
        },
        {
            id: 2,
            title: "Vous ne devinerez jamais ce qui s'est passé 2",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: false,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
            id: 2,
            firstName: "Jane",
            lastName: "Doe",
            },
        },
        {
            id: 3,
            title: "Vous ne devinerez jamais ce qui s'est passé 3",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
            id: 3,
            firstName: "Jean",
            lastName: "Bon",
            },
        },
        {
            id: 4,
            title: "Vous ne devinerez jamais ce qui s'est passé 4",
            description: "Blablabla bla bla bla bla bla bla bla bla",
            image: "https://picsum.photos/200/300",
            isPublished: true,
            publishedAt: "2021-09-01T12:00:00.000Z",
            author: {
            id: 4,
            firstName: "Json",
            lastName: "Statham",
            },
        },
    ];

    const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString("M/D/Y");
    };

    return (
    <section className="CardFeed">
        <h2>Feed</h2>
        <ul>
        {postsFeedFromFakeApi.map((post) => {
            return (
            <>
                {post.isPublished && (
                <li key={post.id} className="CardXp">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{formatDate(post.publishedAt)}</p>
                    <p>
                    {post.author.firstName} {post.author.lastName}
                    </p>
                </li>
                )}
            </>
            );
        })}
        </ul>
    </section>
    );
}

export default FeedPosts