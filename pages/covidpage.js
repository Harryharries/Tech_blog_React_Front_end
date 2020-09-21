/*
 * @Author: your name
 * @Date: 2020-09-21 12:17:48
 * @LastEditTime: 2020-09-21 14:23:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/covidpage.js
 */
import Head from 'next/head'
import React from 'react'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Footer from '../components/Footer'
import Header from '../components/Header'
import COVID from '../components/src/COVID'
import Typography from '@material-ui/core/Typography';

export default function covidpage() {
    return (
        <div>
        <Head>
          <title>Detailed</title>
          <link rel="icon" href="/tap.ico" />
        </Head>
        <Header/>
        <Row className = "comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={17}>
              <div>
                <div className="bread-div">
                  <Breadcrumb>
  
                    <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/list">blog</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/covidpage">COVID</a></Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div>
                <Typography variant="h3" color="primary" >
                Daily Covid-19 Checker
            </Typography>
                    <COVID></COVID>
                </div>
              </div>
            </Col>
  
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={1}>
            </Col>
  
            <Footer/>
        </Row>
  
      </div>
    )
}