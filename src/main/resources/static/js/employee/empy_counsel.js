function changeCounselStatue(statue, aply_sn, message){
	
	if(confirm("정말로 "+message+" 하시겠습니까?")){
		document.querySelector("input[name='statue']").value=statue;
		document.querySelector("input[name='aply_sn']").value=aply_sn;
		counsel_form.method="post";
		counsel_form.action=window.location.href.substring(0, window.location.href.indexOf("?"));
		counsel_form.submit();		
	}
}