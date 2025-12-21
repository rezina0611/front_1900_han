/**학교를 다니고 있는 학생의 총 수 구하기
 * 학교(School) 클래스 하나 생성
 * 필드(학번, 이름, 나이)
 * 3명의 학생 객체화 후 static 필드의 학생 수 출력
 * 
 * 학교 학생 정보를 저장하고 학생 수를 관리하는 클래스
 */

// 다시 작업할것

// class School {
//   static total = 0

//   constructor(student_id, name, age) { 
//     this.student_id = student_id
//     this.name = name
//     this.age = age
//   }
// }

// const s001 = new School("20250001", '홍길동', 15)
// const s002 = new School("20250002", '춘향이', 14)
// const s003 = new School("20250003", '준식이', 17)





//선생님것
class School{
    static count = 0;  //정적변수

    // 스태틱 블록 
    // 클래스가 객체화 될 때 최초 1번만 실행되는 문장
    static {
        console.log("학교가 개강되었습니다.")
    }

    // 초기화
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;

        School.count++;
    }

    static showCount(){
        console.log(School.count)
    }

}

const hong = new School(1, '홍길동', 20);
const kim = new School(2, '김세환', 17);
const jang = new School(3, '장보고', 30);
const lee = new School(4, '이순신', 40);

School.showCount()