import styles from '../../styles/Users.module.css'
import Link from 'next/link'

// this is how a fetch request is done, handles the fetch and then renders the 
// Users component, next.js is pretty strict about this so copy this in the future
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log(data)
    return {
      props: { users: data }
    }
  }


const Users = ({ users }) => {
    // console.log("users>>>",users)

    return(
        <div> 
            <h1>Our Users</h1>
            {users.map(user => (
            <Link href={`/users/${user.id}`} key={user.id}>
                <a className={styles.single}>
                    <h3>{user.name}</h3>
                </a>
            </Link>    
            ))}
        </div>
    )
}

export default Users;