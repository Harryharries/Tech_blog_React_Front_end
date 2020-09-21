/*
 * @Author: Harry
 * @Date: 1985-10-26 03:15:00
 * @LastEditTime: 2020-09-21 14:17:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/index.js
 */
import Head from 'next/head'
import React from 'react'
// import Link from 'next/link'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'

export default function Detailed() {

  let markdown='we have talked about JMM and how to use volatile to keep the "happens-before" principle (JVM could reorder the code order for performance) and to solve the "visibility" problem in JMM\n\n' +

  '# P01:can volatile keep the Atomicity?\n' +
  'No\n'+
  'every volatile can solve the "visibility" problems and make every thread have the same value on the same variable\n' +
  'but javas execution is not Atomicity and "Volatile" can not guarantee Atomicity\n'+

  '# CAS（Compare-and-Swap): used for multithread\n\n' +
  '> example: multithreaded increasing:\n\n\n' +
  'public class VolatileTest {\n' +
  '  public static volatile int race = 0;\n'+
  '  private static final int THREADS_COUNT = 20;\n\n' +
  '  public static void increase() {\n'+
  '    race++;\n}\n\n'+
  '   public static void main(String[] args) throws InterruptedException {\n'+
  '         Thread[] threads = new Thread[THREADS_COUNT];\n'+
  '         for (int i = 0; i < THREADS_COUNT; i++) {\n'+
  '             threads[i] = new Thread(new Runnable() {\n'+
  '             @Override\n'+
  '             public void run() {\n'+
  '             for (int i = 0; i < 10000; i++) {\n'+
  '                 increase();  \n'+
  '             }\n'+
  '         }\n'+
  '    });\n'+
  '    thread.start());\n'+
  '    }\n\n\n'+

  'the result always is wrong, because:\n'+
  'volatile guarantee visibility，but it is not atomicity，increase() is not atomicity operations(see below)，in concurrency，“putstatic” executions could synchronize the smaller value race value to the main memory\n'+
  '\n\nHow to solve this problem?\n'+
  'way 1:\n'+
  'synchronized \n'+
  'the increase() function will be atomicity after synchronized, \n'+
  'but performance is low because increase() will be locked every time\n\n  \n'+
  'solution 2: Atomic\n'+
  'Sooo just make it Atomic!\n'+
  'in deeper level --> getAndIncrement()  use  getAndAddInt() use compareAndSwapInt()\n'+
  '\nwhich is CAS!\n'+
  'getAndAddInt(): keep trying to get the newest v from the memory offset position，use CAS to change memory offset positions value to be the v+delta, keep trying until success.\n'+
  '# p03:What is CAS？？\n\n'+
  'CompareAndSwap: need 3 parameters: memory address V, old value A, new value B\n'+
  '\nWhen CAS is executing，\n'+
  'if and only if memory address Vs value == old value A，\n'+
  '   memory address V =  new value B\n'+
  'else\n'+
  'do nothing \n'+
  'CompareAndSwap is an atomic operation\n'+
  '----------------------------------\n'+
  '#Source Code:\n'+
  'Atomic::cmpxchg() in linux_x86\n'+
  'Atomic::cmpxchg(): \n'+
  '“os::is_MP()” is an Inline function (内联函数)，to check the current system is Multiprocessor Systems(1) or not(0)\n'+
  'LOCK_IF_MP(mp) will and the prefix ("lock")  for the "cmpxchg" command (signal processor Systems do not need lock)\n\n\n\n\n'+
  '# intel手册对lock前缀的说明如下：\n'+
  '1. 确保对内存的读-改-写操作原子执行。在Pentium及Pentium之前的处理器中，带有lock前缀的指令在执行期间会锁住总线，使得其他处理器暂时无法通过总线访问内存。很显然，这会带来昂贵的开销。从Pentium 4，Intel Xeon及P6处理器开始，intel在原有总线锁的基础上做了一个很有意义的优化：如果要访问的内存区域（area of memory）在lock前缀指令执行期间已经在处理器内部的缓存中被锁定（即包含该内存区域的缓存行当前处于独占或以修改状态），并且该内存区域被完全包含在单个缓存行（cache line）中，那么处理器将直接执行该指令。由于在指令执行期间该缓存行会一直被锁定，其它处理器无法读/写该指令要访问的内存区域，因此能保证指令执行的原子性。这个操作过程叫做缓存锁定（cache locking），缓存锁定将大大降低lock前缀指令的执行开销，但是当多处理器之间的竞争程度很高或者指令访问的内存地址未对齐时，仍然会锁住总线。\n'+
  '2. 禁止该指令与之前和之后的读和写指令重排序\n'+
  '3. 把写缓冲区中的所有数据刷新到内存中\n'+
  '\n上面的第1点保证了CAS操作是一个原子操作，第2点和第3点所具有的内存屏障效果，保证了CAS同时具有volatile读和volatile写的内存语义。\n\n\n\n' +
  '# CAS cons:\n' +
  '>CAS solve the atomic problem but\n' +
  '>>1: loop time is costly\n'+
  '>>If getAndAddInt()  fail lots of times, CPU will cost a lot\n\n'+
  
  '>>2. only can keep one variables atomicity\n'+
  '>>what if we want to do more than one variable?\n'+
  '>>-> Mutual exclusion！\n'+
  '>>-> encapsulation into one Object\n'+
  '# 3. ABA problem:\n'+
  '>>what is ABA problem？how to deal with ABA？\n\n'+
  '>>we can not make sure there is no other thread changed the value or not \n'+
  '>>If memory address V is the same \n'+
  '>>when the 1st time we read it (Assume value is A) \n'+
  '>>and when we check it for Swap (Assume value is also A) \n\n'+
  '>>What if during this time it was changed to B then changed to A?  \n'+
  '>>->CAS will consider it was never changed! \n\n\n'+

  '# How to solve it? the ABA problem\n\n'+
  'Java provides a class “AtomicStampedReference” which is stamped to make sure CAS correctness!\n\n'+
  'So we need to think about ABA before using CAS for our concurrency correctness.\n\n'+
  'Mutex ()! is a more effective operation!\n'+
  '--> when a thread trying to use the critical resource, other threads will be blocked and must whenthe thread unlock. \n'+
  '\n\n\n'+

  '# p04:基础知识讲解1\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:基础知识讲解\n' +
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
                  <Breadcrumb.Item>Detailed</Breadcrumb.Item>
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

          <Footer/>
      </Row>

    </div>
  )
}
