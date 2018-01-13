function upC(c) {
    var ascii_value = c.charCodeAt(0)
    var modified_value = ascii_value - 32
    if (ascii_value < 97) {
      modified_value = ascii_value;
    }
    return String.fromCharCode(modified_value);
  }
  function upperCase (){
      var name = document.getElementById('name').value;
      var uccase = '';
    for (var i= 0; i < name.length; i++){
        uccase += upC(name[i]);
    }
    document.getElementById('name').value= '';
    document.getElementById('output').innerHTML= uccase;
  }