class Create {
  createElement(options, attributes) {
    let elem = document.createElement(options.tagName);
    if ('id' in options){
      elem.id = options.id;
    }
    if ('className' in options){
      elem.className = options.className;
    }
    if ('innerHTML' in options) {
      elem.innerHTML = options.innerHTML;
    }
    
    if (attributes !== undefined){
      for (let i = 0; i < attributes.length; i++){
        elem.setAttribute(attributes[i].name, attributes[i].value);
      }
    }
    
    return elem;
  }
}

let create = new Create();