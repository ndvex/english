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
<<<<<<< HEAD
    if ('value' in options) {
      elem.value = options.value;
    }
    if ('type' in options) {
      elem.type = options.type;
    }
    if ('name' in options) {
      elem.name = options.name;
    }
    if ('checked' in options) {
      if (options.checked === true) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
      
    }
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
    
    if (attributes !== undefined){
      for (let i = 0; i < attributes.length; i++){
        elem.setAttribute(attributes[i].name, attributes[i].value);
      }
    }
    
    return elem;
  }
}

let create = new Create();