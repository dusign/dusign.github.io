/**
 * @Title: search.js
 * @Description: search and display article
 * Copyright: Copyright©2019
 * Company: moyan
 * 
 * @Author dusign
 * @Date 2019.11.09
 * @Version V1.1
 */

$(document).ready(function(){
	$(".search-img").click(function(){
		alert($("#search-kw").val());
		$("#search-kw").val('');
	});

	$("#search-kw").keydown(function(e){
		if(e.keyCode == 13){
			alert($(this).val());
			$(this).val('');
		}
	});
});