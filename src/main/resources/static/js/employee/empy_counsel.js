function changeCounselStatue(statue, aply_sn, message){
	
	if(confirm("정말로 "+message+" 하시겠습니까?")){
		document.querySelector("input[name='statue']").value=statue;
		document.querySelector("input[name='aply_sn']").value=aply_sn;
		counsel_form.method="post";
		counsel_form.action=window.location.href.substring(0, window.location.href.indexOf("?"));
		counsel_form.submit();		
	}
}

function counsel_extend_check(checked){
	if(checked==true){
		rsvt_dt.disabled=false;
		hr_se.disabled=false;
		lastcounsel.counsel_extend_ck.value="Y";
		return true;
	}
	else{
		rsvt_dt.disabled=true;
		hr_se.disabled=true;
		lastcounsel.counsel_extend_ck.value="N";
		return false;
	}
}

function counsel_finish(){
	if(dscsn_cn.value.length<20){
		alert("상담결과는 20자 이상 입력해주세요");
		dscsn_cn.focus();
		return false;
	}
	else{
		if(counsel_extend.checked==true){
			if(document.querySelector("input[name='rsvt_dt']").value==""){
				alert("상담날짜를 선택해주세요.");
				document.querySelector("input[name='rsvt_dt']").focus();
				return false;
			}
			else if(document.querySelector("select[name='hr_se']").value==""){
				document.querySelector("select[name='hr_se']").focus();
				alert("상담시간을 선택해주세요.");
				return false;
			}
			else{
				lastcounsel.submit();
			}
		}
		else{
			lastcounsel.submit();
		}
	}
}