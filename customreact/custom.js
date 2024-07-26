function customrender(reactelement,container){
    // const domElement =document.createElement(reactelement.type)
    // domElement.innerHTML=reactelement.children
    // domElement.setAttribute('href',reactelement.props.href)
    // domElement.setAttribute('target',reactelement.props.target)
    // container.appendChild(domElement)
    const domElement =document.createElement(reactelement.type)
    domElement.innerHTML=reactelement.children
    for (const prop in reactelement.props) {
       if (prop==='children') continue;
       domElement.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(domElement)
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const maincontainer=document.querySelector('#root')
customrender(reactelement,maincontainer)
