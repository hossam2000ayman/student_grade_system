let foundStudent = {};
//we will define 2 mappers for 1st prep and 2nd prep
const expectedColumns = {
  sheet1: {
    grade: "1st prep",
    // 0: "م"
    student_number: 0,
    // 1: "كود الطالب"
    student_code: 1,
    // 2: "رقم القومي "
    student_national_id: 2,
    // 3: "الاسم"
    student_name: 3,
    // 4: "الإختبارات الشهرية"
    arabic_monthly_tests: 4,
    // 5: "المواظبة و السلوك"
    arabic_behavior_and_attendance: 5,
    // 6: "الواجبات"
    arabic_homework: 6,
    // 7: "التقييم الأسبوعي"
    arabic_weekly_assessment: 7,
    // 8: "اختبار الفصل الدراسي الأول"
    arabic_first_semester_exam: 8,
    // 9: "المجموع"
    arabic_detailed_total_mark: 9,
    // 10: "الدرجة الفعلية"
    arabic_actual_mark: 10,

    // 11: "الإختبارات الشهرية"
    english_monthly_tests: 11,
    // 12: "المواظبة و السلوك"
    english_behavior_and_attendance: 12,
    // 13: "الواجبات"
    english_homework: 13,
    // 14: "التقييم الأسبوعي"
    english_weekly_assessment: 14,
    // 15: "اختبار الفصل الدراسي الأول"
    english_first_semester_exam: 15,
    // 16: "المجموع"
    english_detailed_total_mark: 16,
    // 17: "الدرجة الفعلية"
    english_actual_mark: 17,
    // 18: "الإختبارات الشهرية"
    social_monthly_tests: 18,
    // 19: "المواظبة و السلوك"
    social_behavior_and_attendance: 19,
    // 20: "الواجبات"
    social_homework: 20,
    // 21: "التقييم الأسبوعي"
    social_weekly_assessment: 21,
    // 22: "اختبار الفصل الدراسي الأول"
    social_first_semester_exam: 22,
    // 23: "المجموع"
    social_detailed_total_mark: 23,
    // 24: "الدرجة الفعلية"
    social_actual_mark: 24,
    // 25: "الإختبارات الشهرية"
    math_monthly_tests: 25,
    // 26: "المواظبة و السلوك"
    math_behavior_and_attendance: 26,
    // 27: "الواجبات"
    math_homework: 27,
    // 28: "التقييم الأسبوعي"
    math_weekly_assessment: 28,
    // 29: "اختبار الفصل الدراسي الأول"
    math_first_semester_exam: 29,
    // 30: "المجموع"
    math_detailed_total_mark: 30,
    // 31: "الدرجة الفعلية"
    math_actual_mark: 31,
    // 32: "الإختبارات الشهرية"
    science_monthly_tests: 32,
    // 33: "المواظبة و السلوك"
    science_behavior_and_attendance: 33,
    // 34: "الواجبات"
    science_homework: 34,
    // 35: "التقييم الأسبوعي"
    science_weekly_assessment: 35,
    // 36: "اختبار الفصل الدراسي الأول"
    science_first_semester_exam: 36,
    // 37: "المجموع"
    science_detailed_total_mark: 37,
    // 38: "الدرجة الفعلية"
    science_actual_mark: 38,
    /*header */
    // 39: "المجموع الكلي"
    detailed_total_mark: 39,
    // 40: "المجموع الفعلي"
    detailed_actual_total_mark: 40,
    // 41: "دين"
    religion: 41,
    // 42: "رياضة"
    sport: 42,
    // 43: "فنيه"
    art: 43,
    // 44: "موسيقي"
    music: 44,
    // 45: "حاسب الي"
    computer: 45,
    // 46: "اختياري 1"
    optional_1: 46,
    // 47: "اختياري 2"
    optional_2: 47,
    // 48: "انجليزي رفيع"
    english_high: 48,
    // 49: "لغه ثانية"
    second_language: 49,
    // 50: "نسبة الحضور"
    attendance_percentage: 50,
    // 51: "حجب"
    show_or_hide_result: 51,
  },
  sheet2: {
    grade: "2nd prep",
    // 0: "م"
    student_number: 0,
    // 1: "كود الطالب"
    student_code: 1,
    // 2: "رقم القومي "
    student_national_id: 2,
    // 3: "الاسم"
    student_name: 3,
    // 4: "الإختبارات الشهرية"
    arabic_monthly_tests: 4,
    // 5: "المواظبة و السلوك"
    arabic_behavior_and_attendance: 5,
    // 6: "الواجبات"
    arabic_homework: 6,
    // 7: "التقييم الأسبوعي"
    arabic_weekly_assessment: 7,
    // 8: "اختبار الفصل الدراسي الأول"
    arabic_first_semester_exam: 8,
    // 9: "المجموع"
    arabic_detailed_total_mark: 9,
    // 10: "الدرجة الفعلية"
    arabic_actual_mark: 10,

    // 11: "الإختبارات الشهرية"
    english_monthly_tests: 11,
    // 12: "المواظبة و السلوك"
    english_behavior_and_attendance: 12,
    // 13: "الواجبات"
    english_homework: 13,
    // 14: "التقييم الأسبوعي"
    english_weekly_assessment: 14,
    // 15: "اختبار الفصل الدراسي الأول"
    english_first_semester_exam: 15,
    // 16: "المجموع"
    english_detailed_total_mark: 16,
    // 17: "الدرجة الفعلية"
    english_actual_mark: 17,
    // 18: "الإختبارات الشهرية"
    social_monthly_tests: 18,
    // 19: "المواظبة و السلوك"
    social_behavior_and_attendance: 19,
    // 20: "الواجبات"
    social_homework: 20,
    // 21: "التقييم الأسبوعي"
    social_weekly_assessment: 21,
    // 22: "اختبار الفصل الدراسي الأول"
    social_first_semester_exam: 22,
    // 23: "المجموع"
    social_detailed_total_mark: 23,
    // 24: "الدرجة الفعلية"
    social_actual_mark: 24,
    // 25: "الإختبارات الشهرية"
    math_monthly_tests: 25,
    // 26: "المواظبة و السلوك"
    math_behavior_and_attendance: 26,
    // 27: "الواجبات"
    math_homework: 27,
    // 28: "التقييم الأسبوعي"
    math_weekly_assessment: 28,
    // 29: "اختبار الفصل الدراسي الأول"
    math_first_semester_exam: 29,
    // 30: "المجموع"
    math_detailed_total_mark: 30,
    // 31: "الدرجة الفعلية"
    math_actual_mark: 31,
    // 32: "الإختبارات الشهرية"
    science_monthly_tests: 32,
    // 33: "المواظبة و السلوك"
    science_behavior_and_attendance: 33,
    // 34: "الواجبات"
    science_homework: 34,
    // 35: "التقييم الأسبوعي"
    science_weekly_assessment: 35,
    // 36: "اختبار الفصل الدراسي الأول"
    science_first_semester_exam: 36,
    // 37: "المجموع"
    science_detailed_total_mark: 37,
    // 38: "الدرجة الفعلية"
    science_actual_mark: 38,
    /*header */
    // 39: "المجموع الكلي"
    detailed_total_mark: 39,
    // 40: "المجموع الفعلي"
    detailed_actual_total_mark: 40,
    // 41: "دين"
    religion: 41,
    // 42: "رياضة"
    sport: 42,
    // 43: "فنيه"
    art: 43,
    // 44: "موسيقي"
    music: 44,
    // 45: "حاسب الي"
    computer: 45,
    // 46: "اختياري 1"
    optional_1: 46,
    // 47: "اختياري 2"
    optional_2: 47,
    // 48: "انجليزي رفيع"
    english_high: 48,
    // 49: "لغه ثانية"
    second_language: 49,
    // 50: "نسبة الحضور"
    attendance_percentage: 50,
    // 51: "حجب"
    show_or_hide_result: 51,
  },
};

