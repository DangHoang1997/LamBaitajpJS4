// var arrStudents = [];

// var data = localStorage.getItem('Hoàng_Đăng')
// var svarr = JSON.parse(data);
// for(var i =0 ; i < svarr.length ; i++){
//     var x = svarr[i]
//     var students = {
//         code : x.code,
//         name : x.name,
//         Email : x.Email,
//         pass : x.pass,
//         toan : x.toan,
//         ly : x.ly,
//         hoa : x.hoa,
//         getTB : function (){
//            return  (this.toan + this.ly + this.hoa) /3
//         }

//     }
//     arrStudents.push(students);
//     var tb = students.getTB();

// }
// console.log(sv);

// function tagID(id){
//     return document.getElementById(id);
// };

// function getInput(){
//     let code = tagID('txtMaSV').value;
//     let name = tagID('txtTenSV').value;
//     let Email = tagID('txtEmail').value;
//     let pass = tagID('txtPass').value;
//     let toan = tagID('txtDiemToan').value*1;
//     let ly = tagID('txtDiemLy').value*1;
//     let hoa = tagID('txtDiemHoa').value*1;

//     var sv = {
//         code : code,
//         name : name,
//         Email : Email,
//         pass : pass,
//         toan:toan,
//         ly : ly,
//         hoa : hoa,
//         getTB  : function (){
//             return (this.toan + this.ly + this.hoa)/3
//         }
//     }
//     return sv;
// }

// function callListStudents(){
//     let output = "";
//     for(let index =0 ; index < arrStudents.length; index++ ){
//         let item = arrStudents[index];
//         let St = `
//         <tr>
//         <td>${item.code}</td>
//         <td>${item.name}</td>
//         <td>${item.Email}</td>
//         <td>${item.getTB().toFixed(2)}</td>
//         <td>
//         <button onclick = "deleCode('${item.code}')">Dele</button>
//         <button onclick = "editCode('${item.code}')">Edit</button>
//         </td>

//         </tr>`
//         output += St;

//     }
//     tagID('tbodySinhVien').innerHTML = output;
// }

// function addStudents(){

//     var sv = getInput();
//     arrStudents.push(sv);
//     var JSONARR = JSON.stringify(arrStudents);
//     localStorage.setItem('Hoàng Đăng',JSONARR);

//     callListStudents();
// }

// function deleCode(code){
//     var index = arrStudents.findIndex(item => item.code === code)
//     if(index !==-1){
//         arrStudents.splice(index ,1);
//         var JSONARR = JSON.stringify(arrStudents);

//         localStorage.setItem('Hoàng_Đăng',JSONARR);

//         callListStudents();

//     }

// }
var arrStudents = [];

var data = localStorage.getItem("Hoàng_Đăng");
if (data) {
  var svarr = JSON.parse(data);
  for (var i = 0; i < svarr.length; i++) {
    var x = svarr[i];
    var students = {
      code: x.code,
      name: x.name,
      Email: x.Email,
      pass: x.pass,
      toan: x.toan,
      ly: x.ly,
      hoa: x.hoa,
      getTB: function () {
        return (this.toan + this.ly + this.hoa) / 3;
      },
    };
    arrStudents.push(students);
  }
}

console.log(arrStudents); // Sửa lại ở đây

function tagID(id) {
  return document.getElementById(id);
}

function getInput() {
  let code = tagID("txtMaSV").value;
  let name = tagID("txtTenSV").value;
  let Email = tagID("txtEmail").value;
  let pass = tagID("txtPass").value;
  let toan = tagID("txtDiemToan").value * 1;
  let ly = tagID("txtDiemLy").value * 1;
  let hoa = tagID("txtDiemHoa").value * 1;

  var sv = {
    code: code,
    name: name,
    Email: Email,
    pass: pass,
    toan: toan,
    ly: ly,
    hoa: hoa,
    getTB: function () {
      return (this.toan + this.ly + this.hoa) / 3;
    },
  };
  return sv;
}

function callListStudents() {
  let output = "";
  for (let index = 0; index < arrStudents.length; index++) {
    let item = arrStudents[index];
    let St = `
        <tr>
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td>${item.Email}</td>
        <td>${item.getTB().toFixed(2)}</td> <!-- Sửa ở đây -->
        <td>
        <button onclick="deleCode('${item.code}')">Dele</button>
        <button onclick="editCode('${item.code}')">Edit</button>
        </td>
        </tr>`;
    output += St;
  }
  tagID("tbodySinhVien").innerHTML = output;
}

function addStudents() {
  var sv = getInput();
  arrStudents.push(sv);
  var JSONARR = JSON.stringify(arrStudents);
  localStorage.setItem("Hoàng_Đăng", JSONARR);

  callListStudents();
}

function deleCode(code) {
  var index = arrStudents.findIndex((item) => item.code === code);
  if (index !== -1) {
    arrStudents.splice(index, 1);
    var JSONARR = JSON.stringify(arrStudents);
    localStorage.setItem("Hoàng_Đăng", JSONARR);

    callListStudents();
  }
}

function editCode(code) {
  var index = arrStudents.findIndex((item) => item.code === code);
  if (index !== -1) {
    var sv = arrStudents[index];
    tagID("txtMaSV").value = sv.code;
    tagID("txtTenSV").value = sv.name;
    tagID("txtEmail").value = sv.Email;
    tagID("txtPass").value = sv.pass;
    tagID("txtDiemToan").value = sv.toan;
    tagID("txtDiemLy").value = sv.ly;
    tagID("txtDiemHoa").value = sv.hoa;
    // thêm nút cấm sửa
    tagID("txtMaSV").setAttribute("readonly", true);
  }
}
// function updateStudents() {
//     // lấy giá trị value 
//     var code = tagID('txtMaSV').value;
//     // lấy lại tất cả các thông tin trên o input 
    
//   var sv = getInput();
//   // duyệt hàm cho item là một phần tử , nếu item.code === code ở trên thì sẽ return con nếu i số khác -1 , thêm điều kiện 1 số khác -1 thì sẽ gán giá trị arrstudents ở vị trí hiện tại thay thees vào sv 
//   var index = arrStudents.findIndex( item => item.code === code);
  
//   if (index !== -1) {
//     arrStudents[index] = sv;
//     var JSONARR = JSON.stringify(arrStudents);
//     localStorage.setItem("Hoàng_Đăng", JSONARR);
//     callListStudents();
//   }
// }


function updateStudents(){
    var vitri = -1
    var sv = getInput(); // lấy các thông số từ input gán vào sv
    var code = tagID('txtMaSV').value; // lấy thông số thẻ code 
    for(var x = 0 ;x< arrStudents.length ;x++) {
      if(arrStudents[x].code===code){ // nếu mảng arrStudents[x].code === code 
        // thì vị trí sẽ là x và thoát lặp
      vitri =x;
      break;
      }

    }
    if(vitri !==-1){
        arrStudents[vitri] = sv;
        var JSONARR = JSON.stringify(arrStudents);
            localStorage.setItem("Hoàng_Đăng", JSONARR);
            callListStudents();

    }
}

