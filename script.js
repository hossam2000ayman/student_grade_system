let students = {};

function loadExcel() {
  fetch("شيت لحسن 1 ع 2024.xls")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // console.log(jsonData);
      // Assuming the first row is the table header
      const headers = jsonData[0];
      // console.log(headers);
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        const studentCode = row[1]; // Assuming second column is the student code
        const studentSeatNumber = row[3];
        const studentData = {
          // 0: "م"
          student_number: row[0],
          // 1: "كود الطالب"
          student_code: row[1],
          // 2: "اسم التلميذ"
          student_name: row[2],
          // 3: "رقم الجلوس"
          seat_number: row[3],
          // 4: "الجنسية"
          student_nationality: row[4],
          // 5: "الديانة"
          student_regelion: row[5],
          // 6: "حالة القيد"
          student_status: row[6],
          // 7: "الرقم السري"
          student_password: row[7],
          // 8: "موقف الدمج"
          merging_position: row[8],
          // 9: "اللجنة"
          section: row[9],
          // 10: "اللغة الثانية"
          second_language: row[10],
          // 11: "الفصل"
          class: row[11],
          // 12: "النوع"
          student_gender: row[12],
          // 13: "دفع المصروفات"
          payment_of_expences: row[13],
          // 14: "المادة"
          subject: row[14],
          // 15: "اللغــــــــــة العربيــــــــــة و الخط"
          arabic: row[23],
          // 25: "اللغــــــــــة الأجنبية"
          english: row[33],
          // 35: "الدراســــــــــات الاجتماعيــــــــــة"
          social: row[43],
          // 45: "الرياضيـــــــــــــــــــــــــــــــات"
          math: row[55],
          // 57: "العلـــــــــــــــــــــــــــــوم"
          science: row[67],
          // 69: "المجموع الأساسي"
          main_total_mark: row[69],
          // // 71: "نشاط تربوي1 "
          // additional_tf_1: row[75],
          // // 77: "نشاط تربوي2 "
          // additional_tf_2: row[81],
          // // 83: "المجموع الكلي بالأنشطة"
          // additional_total: row[83],
          // 85: "التربيــــــــــة الفنيــــــــــة"
          additional_tf: row[93],
          // 95: "الحاســـــــــــب الآلــــــــــــي"
          additional_computer: row[105],
          // 107: "التربية الرياضية"
          additional_sport: row[111],
          // 113: "التربيــــــــــة الدينيــــــــــة"
          additional_regelion: row[121],
          // // 123: "المشروع البحثي"
          // additional_reseach_project: row[123],
          // 128: "اللغة الأولي مستوي رفيع"
          additional_english_AL: row[136],
          // 138: "اللغة الثانية مستوي رفيع"
          additional_second_language: row[146],
          // // 148: "إظهار أو حجب النتيجة"
          // show_or_hide_result: row[148],
          // // 149: "ملاحظات"
          // notes: row[149],
          // 150: "نتيجة آخر العام"
          last_year_result: row[150],
        };
        students[studentSeatNumber] = studentData;
        students[studentCode] = studentData;
      }
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
    // console.log(student);
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
    let additional_english_AL_mark = document.getElementById(
      "additional_english_AL_mark"
    );
    let additional_second_language_AL_mark = document.getElementById(
      "additional_second_language_AL_mark"
    );
    let last_year_result_mark = document.getElementById(
      "last_year_result_mark"
    );

    student_name.innerText = student.student_name || "N/A";
    arabic_mark.innerText = Math.round(student.arabic) || "N/A";
    english_mark.innerText = Math.round(student.english) || "N/A";
    social_mark.innerText = Math.round(student.social) || "N/A";
    math_mark.innerText = Math.round(student.math) || "N/A";
    science_mark.innerText = Math.round(student.science) || "N/A";
    main_total_mark.innerText = Math.round(student.main_total_mark) || "N/A";
    additional_tf_mark.innerText = Math.round(student.additional_tf) || "N/A";
    additional_computer_mark.innerText =
      Math.round(student.additional_computer) || "N/A";
    additional_sport_mark.innerText =
      Math.round(student.additional_sport) || "N/A";
    additional_regelion_mark.innerText =
      Math.round(student.additional_regelion) || "N/A";
    additional_english_AL_mark.innerText =
      Math.round(student.additional_english_AL) || "N/A";
    additional_second_language_AL_mark.innerText =
      Math.round(student.additional_second_language) || "N/A";
    last_year_result_mark.innerText = student.last_year_result || "N/A";

    document.getElementById("table").style.display = "block";
    //this was work on web but it break on mobile observe it hasan right?
    document.getElementsByClassName("table-container")[0].style.display = "flex";
    document.getElementsByClassName("table-container")[0].style.justifyContent = "center";
    document.getElementsByClassName("table-container")[0].style.alignContent = "center";
  } else {
    alert("Student not found with input : " + input);
    document.getElementById("table").style.display = "none";
  }
}

window.onload = loadExcel;
