/*
 * @Author: Harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-16 17:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/index.js
 */
import Head from 'next/head'
import React from 'react'
// import Link from 'next/link'
import {Button} from 'antd'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GuApi_Harry</title>
        <link rel="icon" href="/tap.ico" />
      </Head>
      <Header/>

    </div>
  )
}
