# Day 5

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

## Excercise 2

ใช้ react-hook-form เพื่อร้อย form

- เปิด url /form1
- ของเดิม input ทั้งหลายยังไม่ได้ร้อยเข้า react-hook-form ให้ register input
  - เรียกใช้ react-hook-form
    ```javascript
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    ```
  - ร้อยแต่ละ input element
    ```javascript
    {...register("ชื่อ field", { required: "กรุณาป้อนชื่อ" })}
    ```
- ร้อย form submit ด้วย handleSubmit
  ```javascript
  onSubmit={handleSubmit(onSubmit)}
  ```
- validation ให้ใช้ validation ของ react-hook-form
  - validate required สำหรับทุก field
  - แสดง error message กรณี validate ไม่ผ่าน
    ```javascript
    errors.name?.message;
    ```
  - validate confirmPassword ต้องเท่ากับ password
    - hint: ใช้ watch และ custom validate function
      ```javascript
      {...register("confirmPassword", {
        required: "กรุณาระบุ password",
        validate: (value) => {
          /* return error message กรณีไม่ผ่าน validate */
          /* return true กรณี validate ผ่าน
        }
      })}
      ```

## React select Exercise
