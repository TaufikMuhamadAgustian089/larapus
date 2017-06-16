$(document).ready(function(){
	$(document.body).on('submit','.js-confirm', function(){
		var $el = $(this)
		var text = $el.data('confirm')? $el.data('confirm'):'Anda yakinmelakukan tindakan ini?'
	
	var c=confirm(text);
	return c;
});
});