package com.yedam.common;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest {
	public static void main(String[] args) {
		BoardService svc = new BoardServiceImpl();
		SearchVO search = new SearchVO();
		search.setSearchCondition("T");
		search.setKeyword("28372");
		search.setPage(1);
		
		svc.boardList(search).forEach(System.out::println);
		System.out.println("- End -");
	}
}
