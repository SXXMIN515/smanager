<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    

	<h3>삭제(removeForm.jsp)</h3>	
	<form action="deleteBoard.do">
	<input type="hidden" name="bno" value="${board.boardNo }">
	<input type="hidden" name="page" value="${page }">
	<table class="table">
		<tr>
			<th class="col-sm-3">글번호</th><td class="col-sm-3">${board.boardNo }</td>
			<th class="col-sm-3">조회수</th><td class="col-sm-3">${board.viewCnt }</td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan="3">${board.title }</td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="3">${board.content }</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td colspan="3">${board.writer }</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<input class = "btn btn-danger" type="submit"  value="삭제">
				<button class = "btn btn-warning" type="button">수정</button>
			</td>
		</tr>
	</table>
	</form>
