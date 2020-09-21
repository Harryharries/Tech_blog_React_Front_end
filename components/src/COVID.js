/*
 * @Author: your name
 * @Date: 2020-08-11 01:26:00
 * @LastEditTime: 2020-09-21 12:12:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /covid19/src/App.js
 */
import React from 'react';

import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from './api'
class COVID extends React.Component{
    state = {
        data: {},
        country:''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) =>{
        const data = await fetchData(country);
        //console.log(fetchedData);
        this.setState({data, country: country});
    }
    render() {
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )   
    }
}

export default COVID;