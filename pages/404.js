//this page will be served instead of typical 404 page
import Link from 'next/link'

const notFound = () => {
    return (
        <div className="not-found">
            <h1>Nope!</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
      );
}

export default notFound;