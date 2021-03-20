$(function(){
	var decimal = $('.js-decimal');
	decimal.maskMoney();
	
	var plain = $('.js_plain');
	plain.maskMoney({precision: 0});
});