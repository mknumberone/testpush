//==================BT loop=====================================
//==================Bai 1:So nguyen to =======================
//    var soNguyenTo = true
//    var inputNumber = Number(prompt("Enter your number",0)) 
//     if(inputNumber<2){
//         soNguyenTo=false
//     }
//     if(soNguyenTo){
//         for(var i=2;i<= Math.sqrt(inputNumber);i++){
//             if(inputNumber % i==0){
//                 soNguyenTo =false
//                 break
//             }
//         }
//     }
//     if (soNguyenTo){
//         alert (inputNumber + "" + " Là số nguyên tố")
//     }
//     else{
//         alert(inputNumber + "" + " Không phải là số nguyên tố")
//     }
//================Bai 2:Viet chuong trinh in ra n so nhap tu ban phim=========
// var n = 10
// for(var i=0;i<n;i++){
//     console.log(i);
// }
//================Bai 3:Viết chương trình in ra các số lẻ từ 1 đến n==========
// var n = 10
// for(var i=0;i<n;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }
//===============Bai 4:Viết chương trình in ra các số chẳn từ 1 đến n=========
// var n = 10
// for(var i=0;i<n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//==============Bai 5:Viết chương trình tính tổng từ 1 đến n?=================
// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
 
//     while (index <= n)
//     {
//         tong += index
//         index++
//     }
 
//     document.write("Tổng số  từ 1 tới " + n + " là: " + tong + "<br/>");
// }
// tinh_tong(10)
//==============Bai 6: Viết chương trình tính tổng bình phương của các số từ 1 đến n===
// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
//     while (index <= n)
//     {
//         tong += index*index
//         index++
//     }
//     document.write("Tổng số  từ 1 tới " + n + " là: " + tong + "<br/>");
// }
// tinh_tong(3)
//==============Bai 7:Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// function kiem_tra_snt(n)
// {
//         var flag = true;
//     if (n < 2) {
//         flag = false;
//     }
//     else if (n == 2) {
//         flag = true;
//     }
//     else if (n % 2 == 0) {
//         flag = false;
//     }
//     else {
//         for (var i = 3; i <= Math.sqrt(n); i += 2)
//         {
//             if (n % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
 
//     return flag;
// }
 
// // Hàm in ra các số nguyên tố từ 1 tới n
// function print_snt(number)
// {
//     // Ép number sang kiểu INT
//     number = parseInt(number);
//     // Lặp để in kết quả
//     var html = '';
//     for (var i = 1; i <= number; i++) {
//         // Nếu là số nguyên tố thì in ra
//         if (kiem_tra_snt(i)){
//             html += i + ' <br/>';
//         }
//     }
//    document.write(html)
// }
// print_snt(10)
//==============Bai 8:Tính tổng các số lẻ trong khoảng 1 đến n?
// var n = 6
// var s = 0
// for(var i =0;i<n;i++){
//     if(i%2!=0){
//         s=s+i
//     }
//     console.log(s);
// }
//==============Bai 9: Kiểm tra số n có toàn số lẻ tạo thành hay không======
// var mang =[1,3,5,2,9]
// var trangthai=true
// if(mang%2!=0){
//     trangthai =true
//     console.log("Mảng toàn số lẻ");
// }else{
//     trangthai=false
//     console.log("Mảng không toàn số lẻ");
// }
//==============Bai 10: bâng cuu chuong
// document.write("Bang nhan 2:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 2"+"="+(i*2))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 3:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 3"+"="+(i*3))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 4:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 4"+"="+(i*4))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 5:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 5"+"="+(i*5))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 6:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 6"+"="+(i*6))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 7:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 7"+"="+(i*7))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 8:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 8"+"="+(i*8))
// }
// document.write("</br>===================================");
// document.write("</br>")
// document.write("Bang nhan 9:");
// for(var i =0;i<10;i++){
// document.write("<br/>"+i+"x 9"+"="+(i*9))
// }

//======================================================================
//==============================BT string===============================
//=============Bai 11: Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// var str= " Hello  World"
// var spaceCount = str.split(" ").length - 1
// console.log(spaceCount);
//=============Bai 12:Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// var str= " Hello  World"
// var removeSpace = str.replace(/\s+/g,'')
// console.log(removeSpace);
//============Bai 13:Hãy viết chương trình đảo ngược sau.
// var str = "This is a beautiful day"
// var reveserStr= str.split("").reverse().join("")
// console.log(reveserStr);
//============Bai 14:Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// var str2="is"
// var str = `This ${str2} beautiful day`
// var pos =str.indexOf(`${str2}`)
// console.log(pos);
//===========Bai 15: Viết chương trình lấy  id name của fb.
// var srcFb="https://www.facebook.com/ngothucdat"
// var getName=srcFb.slice(25)
// console.log(getName);
//===========Bai 16: Viết chương trình chuẩn hóa họ tên.
// var str="NguyeN THI tho tHu hA"
// var trueName=str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
// console.log(trueName);
//===========Bai 17:Viết hàm số tính min, max của 3 số
//a tim max
// function findMax(a,b,c){
//      if(a>b && a>c){
//          return a
//      }if(b>c && b>a){
//          return b
//      }if(c>a && c>b){
//          return c
//      }
//     }
// console.log(findMax(2,4,7));
//b tim min
// function findMin(a,b,c){
//     if(a<b && a<c){
//         return a
//     }if(b<c && b<a){
//         return b
//     }if(c<a && c<b){
//      return c
//     }
// }
// console.log(findMin(2,4,7));
//===========Bai 18:Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y
// var str =`This is a beautiful day, is it?`
// var arr = str.split(" ")
// for(var i = arr.length;i>=0;i--){
//     if(arr[i]=="is"){
//         console.log(arr[i]+"-"+i);
//         break
//     }
// }
//===========Bai 19:Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop?
// function sum(n) {
//     if (n < 1) return 0;
//     return n  + sum(n - 1); 
// }
// console.log(sum(9));

