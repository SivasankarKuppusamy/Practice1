import React, { Component } from 'react'
import axios from 'axios'
import './GetEx.css'

export default class GetEx extends Component {
    constructor(props) {
        super(props)
        this.state={post:[]}
      }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
        console.log(res.data);  
        this.setState({post:res.data})})
    }
    render() {
        const {post}=this.state
        return (
        <div id="getex">
        <table>
        <tr>
        <th>Id  </th>
        <th>UserId  </th>
        <th>Title</th>
        </tr>
        {post.map((i)=>
        <tr key={i}>
        <td>{i.id}</td>
        <td>{i.userId}</td>
        <td>{i.title}</td>
        </tr>)}
        </table>
      </div>
    )
  }
}
