let State = prompt("Nếu bạn là học sinh du học hãy nhập 0, còn lại hãy nhập 1:");
let GPA = prompt("Hãy nhập điểm GPA của bạn:");
if (State == 1){
    if (GPA < 2.5) alert("Input không hợp lệ");
    else if (GPA >= 2.5 && GPA <= 4.0) alert("Không được hỗ trợ học bổng");
    else alert("Input không hợp lệ");
}
else if (State == 0){
    if (GPA < 2.5) alert("Input không hợp lệ");
    else if (GPA >= 2.5 && GPA < 3.2) alert("Bạn nhận được học bổng 10%");
    else if (GPA >= 3.2 && GPA < 3.6) alert("Bạn nhận được học bổng 20%");
    else if (GPA >= 3.6 && GPA <= 4.0) alert("Bạn nhận được học bổng 50%");
    else alert("Input không hợp lệ");
}