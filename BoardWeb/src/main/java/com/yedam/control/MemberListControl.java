package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class MemberListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String res = req.getParameter("res");
		res = res == null ? "1" : res;
		
		String order_by = req.getParameter("order_by");
		order_by = order_by == null ? "1" : order_by;
		
		MemberVO mvo = new MemberVO();
		mvo.setResponsibility(res);
		mvo.setMemberNm(order_by);
		
		MemberService mvc = new MemberServiceImpl();
		List<MemberVO> list = mvc.memberList(mvo);
		req.setAttribute("memberList", list);
		 
		req.getRequestDispatcher("admin/memberList.tiles").forward(req, resp); // 페이지 재지정
	}

}
