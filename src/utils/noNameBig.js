function noNameBig(value,size){
  return value && value.length>size ? value.substr(0,size)+'...' : value;
}

export default noNameBig;