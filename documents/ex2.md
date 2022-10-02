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
