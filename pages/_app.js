import '../styles/styles.scss';
import { Layout, Footer } from '../components';


import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../styles/styles.scss';



function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
