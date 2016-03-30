var $ = function(id) {
  return document.getElementById(id);
}
var username = $("username"),
  password = $("password"),
  password2 = $("password2"),
  email = $("email"),
  phone = $("phone");
var tip1 = $("tip1"),
  tip2 = $("tip2"),
  tip3 = $("tip3"),
  tip4 = $("tip4"),
  tip5 = $("tip5");

var trimReg = /^\s+|\s+$/g; // 去除首尾空格
var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g; //用两个字符替换汉字
var lenReg = /^.{4,16}$/; // 长度验证
var passwordReg = /^[A-Za-z0-9]{6,16}/; //密码验证
var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/; //邮箱验证
var phoneReg = /0?(13|14|15|18)[0-9]{9}/; //手机验证

//声明一个表单的对象，这个对象有obj1——输入框，obj2——提示栏，tips——提示信息，regstr——正则验证
function Form(obj1, obj2, tips, regstr) {
  this.obj1 = obj1;
  this.obj2 = obj2;
  this.tips = tips;
  this.regstr = regstr;
}

Form.prototype.validate = function() {
  var value = this.obj1.value;
  var testStr = value.replace(trimReg, '').replace(chineseReg, '--'); //去除首尾空格，中文用两个字符串表示
  var result = this.regstr.test(testStr);
  if (value == "") {
    this.changeClass("null")
  } else if (!result) {
    this.changeClass(this.tips);
  } else {
    this.changeClass("right");
    return true;
  }
  return !passwordReg.test(value)
}

Form.prototype.focusEvent = function() {
  this.obj2.style.visibility = "visible";
}

function changeStyle(obj1, obj2, color1, color2, tip) {
  obj2.innerText = tip;
  obj2.style.color = color2;
  obj1.style.borderColor = color1;
}
Form.prototype.changeClass = function(str) {
  if (str == "null") {
    changeStyle(this.obj1, this.obj2, "#DE0012", "#DE0012", "长度不能为空");
  } else if (str == "lenth") {
    changeStyle(this.obj1, this.obj2, "#DE0012", "#DE0012", "长度为4~16个字符");
  } else if (str == "right") {
    changeStyle(this.obj1, this.obj2, "#60BB44", "#60BB44", "名称格式正确");
  } else if (str == "format") {
    changeStyle(this.obj1, this.obj2, "#DE0012", "#DE0012", "格式不正确");
    this.obj2.innerText = "格式不正确";
  } else if (str == "unmatch") {
    changeStyle(this.obj1, this.obj2, "#DE0012", "#DE0012", "与密码输入不相同");
  } else if (str == "passlenth") {
    changeStyle(this.obj1, this.obj2, "#DE0012", "#DE0012", "长度为6~16个字符");
  }
}

var usernameForm = new Form(username, tip1, "lenth", lenReg),
  passwordForm = new Form(password, tip2, "passlenth", passwordReg),
  confirmForm = new Form(password2, tip3, "unmatch", ""),
  emailForm = new Form(email, tip4, "format", emailReg),
  phoneForm = new Form(phone, tip5, "format", phoneReg);

confirmForm.validate = function() {
  if (password2.value == "") {
    this.changeClass("null");
  } else if (this.obj1.value == password.value) {
    this.changeClass("right");
    return true;
  } else {
    this.changeClass(this.tips);
  }
}
username.onfocus = function() {
    usernameForm.focusEvent();
  }
  //password.onfocus = passwordForm.focusEvent(); 即使我没有点击也会出现提示
password.onfocus = function() {
  passwordForm.focusEvent();
}
password2.onfocus = function() {
  confirmForm.focusEvent();
}
email.onfocus = function() {
  emailForm.focusEvent();
}
phone.onfocus = function() {
  phoneForm.focusEvent();
}

username.onblur = function() {
  usernameForm.validate();
}
password.onblur = function() {
  passwordForm.validate();
}
password2.onblur = function() {
  confirmForm.validate();
}
email.onblur = function() {
  emailForm.validate();
}
phone.onblur = function() {
  phoneForm.validate();
}

function validate_form(thisform) {
  usernameForm.focusEvent();
  passwordForm.focusEvent();
  confirmForm.focusEvent();
  emailForm.focusEvent();
  phoneForm.focusEvent();
  if (usernameForm.validate()& passwordForm.validate()& confirmForm.validate()& emailForm.validate()& phoneForm.validate()) {
    alert("right");
  } else {
    alert("请检查输入，输入有误");
  }
}
//console.log(usernameForm.focusEvent())
