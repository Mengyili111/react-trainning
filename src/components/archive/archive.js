import './index.less';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Timeline, Icon, message } from 'antd';
import https from '../../utils/https';
import urls from '../../utils/urls';
import { timestampToTime } from '../../utils/utils';
import LoadingCom from '../loading/loading';
import SearchTree from './Tree';



class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isLoadEnd: false,
            likes: "", // 是否是热门文章
            state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
            article: 1,
            keyword: '',
            pageNum: 1,
            pageSize: 10,
            total: 0,
            list: [],
            data:{}
        };
    }
    

    render() {
        const list = this.state.list.map((item, i) => ( 
        <Timeline.Item 
            key = { i }
            color = { 'red' }
            dot = { < Icon type = "clock-circle-o"
            style = {{ fontSize: '16px' } }
        />} >
            <h1 > { item.year } </h1> 
            {item.list.map(ele => 
                (<Timeline key = { ele._id } >
                        <Timeline.Item >
                            <Link 
                                className = "title"
                                target = "_blank"
                                to = { `/articleDetail?article_id=${ele._id}` } >
                                <h3> { ele.title } </h3> 
                            </Link> 
                            <p>
                                <span> 
                                {ele.create_time ?timestampToTime(ele.create_time, true) :''} 
                                </span> 
                            </p> 
                    </Timeline.Item>
                </Timeline>
                ))
            } 
        </Timeline.Item>));
        // console.log(this.state.list)

        return ( 

            <div>
                {/* <Timeline > { list } </Timeline> { this.state.isLoading ? < LoadingCom /> : '' }  */}
                This is the Archive page
                <SearchTree/>
                
        
            </div>
            );
        }
    }

    export default Archive;