function loadExcel() {
  fetch("asset/data/بيانات جديدة.xlsx")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });

      workbook.SheetNames.forEach((sheetName, index) => {
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log("jsonData :: ", jsonData);
        const columnMapping =
          index === 0 ? expectedColumns.sheet1 : expectedColumns.sheet2;
        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          const studentCode = row[columnMapping.student_code]; // Assuming second column is the student code
          const studentNationalId = row[columnMapping.student_national_id];
          const studentData = {};

          //fetch all data related to this student
          for (const [key, columnIndex] of Object.entries(columnMapping)) {
            if (key !== "grade") {
              studentData[key] =
                row[columnIndex] !== undefined ? row[columnIndex] : "N/A";
            } else {
              studentData[key] = columnMapping.grade;
            }
          }

          foundStudent[studentCode] = studentData;
          foundStudent[studentNationalId] = studentData;
        }
      });
    })
    .catch((err) => console.error(err));

  document
    .getElementById("student_input")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        startSearch();
      }
    });
}

function startSearch() {
  let certificateContainer = document.getElementById("certificate-container");
  let studentName = document.getElementById("student_name");
  certificateContainer.style.display = "none";
  studentName.innerText = "";
  //todo start to add loading for this delay
  setTimeout(() => {
    search();
  }, 1000);
}

