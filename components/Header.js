/*
 * @Author: your name
 * @Date: 2020-09-16 17:16:29
 * @LastEditTime: 2020-09-21 14:36:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/components/Header.js
 */
import React, { Component } from 'react';
import {Row,Col,Menu,Icon} from 'antd'

const Header=()=>(
    <div className="header">
        <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <a href="/">
                <span className="header-logo">Harry_GuApi</span>
                <span className="header-txt">Front_end developer technical blog</span>
            </a>
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={0} lg={5} xl={5}>
                <Menu mode="horizontal">
                
                    <Menu.Item key="home">
                    <a href="/">
                        <Icon type="home"></Icon>
                        Home
                        </a>
                    </Menu.Item>

                    <Menu.Item key="video">
                    <a href="/covidpage">
                        <Icon type="youtube"></Icon>
                        COVID
                        </a>
                    </Menu.Item>
                    

                    <Menu.Item key="resume">
                        <a href="https://www.canva.com/design/DADOPYj3Rzc/vobulI0LQaPTABeXy2jY2A/edit">
                        <Icon type="smile"></Icon>
                        Resume
                        </a>
                    </Menu.Item>

                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header