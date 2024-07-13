import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
    return(
    <div>
        <h1>shubham varshney is learning react</h1>
    </div>
    )
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const anotherelement=(
    <a href="https://google.com">go to google</a>
)

const username="react is all about j.s"
const Reacts=React.createElement(
    'a',//tag
    {href:'https://youtube.com', target:'_blank'},
    'go to youtube shubham sir',//string
    username   
)
ReactDOM.createRoot(document.getElementById('root')).
render(
    <App/>
)
