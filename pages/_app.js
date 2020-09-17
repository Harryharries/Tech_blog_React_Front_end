/*
 * @Author: harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-16 17:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/_app.js
 */
import App from 'next/app'
import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'
import '../static/style/components/header.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
