//this page will be served instead of typical 404 page
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            // like useHistory hook from react-router-dom library, history.push()
            router.push('/')
            // or I could use this:
            // router.go(1)
            // but you don't know where they came from
            
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>Nope!</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
      );
}

export default NotFound;