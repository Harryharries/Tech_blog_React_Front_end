/*
 * @Author: your name
 * @Date: 2020-09-16 17:16:29
 * @LastEditTime: 2020-09-18 01:41:13
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
                <span className="header-logo">Harry_GuApi</span>
                <span className="header-txt">Front_end developer technical blog</span>
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={0} lg={5} xl={5}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home"></Icon>
                        Home
                    </Menu.Item>

                    <Menu.Item key="video">
                        <Icon type="youtube"></Icon>
                        Vedio
                    </Menu.Item>

                    <Menu.Item key="resume">
                        <Icon type="smile"></Icon>
                        Resume
                    </Menu.Item>

                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header