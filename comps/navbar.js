import Link from 'next/link'
// next.js looks for these links and pre fetches the informatio for a faster user experience
const Navbar = () => {
    return (
        <nav>
            <div>
                This is the navbar
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/test"><a>Test</a></Link>
        </nav>
    )
}

export default Navbar;