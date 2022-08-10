// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const calTotalPoint = (win,draw) => 3*win + draw
console.log(calTotalPoint(3,2))