// ให้เขียนฟังก์ชันด้านล่างให้อยู่ในรูปแบบ Arrow Function

// js
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask('Do you agree?', 
//   function () { alert('You agreed.'); },
//   function () { alert('You canceled the execution.'); }
// );


let ask = (questtion, yes ,no) => {

    return confirm(questtion) ? yes() : no();
}

ask('Do you agree?', function () { alert('You agreed.'); }, 
function () { alert('You canceled the execution.'); });

console.log(questtion)