///////////////////////////////////BT-Arr
//Bai 21:Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// var numArr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
// var total =numArr.reduce((a,b)=>{
//     return a+b
// })
// console.log("Total :",total);

//Bai 22: Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// var arr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] 
// var maxNum = arr.reduce((a,b)=>{
//    return Math.max(a,b)
// })
// console.log("Max Number :",maxNum);
// var minNum =arr.reduce((a,b)=>{
//     return Math.min(a,b)
//  })
//  console.log("Min Number :",minNum);

//  var total = 0;
//  for(var i = 0; i < arr.length; i++) {
//         total += arr[i];
//  }
//  var avg = total / arr.length;
//  console.log("Number avg :",avg);

//Bai 23:Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// var arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// var maxFre = 1;
// var m = 0;
// var value;
// for (var i=0; i<arr.length; i++)
// {
//         for (var j=i; j<arr.length; j++)
//         {
//                 if (arr[i] == arr[j])
//                  m++;
//                 if (maxFre <m)
//                 {
//                   maxFre =m; 
//                   value= arr[i];
//                 }
//         }
//         m=0;
// }
// console.log("Số xuất hiện nhiều nhất là : "+value+" ( " + maxFre +" lần ) ") ;

//Bài 24: Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// var arr =  [1,2,3,2,3,4,6,7]
// function isPrime(number) {
//     let start = 2;
//     const limit = Math.sqrt(number);
//     while (start <= limit) {
//         if (number % start++ < 1) return false;
//     }
//     return number > 1;
// }
// var result=arr.filter(isPrime)
// console.log(result);

//Bai 25:Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// var arr= [1,2,3,2,3,4,6,7]
// for(var i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i]
// }
// console.log("New Arr :",arr);

//Bai 26: Cho một mảng là một tập các số nguyên dương không trùng giá trị, 
//và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. 
//Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// var a = [1,2,3,4,6,7];
// var k = 7
// var afterK=k+1
// var beforeK=k-1
// console.log("k =",k);
// for(var i=0;i<a.length;i++){
//     if(a[i]==k){
//         a[i]=afterK 
//     }
// }
// console.log("After k =",afterK);
// for(var i=0;i<a.length;i++){
//     if(a[i]==k){
//         a[i]=beforeK
//     }
// }
// console.log("Before k =",beforeK);

//Bai 27:Cho một mảng là một tập hợp các học viên trong lớp REACTJS, 
//mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
//Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và 
//tên dài hơn hoặc bằng 3 ký tự.
// students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// for (let i = 0; i < students.length; i++) {
//     students[i].firstName = students[i].firstName.substring(0, 1).toUpperCase() + (students[i].firstName.substr(1)).toLowerCase();
//     console.log("Student standard name",students[i]);
// }
// console.log("===========================================================================");
// for (let i = 0; i < students.length; i++) {
//     if (students[i].firstName.includes("a")  && students[i].firstName.length >= 3) {
//         console.log("Find name have a:", students[i]);
//     }
// }
// for (let i = 0; i < students.length; i++) {
//     if (students[i].lastName.includes("a")  && students[i].firstName.length >= 3) {
//         console.log("Find name have a:", students[i]);
//     }
// }

//Bai 28: Cho một mảng là một tập hợp các học viên trong lớp REACTJS,
//mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
//Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
//  students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].lastName.includes("Do")) {
//         console.log("Find name have Do:", students[i]);
//     }
// }

//Bai 29: Cho một mảng là một tập hợp các học viên trong lớp REACTJS,
// mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
// Hãy sắp xếp danh sách học viên theo tên (firstName).
// students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// function sortName(nameStudent) {
//     nameStudent.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
//     return nameStudent
// }
// console.log("Sort names student:",sortName(students))
//Bai 30:Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// var a= [1,1,1,1,1,1,1,1,1,1]
// var b = Math.max.apply(Math,a); 
// var c=0
// for(var i=0;i<a.length;i++){
//     if(a[i]==b){
//      c=b-1
//     }
//     if(a[i]==a[i]){
//         c=-1
//        }
// }
// console.log("Second Max: ",c);

//Bai 33: [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
var arr = [9, 8, 7, 6, 4, 5, 3, 2, 1]
function mySort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}
console.log(arr)
console.log(mySort(arr))