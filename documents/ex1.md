## Exercise 1

- เปิด url /todo
- refactor components/todo/index.jsx
  - ย้ายการ render item ไปอยู่ที่ components/todo/todoItem.jsx
  - ย้ายการ render form ไปอยู่ที่ components/todo/todoForm.jsx
  - สร้าง state เพื่อรองรับการ initialTodos ที่ pass มาจาก /page/todo/index.jsx
  - สร้าง callback onAdd เพื่อส่งต่อให้ todoForm นำไปใช้ add item ใหม่เข้าสู่ state
  - render items ใน state ด้วย todoItem component

```javascript
[1,2,3].map(x => x * 2) // [2, 4, 6]
[1,2,3].map(x => <MyNumber key={x} value={x}/>) // [MyNumber instance 1, MyNumber instance 2, MyNumber instance 3]

xs = [1,2,3]
[...xs, 4] // [1,2,3,4]
[4, ...xs] // [4,1,2,3]

```
