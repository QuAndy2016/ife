var Cal = (function() {
  var new_today = 1;
  var private_property = 0,
    list_year = $('#slt-year'),
    list_day = $('#list-days'),
    list_
    /*内部函数：用于检测是否是闰年*/
  var test_year = function(year) {
      if (year % 4 == 0) {
        return "leap year";
      } else {
        return "normal year";
      }
    }
    //内部函数：用于处理添加&nbsp
  var nbsp = function(n) {
      var nbspn = []
      for (i = 0; i < n; i++) {
        nbspn.push("&nbsp");
      }
      return nbspn;
    }
    //内部函数
  var newdays = function(n) {
      var day = [];
      for (i = 1; i <= n; i++) {
        day.push(i);
      }
      return day;
    }
    //更新日历表
  var renewDays = function(weeknum,day, today) {
      console.log(week);
      var day_lenth = day.length;
      console.log(day_lenth);
      while (day_lenth < 42) {
        day.push("&nbsp");
        day_lenth = day_lenth + 1;
      }
      console.log(day);
      var list_day = $('#list-days');
      var list_week = $('#list-weeks');
      list_day.empty(); //首先清空列表
      list_week.empty();
      //增加元素
      /*添加周元素*/
      var week = ['日', '一', '二', '三', '四', '五', '六']
      for (i = 0; i < 7; i++) {
        var li = '<li>' + week[i] + '</li>';
        list_week.append(li)
      }
      /*添加日期元素*/
      for (i = 0; i < day.length; i++) {
        var li = '<li>' + day[i] + '</li>';
        list_day.append(li);
      }
      //选择日期元素添加阴影样式
      var lists = list_day.children();
      console.log(today);
      console.log(weeknum);
      var index=parseInt(today)+parseInt(weeknum);
      console.log(index);
      var today_list = lists[index- 1];
      console.log(today_list);
      today_list.className = 'active';

      //给所有日期li绑定点击方法
      lists.bind("click", function() {
        //清空所有lists元素的类
        lists.each(function() {
          $(this).removeClass();
        })
        $(this).addClass('active');
        var day = $(this)[0].innerText;
        new_today = day;
        var chooseDate = Cal.getDateValue();
        Cal.renewInput(chooseDate, day);
      });
      console.log(list_day);
    }
    //days表示这个月有多少天，week表示这个月1号是星期几
  var createDay = function(week, days, today) {
    var day = newdays(days); //newdays()用于创建数组
    switch (week) {
      case 0:
        renewDays(week,day, today);
        break;
      case 1:
        day = nbsp(1).concat(day);
        renewDays(week,day, today);
        break;
      case 2:
        day = nbsp(2).concat(day);
        renewDays(week,day, today);
        break;
      case 3:
        day = nbsp(3).concat(day);
        renewDays(week,day, today);
        break;
      case 4:
        day = nbsp(4).concat(day);
        renewDays(week,day, today);
        break;
      case 5:
        day = nbsp(5).concat(day);
        renewDays(week,day, today);
        break;
      case 6:
        day = nbsp(6).concat(day);
        renewDays(day, today, info);
        break;
    }
  }
  
  return {
    /*初始化列表，计算当月的1号的星期*/
    initList: function() {
      var d = new Date();
      var mounth = d.getMonth();
      var year = d.getFullYear();
      var i = year - 2000;
      var days = 31;
      console.log(mounth);
      console.log(year);
      var myDate = new Date(year, mounth, 1); //m
      console.log(myDate);
      var today = d.getDate();
      var week = myDate.getDay();
      console.log(today);
      $('#slt-year')[0][i].selected = true; //更新年份为默认今年
      $('#slt-month')[0][mounth].selected = true;
      // createDay(week, days);
      createDay(week, days, today);
    },
    //公共函数，用于更新日历列表
    renewList: function(date) {
      var mounth = date[1];
      var year = date[0];
      if (year % 4 == 0) {
        var mounths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      } else {
        var mounths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      }
      var days = mounths[mounth - 1];
      var myDate = new Date(year, mounth - 1, 1);
      console.log("myDate" + myDate);
      var week = myDate.getDay();
      console.log("week" + week);
      console.log(days);
      var today = new_today;
      createDay(week, days, today); // body...  
    },
    //公共函数：用于更新input框
    renewInput: function(chooseDate, day) {
      var mounth = chooseDate[1];
      var year = chooseDate[0];
      var input = year + '-' + mounth + '-' + day;
      console.log(input);
      $('#date-input').val(input);
    },
    //公共函数：用于获取用户输入
    getDateValue: function() {
      var chooseDate = [];
      console.log("getDateValue()");
      $('#slt-year').children().each(function() {
        if ($(this)[0].selected == true) {
          var temp = parseInt($(this).text());
          chooseDate.push(temp);
        }
      })
      $('#slt-month').children().each(function() {
        if ($(this)[0].selected == true) {
          var temp = parseInt($(this).text());
          chooseDate.push(temp);
        }
      })
      chooseDate.push(1);
      console.log(chooseDate);
      return chooseDate;
    }
  }
}());