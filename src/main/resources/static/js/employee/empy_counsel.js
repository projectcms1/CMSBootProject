function counsel_add(){
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

function stdnt_no_check(std_no){
	var counsel_add=document.getElementById("counsel_add");
	if(std_no.length<8){
		alert("학번 8자리를 모두 입력해주세요");
		return false;
	}
	else{
		let formData = new FormData(); 
		formData.append('stdnt_no', std_no);
	
		fetch('http://localhost:8080/employee/empy_counsel_add_stdnt_no_ok.do', {
		    method: 'post', 
		    body: formData,  //전송할 데이터 body에 추가
		})
	    .then(res => res.json()) //응답 결과를 json으로 파싱
	    .then(data => {
	        console.log(data); //응답 결과를 console 창에 출력
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
	        console.log('Fetch Error', err);
	    });
	}  	
}

function pagechange(){
	if(window.location.href.indexOf("?")==-1){
		url=window.location.href;
	}
	else{
		url=window.location.href.substring(0, window.location.href.indexOf("?"));
		var query=window.location.search.split("&");	//쿼리스트링 각각으로 나누기
		var i=0, count=0;
		while(i<query.length){
			if(count==0){
				if(query[i].includes("size")){
					url+="?size="+size;
				}
				else{
					url+="?"+query[i];
				}
			}
			else{
				if(query[i].includes("size")){
					url+="&size="+size;
				}
				else{
					url+="&"+query[i];
				}			
			}
			count++;
			i++;
		}
	}
	console.log(window.location.href.indexOf("?"));
	console.log(url);
	location.href=url;
} 

function perpagesizechange(){
	var perpage = document.getElementById("per-page");
	var size = perpage.options[perpage.selectedIndex].value;
	if(window.location.href.indexOf("?")==-1){
		url=window.location.href;
		url+="?size="+size;
	}
	else{
		url=window.location.href.substring(0, window.location.href.indexOf("?"));
		var query=window.location.search.split("&");	//쿼리스트링 각각으로 나누기
		var i=0, count=0;
		while(i<query.length){
			if(count==0){
				if(query[i].includes("size")){
					url+="?size="+size;
				}
				else if(query[i].includes("page")){
					count--;
				}
				else{
					url+="?"+query[i];
				}
			}
			else{
				if(query[i].includes("size")){
					url+="&size="+size;
				}
				else if(query[i].includes("page")){
					count--;
				}
				else{
					url+="&"+query[i];
				}			
			}
			count++;
			i++;
		}
	}
	location.href=url;
}  	