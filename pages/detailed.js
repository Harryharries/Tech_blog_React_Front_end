/*
 * @Author: Harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-21 12:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/index.js
 */
import Head from 'next/head'
import React from 'react'
// import Link from 'next/link'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'

export default function Detailed() {

  let markdown='hello\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '\`console.log(111)\` \n\n'+
  '# P01:课程介绍和环境搭建\n' +

  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

  return (
    <div>
      <Head>
        <title>Detailed</title>
        <link rel="icon" href="/tap.ico" />
      </Head>
      <Header/>
      <Row className = "comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={13}>
            <div>
              <div className="bread-div">
                <Breadcrumb>

                  <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href="/list">blog</a></Breadcrumb.Item>
                  <Breadcrumb.Item>XXXX</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className="detailed-title">
                  Detail in volatile, What is CAS(CompareAndSwap)? CAS system source code in JAVA 8
                </div>
                <div className="list-icon center">
                  <span><Icon type="calendar"/>2020-6-28</span>
                  <span><Icon type="folder"/>text</span>
                  <span><Icon type="fire"/>45</span>
                </div>

                <div className="detail-content">
                  <ReactMarkdown
                    source={markdown}
                    escapeHtml={false}
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">article index</div>
              <Affix><MarkNav className="article-menu" source={markdown} ordered={false}></MarkNav></Affix>
            </div>
          </Col>
      </Row>

    </div>
  )
}
