package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.control.ActionControl;
import com.yedam.control.AddBoardControl;
import com.yedam.control.AddReplyControl;
import com.yedam.control.AddStudent;
import com.yedam.control.Board;
import com.yedam.control.BoardForm;
import com.yedam.control.BoardListControl;
import com.yedam.control.CntByMember;
import com.yedam.control.DeleteBoard;
import com.yedam.control.GoogleChart;
import com.yedam.control.ImageDownload;
import com.yedam.control.LoginControl;
import com.yedam.control.LoginForm;
import com.yedam.control.LogoutControl;
import com.yedam.control.MemberListControl;
import com.yedam.control.StudentListControl;
import com.yedam.control.UpdateBoard;
import com.yedam.control.ModifyBoard;
import com.yedam.control.PagingCount;
import com.yedam.control.RemoveBoard;
import com.yedam.control.RemoveReplyControl;
import com.yedam.control.RemoveStudent;
import com.yedam.control.ReplyListControl;
import com.yedam.control.ScriptControl;
import com.yedam.control.StudentJson;

/*
 * FrontController 역할은 사용자의 모든 요청을 처리.
 * 서블릿. a.do, sample.do
 * 객체생성 -> init -> service -> destroy.
 */
public class FrontController extends HttpServlet {
	Map<String, Control> map;
	
	public FrontController() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl());
		// 글등록 구현: 등록화면(boardForm.do) + DB등록(addBoard.do) -> 글목록페이지이동.
		map.put("/boardForm.do", new BoardForm());
		map.put("/addBoard.do", new AddBoardControl());
		map.put("/board.do", new Board());
		// 삭제
		map.put("/removeBoard.do", new RemoveBoard()); // 삭제화면
		map.put("/deleteBoard.do", new DeleteBoard()); // 삭제처리
		// 수정
		map.put("/modifyBoard.do", new ModifyBoard()); // 수정화면
		map.put("/updateBoard.do", new UpdateBoard()); // 수정처리
		
		// 로그인.
		map.put("/loginForm.do", new LoginForm()); // 로그인화면 open
		map.put("/login.do", new LoginControl()); // 로그인 기능.
		map.put("/logout.do", new LogoutControl()); // 로그아웃 기능.		
		
		// 학생목록.
		map.put("/stdList.do", new StudentListControl());
		// 태그연습
		map.put("/action.do", new ActionControl());
		
		// 관리자가 사용하는 기능들..ex)회원목록.
		map.put("/memberList.do", new MemberListControl());
		
		// 자바스크립트 연습하는 페이지 호출.
		map.put("/javascript.do", new ScriptControl());
		// 학생정보를 반환해주는 페이지(json).
		map.put("/studentJson.do", new StudentJson());
		// 학생정보(학번기준)삭제
		map.put("/removeStudent.do", new RemoveStudent());
		// 등록.
		map.put("/addStudent.do", new AddStudent());
		
		// 목록.
		map.put("/replyList.do", new ReplyListControl());
		// 등록.
		map.put("/addReply.do", new AddReplyControl());
		// 삭제.
		map.put("/removeReply.do", new RemoveReplyControl());
		// 페이징을 위한 전체건수.
		map.put("/pagingCount.do", new PagingCount());
		// 이미지 다운로드
		map.put("/imageDownload.do", new ImageDownload());
		// 작성자별 게시건수.
		map.put("/countByMember.do", new CntByMember());
		// 차트페이지.
		map.put("/googleChart.do", new GoogleChart());
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//boardList.do -목록. addBoard.do -등록.
		String uri = req.getRequestURI(); // /BoardWeb/boardList.do     URL(http://localhost/BoardWeb/boardList.do) vs. URI
		String context = req.getContextPath(); // 프로젝트 명.
		String path = uri.substring(context.length()); // "/boardList.do"
		
		System.out.println(path); // /board.do
		Control sub = map.get(path);
		sub.exec(req, resp);
		
	}
}
