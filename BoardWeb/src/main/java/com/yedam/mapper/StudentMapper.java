package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.MemberVO;
import com.yedam.vo.StudentVO;

public interface StudentMapper {
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	int insertStudent(StudentVO svo);
	List<MemberVO> memberList(MemberVO mvo);
	
	
	// 로그인체크.
	MemberVO selectMember(@Param("id") String id, @Param("pw") String pw);
}
