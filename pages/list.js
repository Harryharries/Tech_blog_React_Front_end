/*
 * @Author: Harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-21 14:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/index.js
 */
import Head from 'next/head'
import React,{useState} from 'react'
// import Link from 'next/link'
import {Row,Col,List,Icon,Breadcrumb} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

// import List from './list'

export default function MyList() {

  const [mylist,setMylist] = useState(
      [
        {title:'Detail in volatile, What is CAS(CompareAndSwap)? CAS system source code in JAVA 8',context:'we have talked about JMM and how to use volatile to keep the "happens-before" principle (JVM could reorder the code order for performance) andto solve the "visibility" problem in JMM'},
        {title:'JAVA memory model(JMM), volatile',context:'volatile is used as a synchronized function which is used to mark a Java variable as "being stored in main memory"WHICH means that every read of a volatile variable will be read from the computers main memory, and not from the CPU cache'},
        {title:'TypeScript Basic syntax notes',context:' TypeScript is an alternative version of Js'},
        {title:'React Hooks, pros of Hooks, useState, useEffect, useContext',context:'React Hooks is a new feature of React(16.8) in 2019, It changes the Components class into function style, which makes developers be easier. React Hooks also makes React Components can be more reuseable '},
        {title:'Props/state in React, pass data using Props, Event with parameter? CAS system source code in JAVA 8',context:'we have talked about JMM and how to use volatile to keep the "happens-before" principle (JVM could reorder the code order for performance) andto solve the "visibility" problem in JMM'},
        {title:'Detail in volatile, What is CAS(CompareAndSwap)? CAS system source code in JAVA 8',context:'we have talked about JMM and how to use volatile to keep the "happens-before" principle (JVM could reorder the code order for performance) andto solve the "visibility" problem in JMM'},

      ]
  )
  return (
    <div>
      <Head>
        <title>GuApi_Harry</title>
        <link rel="icon" href="/tap.ico" />
      </Head>
      <Header/>
      <Row className = "comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>

            <div className="bread-div">
              <Breadcrumb>
              <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/list">blog</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <List
              header={<div>recent blog List</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item=>(
                <List.Item>
                  <a href="/detailed">
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar"/>2020-06-28</span>
                    <span><Icon type="folder"/>text</span>
                    <span><Icon type="fire"/>21</span>
                  </div>
                  </a>
                </List.Item>
              )}
            />
          </Col>

          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={5}>
            <Advert></Advert>
            <Author></Author>
            
          </Col>
      </Row>

      <Footer/>

    </div>
  )
}
