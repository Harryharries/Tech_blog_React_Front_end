/*
 * @Author: harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-21 11:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/_app.js
 */
import App from 'next/app'
import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'
import '../static/style/pages/index.css'
import '../static/style/pages/detailed.css'
import '../static/style/components/header.css'

import '../static/style/components/author.css'
import '../static/style/components/advert.css'
import '../static/style/components/footer.css'
import 'markdown-navbar/dist/navbar.css'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
