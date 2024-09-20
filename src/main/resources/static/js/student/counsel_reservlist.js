function cancelReservation(counsel_idx) {
	if (confirm("정말로 해당 상담예약을 취소하시겠습니까?")) {
		document.getElementById("cancel_aply_idx").value = counsel_idx;
		frmCancel.method = "POST";
		frmCancel.action = "./cancel_counsel_reservation";
		frmCancel.submit();
	}
}