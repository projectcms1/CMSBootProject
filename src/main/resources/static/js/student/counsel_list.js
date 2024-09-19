function list_search() {
	console.log("test");
	frmSearch.method = "GET";
	frmSearch.action = "./std_counsel_list?search_part="
			+ frmSearch.inputState.value
			+ "&search_word="
			+ search_frm.search_word.value;
	return true;
}

function move_page(e) {
	console.log("test" + e);
}