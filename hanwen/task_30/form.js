var $ = function(id) {
  return document.getElementById(id);
}

var username = $("username");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
var tip4 = document.getElementById("tip4");
var tip5 = document.getElementById("tip5");
// 正则
var trimReg = /^\s+|\s+$/g; // 去除首尾空格
var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g; //用两个字符替换汉字
var lenReg = /^.{4,16}$/; // 长度验证
//
var passwordReg = /^[A-Za-z0-9]{6,16}/; //密码验证
//
var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/; //邮箱验证
var phoneReg = /0?(13|14|15|18)[0-9]{9}/; //手机验证

username.onfocus = function() {
  tip1.style.visibility = "visible";
}
password.onfocus = function() {
  tip2.style.visibility = "visible";
}
password2.onfocus = function() {
  tip3.style.visibility = "visible";
}
email.onfocus = function() {
  tip4.style.visibility = "visible";
}
phone.onfocus = function() {
    tip5.style.visibility = "visible";
  }
  // function showtip1(){
  //   tip1.style.visibility = "visible";
  // }


  var Validate={};
  Validate.checkName=function(){

  };


  var check={
    init:function(){
      var self=this;
      this.bind();
      if(this.checkName()){

      }
    },
    bind:function(){
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      var tip1 = document.getElementById("tip1");
      var tip2 = document.getElementById("tip2");
      var tip3 = document.getElementById("tip3");
      var tip4 = document.getElementById("tip4");
      var tip5 = document.getElementById("tip5");
    },
    checkName:function(){},
    checkPassword:function(){}

  }
  dom.onclick=check.init;


function validate(value, type) {
  if (type == "username") {
    var testStr = value.replace(trimReg, '').replace(chineseReg, '--');
    if (!lenReg.test(testStr)) {
      return false;
    }
  } else if (type == "password") {
    if (!passwordReg.test(value)) {
      return false;
    }
  } else if (type == 'email') {
    if (!emailReg.test(value)) {
      return false;
    }
  } else if (type = 'phone') {
    if (!phoneReg.test(value)) {
      return false;
    }
  }
}

function changeClass(obj1, obj2, str) {
  if (str == "null") {
    //obj1.innerText = "长度不能为空";
    obj1.innerText = "长度不能为空";
    obj1.style.color = "#DE0012";
    obj2.style.borderColor = "#DE0012";
  } else if (str == "lenth") {
    obj1.innerText = "长度为4~16个字符";
    obj1.style.color = "#DE0012";
    obj2.style.borderColor = "#DE0012";
  } else if (str == "right") {
    obj1.innerText = "名称格式正确";
    obj1.style.color = "#60BB44";
    obj2.style.borderColor = "#60BB44";
  } else if (str == "format") {
    obj1.innerText = "格式不正确";
    obj1.style.color = "#DE0012";
    obj2.style.borderColor = "#DE0012";
  } else if (str == "unmatch") {
    obj1.innerText = "与密码输入不相同";
    obj1.style.color = "#DE0012";
    obj2.style.borderColor = "#DE0012";
  } else if (str == "passlenth") {
    obj1.innerText = "长度为6~16个字符";
    obj1.style.color = "#DE0012";
    obj2.style.borderColor = "#DE0012";
  }
}

function validate_password() {
  console.log(password.value);
  if (password.value == "") {
    changeClass(tip2, password, "null");
  } else if (validate(password.value, 'password') == false) {
    changeClass(tip2, password, "passlenth");
  } else {
    changeClass(tip2, password, "right");
    return true;
  }
}

function validate_name() {
  console.log(password.value);
  if (username.value == "") {
    changeClass(tip1, username, "null");
  } else if (validate(username.value, 'username') == false) {
    changeClass(tip1, username, "lenth");
  } else {
    changeClass(tip1, username, "right");
    return true;
  }
}

function confirm_password() {
  if (password2.value == "") {
    changeClass(tip3, password2, "null");
  } else if (password2.value == password.value) {
    changeClass(tip3, password2, 'right')
    return true;
  } else {
    changeClass(tip3, password2, 'unmatch')
  }
}

function validate_email() {
  console.log(email.value);
  if (email.value == "") {
    changeClass(tip4, email, "null");
  } else if (validate(email.value, 'email') == false) {
    changeClass(tip4, email, "format");
  } else {
    changeClass(tip4, email, "right");
    return true;
  }
}

function validate_phone() {
  console.log(phone.value);
  if (phone.value == "") {
    changeClass(tip5, phone, "null");
  } else if (validate(phone.value, 'phone') == false) {
    changeClass(tip5, phone, "format");
  } else {
    changeClass(tip5, phone, "right");
    return true;
  }
}


function validate_form(thisform) {
  var v1 = validate_name();
  var v2 = validate_password();
  var v3 = confirm_password();
  var v4 = validate_email();
  var v5 = validate_phone();
  tip1.style.visibility = "visible";
  tip2.style.visibility = "visible";
  tip3.style.visibility = "visible";
  tip4.style.visibility = "visible";
  tip5.style.visibility = "visible";
  if (v1 & v2 & v3 & v4 & v5) {
    alert("right");
  } else {
    alert("请检查输入，输入有误");
  }
}
