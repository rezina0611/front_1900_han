"use strict";
// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// postTitle만 콘솔에 출력하기
// 1) fetching 후 전체를 console.log로 출력
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = async () => {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await respone.json();
    return user;
};
getUsers().then(console.log);
//# sourceMappingURL=generic-task.js.map