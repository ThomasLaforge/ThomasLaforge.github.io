import '../styles/blog.scss'
import '../styles/cv.scss'
import '../styles/contact.scss'
import '../styles/globals.scss'
import '../styles/layout.scss'
import '../styles/presentation.scss'
import '../styles/table.scss'

import type { AppProps /*, AppContext */ } from 'next/app'
import MainLayout from '../components/MainComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp