import Layout from '../comps/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        {/* this becomes the children in the layout component */}
        <Component {...pageProps} />
      </Layout>
    )

}

export default MyApp
