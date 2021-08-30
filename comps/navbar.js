import Link from 'next/link'
import Image from 'next/image'
// next.js looks for these links and pre fetches the informatio for a faster user experience
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* with these height ad weight properties the image becomes responsive and load lazily as well, automatically optimizes for speed */}
                <Image src="/table.jpg" width={122} height={79}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/test"><a>Test</a></Link>
        </nav>
    )
}

export default Navbar;