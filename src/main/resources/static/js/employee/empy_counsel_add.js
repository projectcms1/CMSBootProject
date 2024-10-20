function counsel_add(){	//상담을 추가할 때 모든 정보들이 입력되었는지 체크하는 함수
	if(document.querySelector("input[name='std_name_ck']").value!="true"){
		alert("올바른 학번을 입력해주세요.");
		return false;
	}
	else if(document.querySelector("input[name='rsvt_dt']").value==""){
		document.querySelector("input[name='rsvt_dt']").focus();
		alert("상담일자를 선택해주세요.");
	}
	else if(document.querySelector("select[name='hr_se']").value==""){
		document.querySelector("select[name='hr_se']").focus();
		alert("상담시간을 선택해주세요.");
	}
	else if(document.querySelector("select[name='dscsn_knd']").value==""){
		document.querySelector("select[name='dscsn_knd']").focus();
		alert("상담종류를 선택해주세요.");
	}
	else if(document.querySelector("select[name='dscsn_mthd']").value==""){
		document.querySelector("select[name='dscsn_mthd']").focus();
		alert("상담방식을 선택해주세요.");
	}
	else{
		if(confirm("입력하신 정보로 상담을 추가하시겠습니까?")){
			return true;
		}
	}
	return false;
	
}

function stdnt_no_check(std_no){	//학번으로 학생 이름을 불러오는 함수
	if(std_no.length<8){
		alert("학번 8자리를 모두 입력해주세요");
		return false;
	}
	else{	//학번8자리가 입력되었을 시 DB Post 통신으로 학생 이름을 불러옴
		let formData = new FormData(); 
		formData.append('stdnt_no', std_no);
	
		fetch('/employee/empy_counsel_add_stdnt_no_ok.do', {
		    method: 'post', 
		    body: formData,  //전송할 데이터 body에 추가
		})
	    .then(res => res.json()) //응답 결과를 json으로 파싱
	    .then(data => {
			if(data.stdnt_name==null){
				document.querySelector("input[name='stdnt_flnm']").value="존재하지 않는 사용자입니다.";
				document.querySelector("input[name='stdnt_flnm']").style.color="#FF0000";
				document.querySelector("input[name='std_name_ck']").value="false";
			}	
			else{
				document.querySelector("input[name='stdnt_flnm']").value=data.stdnt_name;
				document.querySelector("input[name='stdnt_flnm']").style.removeProperty('color');
				document.querySelector("input[name='std_name_ck']").value="true";
			}	
	    })
	    .catch(err => { // 오류 발생시 오류를 담아서 보여줌
	        console.log(err);
	    });
	}  	
}