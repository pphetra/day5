## one-to-many fields

### ทดลองทำ contact tracing โดยเราจะ capture ผู้สัมผัสผู้ป่วย โดยเก็บข้อมูล

- เลขบัตรประชาชน
- ชื่อ, นามสกุล
- เพศ
- อายุ
- เบอร์โทรศัพท์
- จังหวัด

### เปิด file /pages/contacts.tsx

```html
<table className="w-full">
  <thead>
    <tr className="bg-gray-200 text-center h-12">
      <td className="">เลขบัตรประชาชน</td>
      <td>ชื่อสกุล</td>
      <td>เพศ</td>
      <td>อายุ</td>
      <td>เบอร์โทร</td>
      <td>จังหวัด</td>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center border-b h-10">
      <td>1234567890123</td>
      <td>นาย สมชาย สมบัติ</td>
      <td>ชาย</td>
      <td>30</td>
      <td>0812345678</td>
      <td>กรุงเทพมหานคร</td>
    </tr>
  </tbody>
</table>
```

### ลองร้อย form input เข้ากับแต่ละ cell

เลขบัตร

```jsx
<input className="border rounded w-full" type="text" {...register("nid")} />
```

ชื่อ-สกุล

```jsx
<input className="border rounded w-full" type="text" {...register("name")} />
```

เพศ

```jsx
<div className="flex flex-row items-center gap-2">
  <input type="radio" id="male" value="M" {...register("gender")} />
  <label htmlFor="male">ชาย</label>
  <input type="radio" id="female" value="F" {...register("gender")} />
  <label htmlFor="female">หญิง</label>
</div>
```

อายุ

```jsx
<input className="border rounded w-full" type="number" {...register("age")} />
```

เบอร์โทรศัพท์

```jsx
<input
  className="border rounded w-full"
  type="text"
  {...register("telephone")}
/>
```

จังหวัด

```jsx
<Controller
  name="province"
  control={control}
  render={({ field }) => (
    <Select
      options={provinces}
      getOptionLabel={(option) => option.PROVINCE_NAME}
      getOptionValue={(option) => option.PROVINCE_CODE}
    />
  )}
/>
```

### ใช้ useFieldArray

```javascript
const { fields, append, prepent, remove, swap, move, insert } = useFieldArray({
  control,
  name: "contacts" /* name ของ array ที่จะปรากฎใน data ที่ submit */,
});
```

ครอบ `<tr>` ด้วย fields.map

```jsx
{
  fields.map((field, index) => {
    return <tr key={field.id}>...</tr>;
  });
}
```

เปลี่ยนการ register จาก name เป็น array[index].name

```jsx
<input
  className="border rounded w-full"
  type="text"
  {...register(`contact.${index}.nid`)}
/>
```

ีระวังเรื่อง id ของ radio ที่ต้องปรับให้เป็น array index ด้วย

```jsx
<td>
  <div className="flex flex-row items-center gap-2">
    <input
      type="radio"
      id={`${index}.male`}
      value="M"
      {...register(`contacts.${index}.gender`)}
    />
    <label htmlFor={`${index}.male`}>ชาย</label>
    <input
      type="radio"
      id={`${index}.female`}
      value="F"
      {...register(`contacts.${index}.gender`)}
    />
    <label htmlFor={`${index}.female`}>หญิง</label>
  </div>
</td>
```

ตัว React-select จังหวัด

```jsx
<Controller
  name={`contacts.${index}.province`}
  control={control}
  render={({ field }) => (
    <Select
      {...field}
      options={provinces}
      getOptionLabel={(option) => option.PROVINCE_NAME}
      getOptionValue={(option) => option.PROVINCE_CODE}
    />
  )}
/>
```

ทำปุ่มเพิ่มรายการ

```jsx
<button
  type="button"
  className="border bg-green-500 text-white px-4 py-2 rounded mt-4"
  onClick={() => {
    append({
      nid: "",
      name: "",
      age: "",
      telephone: "",
      province: "",
      gender: "",
    });
  }}
>
  Add
</button>
```

ทำปุ่ม delete

```jsx
<button type="button" onClick={() => remove(index)}>
  Delete
</button>
```
