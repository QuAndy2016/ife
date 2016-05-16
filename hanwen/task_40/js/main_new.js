/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-07 09:24:33
 * @version $Id$
 */
$(function() {
	var slt_month = $('#slt-month');
	var slt_year = $('#slt-year');
	Cal.initList(); //初始化日历，永远显示最新的日期
	slt_month.blur(function() {
		renew();
	})
	slt_year.blur(function() {
		renew();
	})
});

function renew() {
	var chooseDate = Cal.getDateValue();
	Cal.renewList(chooseDate);
}
