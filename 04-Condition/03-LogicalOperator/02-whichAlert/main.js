// โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน


if (-1 || 0) alert("first"); // yes

if (-1 && 0) alert("second"); // no

if (null || (-1 && 1)) alert("third"); // yes

