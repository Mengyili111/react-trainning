import React, { Component } from 'react';
import { Tree, Input } from 'antd';
import ReactDOM from 'react-dom';
import handleSearch from './archive';
import https from '../../utils/https';
import urls from '../../utils/urls';
import TreeNode from './treeNode';

export default class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
    isLoading: true,
    data: {}
  };

  // ---------------  get data ---------

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = () => {
    this.setState({
      isLoading: true,
    });
    https
      .get(urls.getArchive)
      .then(res => {
        console.log(res)
        if (res.status === 200 && res.data.code === 0) {
          this.setState({
            data: res.data,
            isLoading: false
          })
        }
      })
  };



  // ---------------

  render() {

    const data = this.state.data;

    const mock = [1,2,3,4,5]


    console.log('res from archive', this.state.data.data)
    console.log('loading', this.state.isLoading)
    
    return (
      <div>
        {/* {this.state.isLoading? <h3>loading</h3>: data.map(item => (
           <TreeNode data={item.data}/>
        )) } */}
        {mock.map(item=> (<h3>{item}</h3>))}

        {this.state.isLoading? <div>loading</div>: data.map(item=>(
          <h4 key={item.type}>{item.type}</h4>
        ))}
      </div>
    );
  }
}