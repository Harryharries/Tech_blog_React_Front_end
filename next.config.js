/*
 * @Author: harry
 * @Date: 2020-09-16 16:23:43
 * @LastEditTime: 2020-09-16 17:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/next.config.js
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})