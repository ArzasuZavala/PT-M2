var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
if(matchFunc(startEl)){
  resultSet.push(startEl);
}
  // TU CÓDIGO AQUÍ:
  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  if(selector[0] === '#') return 'id';
  else if(selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class';
  else return 'tag';

  // return selector[0] === '#' ? 'id' : selector[0] === '.' ? 'class' : selector.includes('.') ? 'tag.class' : 'tag';

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 

    matchFunction = (el) => `#${el.id}` === selector; 

  } else if (selectorType === "class") {

    matchFunction = (element) => {
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        if(`.${classes[i]}` === selector) return true;
      }
      // classes.forEach(el => {if(`.${el}` === selector) return true});
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(element)  {
      let [tagBuscado, classBuscada] = selector.split('.');
      return matchFunctionMaker(tagBuscado)(element) && matchFunctionMaker(`.${classBuscada}`)(element);
    }

  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return element.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
