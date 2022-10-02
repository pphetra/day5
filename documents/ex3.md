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
