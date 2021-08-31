export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return{
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        // no idea what fallback does yet
        fallback: false
    }
}

// this runs ten times because there are ten ids, and in build 
// builds ten pages with javascript bundles
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        // this is used in the component down below
        props: { user: data}
    }
}


const Detailed = ({ user }) => {
    return (
        <div>Username {user.name}</div>
    )
}

export default Detailed;