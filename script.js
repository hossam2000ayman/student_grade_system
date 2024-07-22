let students = {};
//we will define 2 mappers for 1st prep and 2nd prep
const expectedColumns = {
  sheet1: {
    // 0: "م"
    student_number: 0,
    // 1: "كود الطالب"
    student_code: 1,
    // 2: "اسم التلميذ"
    student_name: 2,
    // 3: "رقم الجلوس"
    seat_number: 3,
    // 4: "الجنسية"
    student_nationality: 4,
    // 5: "الديانة"
    student_regelion: 5,
    // 6: "حالة القيد"
    student_status: 6,
    // 7: "الرقم السري"
    student_password: 7,
    // 8: "موقف الدمج"
    merging_position: 8,
    // 9: "اللجنة"
    section: 9,
    // 10: "اللغة الثانية"
    second_language: 10,
    // 11: "الفصل"
    class: 11,
    // 12: "النوع"
    student_gender: 12,
    // 13: "دفع المصروفات"
    payment_of_expences: 13,
    // 14: "المادة"
    subject: 14,
    // 15: "اللغــــــــــة العربيــــــــــة و الخط"
    arabic: 23,
    // 25: "اللغــــــــــة الأجنبية"
    english: 33,
    // 35: "الدراســــــــــات الاجتماعيــــــــــة"
    social: 43,
    // 45: "الرياضيـــــــــــــــــــــــــــــــات"
    math: 55,
    // 57: "العلـــــــــــــــــــــــــــــوم"
    science: 67,
    // 69: "المجموع الأساسي"
    main_total_mark: 69,
    // // 71: "نشاط تربوي1 "
    // // 77: "نشاط تربوي2 "
    // // 83: "المجموع الكلي بالأنشطة"
    // 85: "التربيــــــــــة الفنيــــــــــة"
    additional_tf: 93,
    // 95: "الحاســـــــــــب الآلــــــــــــي"
    additional_computer: 105,
    // 107: "التربية الرياضية"
    additional_sport: 111,
    // 113: "التربيــــــــــة الدينيــــــــــة"
    additional_regelion: 121,
    // 123: "المشروع البحثي"
    additional_reseach_project: 123,
    // 128: "اللغة الأولي مستوي رفيع"
    additional_english_AL: 136,
    // 138: "اللغة الثانية مستوي رفيع"
    additional_second_language: 146,
    // // 148: "إظهار أو حجب النتيجة"
    show_or_hide_result: 148,
    // // 149: "ملاحظات"
    notes: 149,
    // 150: "نتيجة آخر العام"
    last_year_result: 150,
  },
  sheet2: {
    // 0: "م"
    student_number: 0,
    // 1: "كود الطالب"
    student_code: 1,
    // 2: "اسم التلميذ"
    student_name: 2,
    // 3: "رقم الجلوس"
    seat_number: 3,
    // 4: "حالة القيد"
    student_status: 4,
    // 5: "اللغة الثانية"
    second_language: 5,
    // 6: "الفصل"
    class: 6,
    // 7: "اللغــــــــــة العربيــــــــــة و الخط"
    arabic: 15,
    // 17: "اللغــــــــــة الأجنبية"
    english: 25,
    // 27: "الدراســــــــــات الاجتماعيــــــــــة"
    social: 35,
    // 37: "الرياضيـــــــــــــــــــــــــــــــات"
    math: 47,
    // 49: "العلـــــــــــــــــــــــــــــوم"
    science: 59,
    // 61: "المجموع الأساسي"
    main_total_mark: 61,
    // 63: "نشاط تربوي1 "
    // 69: "نشاط تربوي2 "
    // 75: "المجموع الكلي بالأنشطة"
    // 77: "التربيــــــــــة الفنيــــــــــة"
    additional_tf: 85,
    // 87: "الحاســـــــــــب الآلــــــــــــي"
    additional_computer: 97,
    // 99: "التربية الرياضية"
    additional_sport: 103,
    // 105: "التربيــــــــــة الدينيــــــــــة"
    additional_regelion: 113,
    // 115: "المشروع البحثي"
    additional_reseach_project: 118,
    // 120: "اللغة الأولي مستوي رفيع"
    additional_english_AL: 128,
    // 130: "اللغة الثانية مستوي رفيع"
    additional_second_language: 138,
    // 140: "إظهار أو حجب النتيجة"
    show_or_hide_result: 140,
    // 141: "ملاحظات"
    notes: 141,
    // 142: "نتيجة آخر العام"
    last_year_result: 142,
  },
};

