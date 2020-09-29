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

