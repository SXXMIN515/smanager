package co.yedam.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.vo.StudentVO;

/*
 * 목록(R), 등록(C), 수정(U), 삭제(D)
 * 주의: DAO 메세지가 없음
 */
public class StudentDAO extends DAO{
	
	// 삭제기능
	public boolean deleteStudent(StudentVO svo) {
		String sql = "delete from tbl_student";
		sql += "      where std_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, svo.getStdNo());
			
			int r = psmt.executeUpdate(); // 쿼리 실행
			if(r==1) {
				return true; // 정상처리
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	// 단건조회 -- 수정 1 실행
	public int selectExists(String sno) {
		String sql = "select count(1) from tbl_student";
		sql += "      where std_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sno);
			rs = psmt.executeQuery();
			if(rs.next()) {
				return rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}
	
	// 수정기능 -- 수정 2 실행
	public boolean updateStudent(StudentVO svo) {
		String sql = "update tbl_student ";
		sql += "      set    std_phone = ?";
		sql += "            ,address = ?";
		sql += "      where  std_no = ?";
		conn = getConn();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, svo.getStdPhone());			
			psmt.setString(2, svo.getAddress());			
			psmt.setString(3, svo.getStdNo());
			
			int r = psmt.executeUpdate(); // 쿼리 실행
			if(r==1) {
				return true; // 정상처리
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false; // 비정상처리
	} // end of updateStudent
	
	// 등록기능
	public boolean insertStudent(StudentVO svo) {
		String sql = "insert into tbl_student (std_no, std_name, std_phone, address, birth_date) ";
		sql += "values(?, ?, ?, ?, ?) ";
		conn = getConn();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, svo.getStdNo());
			psmt.setString(2, svo.getStdName());
			psmt.setString(3, svo.getStdPhone());			
			psmt.setString(4, svo.getAddress());			
			psmt.setString(5, svo.getBirthDate());			
			
			int r = psmt.executeUpdate(); // 쿼리 실행
			if(r==1) {
				return true; // 정상처리
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false; // 비정상처리
		
	}
	
	
	// 목록반환기능
	public List<StudentVO> selectList(){
		String sql = "select * from tbl_student order by std_no";
		List<StudentVO> list = new ArrayList<>();
		
		conn = getConn();
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()) {
				StudentVO svo = new StudentVO();
				svo.setAddress(rs.getString("address"));
				svo.setBirthDate(rs.getString("birth_date"));
				svo.setCreationDate(rs.getDate("creation_date"));
				svo.setStdName(rs.getString("std_name"));
				svo.setStdNo(rs.getString("std_no"));
				svo.setStdPhone(rs.getString("std_phone"));
				
				list.add(svo);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	} // end of selectList()
}