function loadExcel() {
  fetch("شيت لحسام 1 ، 2 ع 2024.xls")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });

      workbook.SheetNames.forEach((sheetName, index) => {
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const columnMapping =
          index === 0 ? expectedColumns.sheet1 : expectedColumns.sheet2;
        console.log(jsonData);
        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          const studentCode = row[columnMapping.student_code]; // Assuming second column is the student code
          const studentSeatNumber = row[columnMapping.seat_number];
          const studentData = {};

          for (const [key, columnIndex] of Object.entries(columnMapping)) {
            studentData[key] = row[columnIndex] !== undefined ? row[columnIndex] : "N/A";
          }

          students[studentSeatNumber] = studentData;
          students[studentCode] = studentData;
        }
      });
    })
    .catch((err) => console.error(err));
}

function search() {
  const input = document.getElementById("student_input").value;
  //whatever if he type student code , or student seat number
  const student = students[input];

  if (input == "") {
    alert("please enter your student code or seat number");
    return;
  }

  if (student) {
    let student_name = document.getElementById("student_name");
    let arabic_mark = document.getElementById("arabic_mark");
    let english_mark = document.getElementById("english_mark");
    let social_mark = document.getElementById("social_mark");
    let math_mark = document.getElementById("math_mark");
    let science_mark = document.getElementById("science_mark");
    let main_total_mark = document.getElementById("main_total_mark");
    let additional_tf_mark = document.getElementById("additional_tf_mark");
    let additional_computer_mark = document.getElementById(
      "additional_computer_mark"
    );
    let additional_sport_mark = document.getElementById(
      "additional_sport_mark"
    );
    let additional_regelion_mark = document.getElementById(
      "additional_regelion_mark"
    );

    let additional_reseach_project = document.getElementById(
      "additional_reseach_project"
    );
    let additional_english_AL_mark = document.getElementById(
      "additional_english_AL_mark"
    );
    let additional_second_language_AL_mark = document.getElementById(
      "additional_second_language_AL_mark"
    );
    
    student_name.innerText = student.student_name || "N/A";
    arabic_mark.innerText = Math.round(student.arabic) || "N/A";
    english_mark.innerText = Math.round(student.english) || "N/A";
    social_mark.innerText = Math.round(student.social) || "N/A";
    math_mark.innerText = Math.round(student.math) || "N/A";
    science_mark.innerText = Math.round(student.science) || "N/A";
    main_total_mark.innerText = Math.round(student.main_total_mark) || "N/A";
    additional_tf_mark.innerText = Math.round(student.additional_tf) || "N/A";
    additional_computer_mark.innerText = Math.round(student.additional_computer) || "N/A";
    additional_sport_mark.innerText = Math.round(student.additional_sport) || "N/A";
    additional_regelion_mark.innerText = Math.round(student.additional_regelion) || "N/A";
    additional_reseach_project.innerHTML = Math.round(student.additional_reseach_project) || "N/A";
    additional_english_AL_mark.innerText = Math.round(student.additional_english_AL) || "N/A";
    additional_second_language_AL_mark.innerText = Math.round(student.additional_second_language) || "N/A";
    
    let last_year_result_mark = document.getElementById("last_year_result_mark");
    let show_or_hide_result = document.getElementById("show_or_hide_result");
    let table = document.getElementById("table");
    let table_container = document.getElementById("table-container");
    console.log(student.show_or_hide_result);
    /*first we make a condition if show result is true */
    let show = student.show_or_hide_result == "N/A" ? true : false;
    if (show) {
      /*show the table with it's style and hide rejection text*/
      show_or_hide_result.style.display = "none";
      table.style.display = "block";
      //this was work on web but it break on mobile observe it hasan right?
      table_container.style.display = "flex";
      table_container.style.justifyContent = "center";
      table_container.style.alignContent = "center";
      last_year_result_mark.innerHTML = student.last_year_result || "N/A";
    } else {
      /*hide the table with it's style and show rejection text*/
      show_or_hide_result.style.display = "block";
      show_or_hide_result.style.justifyContent = "center";
      show_or_hide_result.style.alignContent = "center";
      show_or_hide_result.innerHTML = student.show_or_hide_result;
      table.style.display = "none";
      last_year_result_mark.innerHTML = "";

    }
  } else {
    alert("Student not found with input : " + input);
    table.style.display = "none";
  }
}

window.onload = loadExcel;
