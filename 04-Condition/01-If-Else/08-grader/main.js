// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F





	var score = prompt('Your Score')
	if(score == "") alert("Input Score");    
    else if(isNaN(score)) alert("Input Incorrect");
        
    else if(score < 50) alert("Your Grade : F");
    else if(score < 60) alert("Your Grade : D");
    else if(score < 70) alert("Your Grade : C");
    else if(score < 80) alert("Your Grade : B");
    
    else alert("Your Grade : A");
        
        