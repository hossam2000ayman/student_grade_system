let students = {};

function loadExcel() {
  fetch("شيت لحسن 1 ع 2024.xls")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Assuming the first row is the table header
      const headers = jsonData[0];
      console.log(headers);
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        const studentCode = row[1]; // Assuming second column is the student code
        students[studentCode] = {
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
          arabic: row[15],
          // 25: "اللغــــــــــة الأجنبية"
          english: row[25],
          // 35: "الدراســــــــــات الاجتماعيــــــــــة"
          social: row[35],
          // 45: "الرياضيـــــــــــــــــــــــــــــــات"
          math: row[45],
          // 57: "العلـــــــــــــــــــــــــــــوم"
          science: row[57],
          // 69: "المجموع الأساسي"
          main_total_marks: row[69],
          // 71: "نشاط تربوي1 "
          additional_tf_1: row[71],
          // 77: "نشاط تربوي2 "
          additional_tf_2: row[77],
          // 83: "المجموع الكلي بالأنشطة"
          additional_total: row[83],
          // 85: "التربيــــــــــة الفنيــــــــــة"
          additional_tf_2: row[85],
          // 95: "الحاســـــــــــب الآلــــــــــــي"
          additional_computer: row[95],
          // 107: "التربية الرياضية"
          additional_sport: row[107],
          // 113: "التربيــــــــــة الدينيــــــــــة"
          additional_regelion: row[113],
          // 123: "المشروع البحثي"
          additional_reseach_project: row[123],
          // 128: "اللغة الأولي مستوي رفيع"
          additional_english_AL: row[128],
          // 138: "اللغة الثانية مستوي رفيع"
          additional_second_language: row[138],
          // 148: "إظهار أو حجب النتيجة"
          show_or_hide_result: row[148],
          // 149: "ملاحظات"
          notes: row[149],
          // 150: "نتيجة آخر العام"
          last_year_result: row[150],
        };
      }
    })
    .catch((err) => console.error(err));
}

function search() {
  const code = document.getElementById("student_code").value;
  const student = students[code];

  if (student) {
    console.log(student);
    document.getElementById("student_name").innerText = student.student_name;
    document.getElementById("arabic_mark").innerText = student.arabic;
    document.getElementById("english_mark").innerText = student.english;
    document.getElementById("social_mark").innerText = student.social;
    document.getElementById("math_mark").innerText = student.math;
    document.getElementById("science_mark").innerText = student.science;
    document.getElementById("main_total_mark").innerText =
      student.main_total_marks;
    document.getElementById("additional_tf_mark_1").innerText =
      student.additional_tf_1;
      // document.getElementById("additional_tf_mark_2").innerText =
    //   student.additional_tf_2;

    // document.getElementById("additional_total_mark").innerText =
    //   student.additional_total;
    document.getElementById("additional_computer_mark").innerText =
      student.additional_computer;
    document.getElementById("additional_sport_mark").innerText =
      student.additional_sport;
    document.getElementById("additional_regelion_mark").innerText =
      student.additional_regelion;
    document.getElementById("additional_research_project_mark").innerText =
      student.additional_reseach_project;
    document.getElementById("additional_english_AL_mark").innerText =
      student.additional_english_AL;
    document.getElementById("additional_second_language_AL_mark").innerText =
      student.additional_second_language;
    document.getElementById("show_or_hide_result").innerText =
      student.show_or_hide_result;
    document.getElementById("last_year_result_mark").innerText =
      student.last_year_result;

    document.getElementById("notes").innerText = student.notes;
    // document.getElementById("com").innerText = student.other;

    document.getElementById("table").style.display = "block";
  } else {
    alert("Student not found with code : " + code);
    document.getElementById("table").style.display = "none";

  }
}

window.onload = loadExcel;
