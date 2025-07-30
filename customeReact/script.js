function customRender (container, reactElement){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    for(const prop in reactElement.props){
        if( prop === 'children') continue ;
        domElement.setAttribute(prop, reactElement.props[prop]);
        console.log(prop);
        console.log(reactElement.props[prop])
    }
    container.append(domElement);
}

const reactElement = {
    type : "a",
    props :{
        href :"https://google.com",
        target :"_blank"
    },
    Children : " click me"
}

const mainContainer = document.querySelector("#root");

customRender(mainContainer, reactElement);
