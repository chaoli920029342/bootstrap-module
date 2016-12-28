!(function(){
	$.fn.formjs=function(options){
		var opt=$.fn.extend({},$.fn.formjs.defaults,options);
		return this.each(function(){
			var form = $(this);
			var formgroup = $(this).find("form-group");
			var linfo = $(this).find(".l-info");
			var rinfo = $(this).find(".r-info");
			linfo.css({
				"font-size":opt.fontsize
			});
			rinfo.css({
				"width":form.width()-linfo.width()-20
			});
			
		});
	};
	$.fn.formjs.defaults = {
		fontsize:16,
		bordercolor:"#4db6ac"
	}
})(jQuery)