/*
 * @Author: your name
 * @Date: 2020-09-17 22:48:30
 * @LastEditTime: 2020-09-18 01:38:47
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
                <Avatar size={28} icon="github" className="account"/>
                <Avatar size={28} icon="linkedin" className="account"/>
            </div>
        </div>
    )
}