// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // "Execute modal"
```

```js
const showModal = alert();
showModal("Execute modal"); // ** alert ไม่มีข้อความขึ้น ในวงเล็บ alert ไม่มีข้อความ
```