function search() {
  const input = document.getElementById("student_input").value;
  const student = foundStudent[input];
  const grade = document.getElementById("student_grade");
  if (student["grade"] === "1st prep") {
    grade.innerHTML = "بالصف الاول الاعدادي";
  } else if (student["grade"] === "2nd prep") {
    grade.innerHTML = "بالصف الثاني الاعدادي";
  } else {
    grade.innerHTML = "بالمرحلة الإعدادي";
  }

  let certificateContainer = document.getElementById("certificate-container");
  let studentName = document.getElementById("student_name");

  if (input == "") {
    certificateContainer.style.display = "none";
    alert("برجاء ادخال كود الطالب او الرقم القومي");
    return;
  }

  let arabic = {
    monthlyTests: document.getElementById("arabic_monthly_tests"),
    behaviorAndAttendance: document.getElementById(
      "arabic_behavior_and_attendance"
    ),
    homework: document.getElementById("arabic_homework"),
    weeklyAssessment: document.getElementById("arabic_weekly_assessment"),
    firstSemesterExam: document.getElementById("arabic_first_semester_exam"),
    detailedTotalMark: document.getElementById("arabic_detailed_total_mark"),
    actualMark: document.getElementById("arabic_actual_mark"),
  };
  let english = {
    monthlyTests: document.getElementById("english_monthly_tests"),
    behaviorAndAttendance: document.getElementById(
      "english_behavior_and_attendance"
    ),
    homework: document.getElementById("english_homework"),
    weeklyAssessment: document.getElementById("english_weekly_assessment"),
    firstSemesterExam: document.getElementById("english_first_semester_exam"),
    detailedTotalMark: document.getElementById("english_detailed_total_mark"),
    actualMark: document.getElementById("english_actual_mark"),
  };
  let social = {
    monthlyTests: document.getElementById("social_monthly_tests"),
    behaviorAndAttendance: document.getElementById(
      "social_behavior_and_attendance"
    ),
    homework: document.getElementById("social_homework"),
    weeklyAssessment: document.getElementById("social_weekly_assessment"),
    firstSemesterExam: document.getElementById("social_first_semester_exam"),
    detailedTotalMark: document.getElementById("social_detailed_total_mark"),
    actualMark: document.getElementById("social_actual_mark"),
  };
  let math = {
    monthlyTests: document.getElementById("math_monthly_tests"),
    behaviorAndAttendance: document.getElementById(
      "math_behavior_and_attendance"
    ),
    homework: document.getElementById("math_homework"),
    weeklyAssessment: document.getElementById("math_weekly_assessment"),
    firstSemesterExam: document.getElementById("math_first_semester_exam"),
    detailedTotalMark: document.getElementById("math_detailed_total_mark"),
    actualMark: document.getElementById("math_actual_mark"),
  };
  let science = {
    monthlyTests: document.getElementById("science_monthly_tests"),
    behaviorAndAttendance: document.getElementById(
      "science_behavior_and_attendance"
    ),
    homework: document.getElementById("science_homework"),
    weeklyAssessment: document.getElementById("science_weekly_assessment"),
    firstSemesterExam: document.getElementById("science_first_semester_exam"),
    detailedTotalMark: document.getElementById("science_detailed_total_mark"),
    actualMark: document.getElementById("science_actual_mark"),
  };

  let total = {
    totalMark: document.getElementById("total_mark"),
    actualTotalMark: document.getElementById("actual_total_mark"),
  };

  if (student) {
    console.log("student :: ", student);
    studentName.innerText = `أسم الطالب: ${student.student_name}` || "N/A";
    certificateContainer.style.display = "flex";

    arabic.monthlyTests.innerText = student.arabic_monthly_tests || "N/A";
    arabic.behaviorAndAttendance.innerText =
      student.arabic_behavior_and_attendance || "N/A";
    arabic.homework.innerText = student.arabic_homework || "N/A";
    arabic.weeklyAssessment.innerText =
      student.arabic_weekly_assessment || "N/A";
    arabic.firstSemesterExam.innerText =
      student.arabic_first_semester_exam || "N/A";
    arabic.detailedTotalMark.innerText =
      student.arabic_detailed_total_mark || "N/A";
    arabic.actualMark.innerText = student.arabic_actual_mark || "N/A";

    english.monthlyTests.innerText = student.english_monthly_tests || "N/A";
    english.behaviorAndAttendance.innerText =
      student.english_behavior_and_attendance || "N/A";
    english.homework.innerText = student.english_homework || "N/A";
    english.weeklyAssessment.innerText =
      student.english_weekly_assessment || "N/A";
    english.firstSemesterExam.innerText =
      student.english_first_semester_exam || "N/A";
    english.detailedTotalMark.innerText =
      student.english_detailed_total_mark || "N/A";
    english.actualMark.innerText = student.english_actual_mark || "N/A";

    social.monthlyTests.innerText = student.social_monthly_tests || "N/A";
    social.behaviorAndAttendance.innerText =
      student.social_behavior_and_attendance || "N/A";
    social.homework.innerText = student.social_homework || "N/A";
    social.weeklyAssessment.innerText =
      student.social_weekly_assessment || "N/A";
    social.firstSemesterExam.innerText =
      student.social_first_semester_exam || "N/A";
    social.detailedTotalMark.innerText =
      student.social_detailed_total_mark || "N/A";
    social.actualMark.innerText = student.social_actual_mark || "N/A";

    math.monthlyTests.innerText = student.math_monthly_tests || "N/A";
    math.behaviorAndAttendance.innerText =
      student.math_behavior_and_attendance || "N/A";
    math.homework.innerText = student.math_homework || "N/A";
    math.weeklyAssessment.innerText = student.math_weekly_assessment || "N/A";
    math.firstSemesterExam.innerText =
      student.math_first_semester_exam || "N/A";
    math.detailedTotalMark.innerText =
      student.math_detailed_total_mark || "N/A";
    math.actualMark.innerText = student.math_actual_mark || "N/A";

    science.monthlyTests.innerText = student.science_monthly_tests || "N/A";
    science.behaviorAndAttendance.innerText =
      student.science_behavior_and_attendance || "N/A";
    science.homework.innerText = student.science_homework || "N/A";
    science.weeklyAssessment.innerText =
      student.science_weekly_assessment || "N/A";
    science.firstSemesterExam.innerText =
      student.science_first_semester_exam || "N/A";
    science.detailedTotalMark.innerText =
      student.science_detailed_total_mark || "N/A";
    science.actualMark.innerText = student.science_actual_mark || "N/A";

    total.totalMark.innerHTML =
      student.science_detailed_total_mark +
        student.math_detailed_total_mark +
        student.social_detailed_total_mark +
        student.english_detailed_total_mark +
        student.arabic_detailed_total_mark || "N/A";
    total.actualTotalMark.innerHTML =
      student.science_actual_mark +
        student.math_actual_mark +
        student.social_actual_mark +
        student.english_actual_mark +
        student.arabic_actual_mark || "N/A";
  } else {
    alert(
      "لا يوجد طالب مسجل بهذا الرقم القومي او بالكود الطالب" + " : " + input
    );
    studentName.innerText = "";
    certificateContainer.style.display = "none";
    return;
  }
}

window.onload = loadExcel;
