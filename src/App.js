import Nav from "./components/Nav"
import BlogSection from "./components/BlogSection"
import Data from "./components/Data"

export default function App()   {
    const posts = Data.map(post => {
        console.log(post)
        return <BlogSection
                key = {post.id}
                {...post}
        />
    })
    return (
        <div>
            <Nav />
            {posts}
        </div>
    )
}