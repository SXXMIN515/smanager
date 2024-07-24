<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<h3>회원목록...</h3>
<ul class="nav nav-pills">
	<c:choose>
		<c:when test="${member.responsibility  == 'User'}">
			<li class="nav-item"><a class="nav-link active"
				aria-current="page"
				href="memberList.do?order=${member.memberNm }&res=${member.responsibility}">사용자</a></li>
		</c:when>
		<c:otherwise>
			<li class="nav-item"><a class="nav-link active"
				aria-current="page"
				href="memberList.do?order=${member.memberNm }&res=${member.responsibility}">관리자</a></li>
		</c:otherwise>
	</c:choose>
</ul>
<table class="table table-success table-striped table-hover">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">아이디</th>
			<th scope="col">비밀번호</th>
			<th scope="col">이름</th>
			<th scope="col">권한</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="member" items="${memberList }" varStatus="stat">
			<tr>
				<td scope="row">${stat.count }</td>
				<td>${member.memberId }</td>
				<td>${member.memberPw }</td>
				<td>${member.memberNm }</td>
				<td>${member.responsibility }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<table class="table table-dark table-hover"></table>