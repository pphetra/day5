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

### แสดงจังหวัด ด้วย react-select

- import components/select/province.json
- กำหนด options ให้กับ `<Select options={...}>`
- ถ้าลองใช้งานดู จะพบว่าเหมือนจะทำงานได้ แต่ไม่ได้แสดงชื่อจังหวัดให้เราเห็น
- การใช้ react-select ถ้า options เราอยู่ในรูปแบบ value, label ก็จะใช้งานได้เลย ไม่ต้องกำหนดอะไรเพิ่ม
  ```javascript
  [
    {
      value: "chocolate",
      label: "Chocolate",
    },
    {
      value: "strawberry",
      label: "Strawberry
    },
  ];
  ```
- แต่ province.json ไม่ได้อยู่ในรูปแบบ label, value ดังนั้นเราต้องบอก react-select ว่า label จะได้มาได้อย่างไร หรือ value จะได้มาได้อย่างไร
  ```javascript
  <Select options={provinces}
   getOptionLabel={(option /* object จังหวัด */) => /* return label ที่จะแสดง */}
   getOptionValue={(option) => /* return value สำหรับ option ที่ pass มา */}
  >
  ```

### ร้อย react-select เข้ากับ form

- ใช้ Controller component ของ react-hook-form เข้ามาครอบ react-select
  ```javascript
  const {control} = useForm();
  ...
  <Controller
    control={control}
    name="province"
    render={({field}) => (
      <Select...>
    )}
  />
  ```
- ร้อย onChange กับ value ของ React-select
  ```javascript
  <Select {...field}
    options=...
  >
  ```
- ถ้าร้อยด้วยวิธี {...field} เราจะได้ value มาเป็น option ทั้งก้อน ถ้าอยากได้แค่ province code หรือ id ให้ดูที่ https://github.com/pphetra/day4/blob/main/documents/address-react-select.md#ร้อยค่าเข้ากับ-react-hook-form

### one-to-many fields

#### ทดลองทำ contact tracing โดยเราจะ capture ผู้สัมผัสผู้ป่วย โดยเก็บข้อมูล

- เลขบัตรประชาชน
- ชื่อ, นามสกุล
- เพศ
- อายุ
- เบอร์โทรศัพท์

#### เปิด file /pages/contacts.tsx
