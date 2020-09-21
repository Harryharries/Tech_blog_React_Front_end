/*
 * @Author: your name
 * @Date: 2020-09-17 22:48:30
 * @LastEditTime: 2020-09-21 14:35:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/components/Author.js
 */
import {Avatar, Divider} from 'antd'

export default function Author() {
    return (
        <div className="author-duv comm-box">
            <div><Avatar size={150} src="/0.jpeg"></Avatar></div>
            <div className="author-introduction">
                Web / Front-end Developer,
                B.S. IN COMPUTER SCIENCE, HONOURS (CO-OP OPTION)
                <Divider>Profile</Divider>

                <a href="https://github.com/Harryharries"><Avatar size={33} icon="github" className="account"/></a>
                <a href="https://www.linkedin.com/in/guzhengyu/"><Avatar size={33} icon="linkedin" className="account"/></a>
                <a href="https://zhengyuguapi.blogspot.com/?view=sidebar"><Avatar size={33} icon="google" className="account"/></a>
                <a href="https://www.youtube.com/channel/UCBviU5u2zBBdbnKN4gFY6sQ/videos?view_as=subscriber"><Avatar size={33} icon="youtube" className="account"/></a>
                <a href="https://www.canva.com/design/DADOPYj3Rzc/vobulI0LQaPTABeXy2jY2A/edit"><Avatar size={33} icon="copy" className="account"/></a>
            </div>
        </div>
    )
}