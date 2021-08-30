export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return{
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        // no idea what fallback does yet
        fallback: false
    }
}


const Detailed = () => {
    return (
        <div>A more detailed look on the user</div>
    )
}

export default Detailed;