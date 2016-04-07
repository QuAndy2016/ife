var $ = function(id) {
  return document.getElementById(id);
}
var onCompus = $("compusRadios-ele1");
var disCompus = $("compusRadios-ele2");
var studentForm = $("studentForm")
var jobForm = $("jobForm")
var city = $("studentForm-city")
var school = $("studentForm-school")
var cities = [{
  city: '北京',
  schools: [
    '北京大学',
    '清华大学',
    '人民大学',
    '北京交通大学'
  ]
}, {
  city: '上海',
  schools: [
    '复旦大学',
    '同济大学',
    '上海交通大学',
    '上海财经大学'
  ]
}, {
  city: '成都',
  schools: [
    '四川大学',
    '电子科技大学',
    '西南交通大学',
    '西南财经大学'
  ]
}]
onCompus.onclick = function() {
  if (onCompus.checked) {
    jobForm.style.display = "none";
    studentForm.style.display = "block";
  }
}

disCompus.onclick = function() {
  if (disCompus.checked) {
    studentForm.style.display = "none";
    jobForm.style.display = "block";
  }
}
city.onclick = function() {
  console.log(city.value);
  var cityNum = parseInt(city.value);
  console.log(cities[cityNum]);
  schoolAppend(cityNum);
}

function schoolAppend(cityNum) {
  console.log(school);
  var str = "";
  for (i = 0; i < cities[cityNum].schools.length; i++) {
    console.log(cities[cityNum].schools[i])
    str += "<option>" + cities[cityNum].schools[i] + "</option>"
  }
  school.innerHTML = str;
}
