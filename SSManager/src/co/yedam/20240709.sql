create table tbl_student (
	std_no varchar2(10) primary key,
	std_name varchar2(100) not null,
	std_phone varchar2(20), -- 010-1111-2222
	address varchar2(100),
	birth_date date,
	creation_date date default sysdate
);

-- sample data
insert into tbl_student (std_no, std_name, std_phone)
values('S2024-01', '홍길동', '010-1234-5678');

insert into tbl_student (std_no, std_name, std_phone, address)
values('S2024-02', '김길동', '010-3333-4444', '서울 100번지');

insert into tbl_student (std_no, std_name, std_phone)
values('S2024-03', '이창호', '010-5555-7777');

select *
from tbl_student;

update tbl_student
set std_name = '권수민'
where std_no = 'S2024-03';

insert into tbl_student (std_no, std_name, std_phone)
values('S2024-04', '김민규', '010-2222-5678');

delete from tbl_student
where std_no = 'S2024-04';

rollback;

commit;

--생일, 주소 변경
update tbl_student
set    birth_date = to_date('1997-05-05', 'yyyy-mm-dd'),
       address = '대전 200'
where  std_no = 'S2024-01';

update tbl_student
set    birth_date = to_date('2001-05-15', 'yyyy-mm-dd'),
       address = '대구 300'
where  std_no = 'S2024-03';

update tbl_student
set    std_name = '변경값',
       std_phone = '변경값'
where  std_no = 'S2024-02';

update tbl_student
set    birth_date = to_date('2009-07-11', 'yyyy-mm-dd'),
       address = '인천 300'
where  std_no = 'S2024-04';