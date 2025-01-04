let foundStudent = {};
//we will define 2 mappers for 1st prep and 2nd prep
const expectedColumns = {
  sheet1: {
    grade: "1st prep",
    // 0: "م"
    student_number_1: 0,
    // 1: "كود الطالب"
    student_code_1: 1,
    // 2: "رقم القومي "
    student_national_id_1: 2,
    // 3: "الاسم"
    student_name_1: 3,
    // 4: "الإختبارات الشهرية"
    arabic_monthly_tests_1: 4,
    // 5: "المواظبة و السلوك"
    arabic_behavior_and_attendance_1: 5,
    // 6: "الواجبات"
    arabic_homework_1: 6,
    // 7: "التقييم الأسبوعي"
    arabic_weekly_assessment_1: 7,
    // 8: "اختبار الفصل الدراسي الأول"
    arabic_first_semester_exam_1: 8,
    // 9: "المجموع"
    arabic_detailed_total_mark_1: 9,
    // 10: "الدرجة الفعلية"
    arabic_actual_mark_1: 10,

    // 11: "الإختبارات الشهرية"
    english_monthly_tests_1: 11,
    // 12: "المواظبة و السلوك"
    english_behavior_and_attendance_1: 12,
    // 13: "الواجبات"
    english_homework_1: 13,
    // 14: "التقييم الأسبوعي"
    english_weekly_assessment_1: 14,
    // 15: "اختبار الفصل الدراسي الأول"
    english_first_semester_exam_1: 15,
    // 16: "المجموع"
    english_detailed_total_mark_1: 16,
    // 17: "الدرجة الفعلية"
    english_actual_mark_1: 17,
    // 18: "الإختبارات الشهرية"
    social_monthly_tests_1: 18,
    // 19: "المواظبة و السلوك"
    social_behavior_and_attendance_1: 19,
    // 20: "الواجبات"
    social_homework_1: 20,
    // 21: "التقييم الأسبوعي"
    social_weekly_assessment_1: 21,
    // 22: "اختبار الفصل الدراسي الأول"
    social_first_semester_exam_1: 22,
    // 23: "المجموع"
    social_detailed_total_mark_1: 23,
    // 24: "الدرجة الفعلية"
    social_actual_mark_1: 24,
    // 25: "الإختبارات الشهرية"
    math_monthly_tests_1: 25,
    // 26: "المواظبة و السلوك"
    math_behavior_and_attendance_1: 26,
    // 27: "الواجبات"
    math_homework_1: 27,
    // 28: "التقييم الأسبوعي"
    math_weekly_assessment_1: 28,
    // 29: "اختبار الفصل الدراسي الأول"
    math_first_semester_exam_1: 29,
    // 30: "المجموع"
    math_detailed_total_mark_1: 30,
    // 31: "الدرجة الفعلية"
    math_actual_mark_1: 31,
    // 32: "الإختبارات الشهرية"
    science_monthly_tests_1: 32,
    // 33: "المواظبة و السلوك"
    science_behavior_and_attendance_1: 33,
    // 34: "الواجبات"
    science_homework_1: 34,
    // 35: "التقييم الأسبوعي"
    science_weekly_assessment_1: 35,
    // 36: "اختبار الفصل الدراسي الأول"
    science_first_semester_exam_1: 36,
    // 37: "المجموع"
    science_detailed_total_mark_1: 37,
    // 38: "الدرجة الفعلية"
    science_actual_mark_1: 38,
    /*header */
    // 39: "المجموع الكلي"
    detailed_total_mark_1: 39,
    // 40: "المجموع الفعلي"
    detailed_actual_total_mark_1: 40,
    // 41: "دين"
    religion_1: 41,
    // 42: "رياضة"
    sport_1: 42,
    // 43: "فنيه"
    art_1: 43,
    // 44: "موسيقي"
    music_1: 44,
    // 45: "حاسب الي"
    computer_1: 45,
    // 46: "اختياري 1"
    optional_1_1: 46,
    // 47: "اختياري 2"
    optional_2_1: 47,
    // 48: "انجليزي رفيع"
    english_high_1: 48,
    // 49: "لغه ثانية"
    second_language_1: 49,
    // 50: "نسبة الحضور"
    attendance_percentage_1: 50,
    // 51: "حجب"
    show_or_hide_result_1: 51,
  },
  sheet2: {
    grade: "2nd prep",
    // 0: "م"
    student_number_2: 0,
    // 1: "كود الطالب"
    student_code_2: 1,
    // 2: "رقم القومي "
    student_national_id_2: 2,
    // 3: "الاسم"
    student_name_2: 3,
    // 4: "الإختبارات الشهرية"
    arabic_monthly_tests_2: 4,
    // 5: "المواظبة و السلوك"
    arabic_behavior_and_attendance_2: 5,
    // 6: "الواجبات"
    arabic_homework_2: 6,
    // 7: "التقييم الأسبوعي"
    arabic_weekly_assessment_2: 7,
    // 8: "اختبار الفصل الدراسي الأول"
    arabic_first_semester_exam_2: 8,
    // 9: "المجموع"
    arabic_detailed_total_mark_2: 9,
    // 10: "الدرجة الفعلية"
    arabic_actual_mark_2: 10,

    // 11: "الإختبارات الشهرية"
    english_monthly_tests_2: 11,
    // 12: "المواظبة و السلوك"
    english_behavior_and_attendance_2: 12,
    // 13: "الواجبات"
    english_homework_2: 13,
    // 14: "التقييم الأسبوعي"
    english_weekly_assessment_2: 14,
    // 15: "اختبار الفصل الدراسي الأول"
    english_first_semester_exam_2: 15,
    // 16: "المجموع"
    english_detailed_total_mark_2: 16,
    // 17: "الدرجة الفعلية"
    english_actual_mark_2: 17,
    // 18: "الإختبارات الشهرية"
    social_monthly_tests_2: 18,
    // 19: "المواظبة و السلوك"
    social_behavior_and_attendance_2: 19,
    // 20: "الواجبات"
    social_homework_2: 20,
    // 21: "التقييم الأسبوعي"
    social_weekly_assessment_2: 21,
    // 22: "اختبار الفصل الدراسي الأول"
    social_first_semester_exam_2: 22,
    // 23: "المجموع"
    social_detailed_total_mark_2: 23,
    // 24: "الدرجة الفعلية"
    social_actual_mark_2: 24,
    // 25: "الإختبارات الشهرية"
    math_monthly_tests_2: 25,
    // 26: "المواظبة و السلوك"
    math_behavior_and_attendance_2: 26,
    // 27: "الواجبات"
    math_homework_2: 27,
    // 28: "التقييم الأسبوعي"
    math_weekly_assessment_2: 28,
    // 29: "اختبار الفصل الدراسي الأول"
    math_first_semester_exam_2: 29,
    // 30: "المجموع"
    math_detailed_total_mark_2: 30,
    // 31: "الدرجة الفعلية"
    math_actual_mark_2: 31,
    // 32: "الإختبارات الشهرية"
    science_monthly_tests_2: 32,
    // 33: "المواظبة و السلوك"
    science_behavior_and_attendance_2: 33,
    // 34: "الواجبات"
    science_homework_2: 34,
    // 35: "التقييم الأسبوعي"
    science_weekly_assessment_2: 35,
    // 36: "اختبار الفصل الدراسي الأول"
    science_first_semester_exam_2: 36,
    // 37: "المجموع"
    science_detailed_total_mark_2: 37,
    // 38: "الدرجة الفعلية"
    science_actual_mark_2: 38,
    /*header */
    // 39: "المجموع الكلي"
    detailed_total_mark_2: 39,
    // 40: "المجموع الفعلي"
    detailed_actual_total_mark_2: 40,
    // 41: "دين"
    religion_2: 41,
    // 42: "فنيه"
    art_2: 42,
    // 43: "حاسب الي"
    computer_2: 43,
    // 44: "اختياري 1"
    optional_1_2: 44,
    // 45: "اختياري 2"
    optional_2_2: 45,
    // 46: "انجليزي رفيع"
    english_high_2: 46,
    // 47: "لغه ثانية"
    second_language_2: 47,
    // 48: "نسبة الحضور"
    attendance_percentage_2: 48,
    // 49: "حجب"
    show_or_hide_result_2: 49,
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
          const studentCode =
            index === 0
              ? row[columnMapping.student_code_1]
              : row[columnMapping.student_code_2]; // Assuming second column is the student code
          const studentNationalId =
            index === 0
              ? row[columnMapping.student_national_id_1]
              : row[columnMapping.student_national_id_2];
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
  }, 200);
}

function search() {
  const input = document.getElementById("student_input").value;
  const student = foundStudent[input];
  const firstSection = document.getElementById("first-section");
  const secondSection = document.getElementById("second-section");
  const grade = document.getElementById("student_grade");
  let studentName = document.getElementById("student_name");

  let certificateContainer = document.getElementById("certificate-container");

  if (input == "") {
    certificateContainer.style.display = "none";
    alert("برجاء ادخال كود الطالب او الرقم القومي");
    return;
  }

  let arabic_1 = {
    monthlyTests: document.getElementById("arabic_monthly_tests_1"),
    behaviorAndAttendance: document.getElementById(
      "arabic_behavior_and_attendance_1"
    ),
    homework: document.getElementById("arabic_homework_1"),
    weeklyAssessment: document.getElementById("arabic_weekly_assessment_1"),
    firstSemesterExam: document.getElementById("arabic_first_semester_exam_1"),
    detailedTotalMark: document.getElementById("arabic_detailed_total_mark_1"),
    actualMark: document.getElementById("arabic_actual_mark_1"),
  };
  let english_1 = {
    monthlyTests: document.getElementById("english_monthly_tests_1"),
    behaviorAndAttendance: document.getElementById(
      "english_behavior_and_attendance_1"
    ),
    homework: document.getElementById("english_homework_1"),
    weeklyAssessment: document.getElementById("english_weekly_assessment_1"),
    firstSemesterExam: document.getElementById("english_first_semester_exam_1"),
    detailedTotalMark: document.getElementById("english_detailed_total_mark_1"),
    actualMark: document.getElementById("english_actual_mark_1"),
  };
  let social_1 = {
    monthlyTests: document.getElementById("social_monthly_tests_1"),
    behaviorAndAttendance: document.getElementById(
      "social_behavior_and_attendance_1"
    ),
    homework: document.getElementById("social_homework_1"),
    weeklyAssessment: document.getElementById("social_weekly_assessment_1"),
    firstSemesterExam: document.getElementById("social_first_semester_exam_1"),
    detailedTotalMark: document.getElementById("social_detailed_total_mark_1"),
    actualMark: document.getElementById("social_actual_mark_1"),
  };
  let math_1 = {
    monthlyTests: document.getElementById("math_monthly_tests_1"),
    behaviorAndAttendance: document.getElementById(
      "math_behavior_and_attendance_1"
    ),
    homework: document.getElementById("math_homework_1"),
    weeklyAssessment: document.getElementById("math_weekly_assessment_1"),
    firstSemesterExam: document.getElementById("math_first_semester_exam_1"),
    detailedTotalMark: document.getElementById("math_detailed_total_mark_1"),
    actualMark: document.getElementById("math_actual_mark_1"),
  };
  let science_1 = {
    monthlyTests: document.getElementById("science_monthly_tests_1"),
    behaviorAndAttendance: document.getElementById(
      "science_behavior_and_attendance_1"
    ),
    homework: document.getElementById("science_homework_1"),
    weeklyAssessment: document.getElementById("science_weekly_assessment_1"),
    firstSemesterExam: document.getElementById("science_first_semester_exam_1"),
    detailedTotalMark: document.getElementById("science_detailed_total_mark_1"),
    actualMark: document.getElementById("science_actual_mark_1"),
  };
  let total_1 = {
    totalMark: document.getElementById("total_mark_1"),
    actualTotalMark: document.getElementById("actual_total_mark_1"),
  };
  let additional_1 = {
    religion: document.getElementById("religion_1"),
    sport: document.getElementById("sport_1"),
    art: document.getElementById("art_1"),
    music: document.getElementById("music_1"),
    computer: document.getElementById("computer_1"),
    optional1: document.getElementById("optional_1_1"),
    optional2: document.getElementById("optional_2_1"),
    englishHigh: document.getElementById("english_high_1"),
    secondLanguage: document.getElementById("second_language_1"),
  };

  let arabic_2 = {
    monthlyTests: document.getElementById("arabic_monthly_tests_2"),
    behaviorAndAttendance: document.getElementById(
      "arabic_behavior_and_attendance_2"
    ),
    homework: document.getElementById("arabic_homework_2"),
    weeklyAssessment: document.getElementById("arabic_weekly_assessment_2"),
    firstSemesterExam: document.getElementById("arabic_first_semester_exam_2"),
    detailedTotalMark: document.getElementById("arabic_detailed_total_mark_2"),
    actualMark: document.getElementById("arabic_actual_mark_2"),
  };
  let english_2 = {
    monthlyTests: document.getElementById("english_monthly_tests_2"),
    behaviorAndAttendance: document.getElementById(
      "english_behavior_and_attendance_2"
    ),
    homework: document.getElementById("english_homework_2"),
    weeklyAssessment: document.getElementById("english_weekly_assessment_2"),
    firstSemesterExam: document.getElementById("english_first_semester_exam_2"),
    detailedTotalMark: document.getElementById("english_detailed_total_mark_2"),
    actualMark: document.getElementById("english_actual_mark_2"),
  };
  let social_2 = {
    monthlyTests: document.getElementById("social_monthly_tests_2"),
    behaviorAndAttendance: document.getElementById(
      "social_behavior_and_attendance_2"
    ),
    homework: document.getElementById("social_homework_2"),
    weeklyAssessment: document.getElementById("social_weekly_assessment_2"),
    firstSemesterExam: document.getElementById("social_first_semester_exam_2"),
    detailedTotalMark: document.getElementById("social_detailed_total_mark_2"),
    actualMark: document.getElementById("social_actual_mark_2"),
  };
  let math_2 = {
    monthlyTests: document.getElementById("math_monthly_tests_2"),
    behaviorAndAttendance: document.getElementById(
      "math_behavior_and_attendance_2"
    ),
    homework: document.getElementById("math_homework_2"),
    weeklyAssessment: document.getElementById("math_weekly_assessment_2"),
    firstSemesterExam: document.getElementById("math_first_semester_exam_2"),
    detailedTotalMark: document.getElementById("math_detailed_total_mark_2"),
    actualMark: document.getElementById("math_actual_mark_2"),
  };
  let science_2 = {
    monthlyTests: document.getElementById("science_monthly_tests_2"),
    behaviorAndAttendance: document.getElementById(
      "science_behavior_and_attendance_2"
    ),
    homework: document.getElementById("science_homework_2"),
    weeklyAssessment: document.getElementById("science_weekly_assessment_2"),
    firstSemesterExam: document.getElementById("science_first_semester_exam_2"),
    detailedTotalMark: document.getElementById("science_detailed_total_mark_2"),
    actualMark: document.getElementById("science_actual_mark_2"),
  };
  let total_2 = {
    totalMark: document.getElementById("total_mark_2"),
    actualTotalMark: document.getElementById("actual_total_mark_2"),
  };
  let additional_2 = {
    religion: document.getElementById("religion_2"),
    computer: document.getElementById("computer_2"),
    optional1: document.getElementById("optional_1_2"),
    optional2: document.getElementById("optional_2_2"),
    englishHigh: document.getElementById("english_high_2"),
    secondLanguage: document.getElementById("second_language_2"),
  };
  let attendancePercentage = document.getElementById("attendance_percentage");
  if (student) {
    console.log("student :: ", student);
    certificateContainer.style.display = "flex";
    if (student["grade"] === "1st prep") {
      studentName.innerText =
        `أسم الطالب: ${student["student_name_1"]}` || "N/A";
      grade.innerHTML = "بالصف الاول الاعدادي";
      attendancePercentage.innerText = student.attendance_percentage_1 * 100;
      firstSection.style.display = "block";
      secondSection.style.display = "none";

      arabic_1.monthlyTests.innerText = student.arabic_monthly_tests_1 || "N/A";
      arabic_1.behaviorAndAttendance.innerText =
        student.arabic_behavior_and_attendance_1 || "N/A";
      arabic_1.homework.innerText = student.arabic_homework_1 || "N/A";
      arabic_1.weeklyAssessment.innerText =
        student.arabic_weekly_assessment_1 || "N/A";
      arabic_1.firstSemesterExam.innerText =
        student.arabic_first_semester_exam_1 || "N/A";
      arabic_1.detailedTotalMark.innerText =
        student.arabic_detailed_total_mark_1 || "N/A";
      arabic_1.actualMark.innerText = student.arabic_actual_mark_1 || "N/A";

      english_1.monthlyTests.innerText =
        student.english_monthly_tests_1 || "N/A";
      english_1.behaviorAndAttendance.innerText =
        student.english_behavior_and_attendance_1 || "N/A";
      english_1.homework.innerText = student.english_homework_1 || "N/A";
      english_1.weeklyAssessment.innerText =
        student.english_weekly_assessment_1 || "N/A";
      english_1.firstSemesterExam.innerText =
        student.english_first_semester_exam_1 || "N/A";
      english_1.detailedTotalMark.innerText =
        student.english_detailed_total_mark_1 || "N/A";
      english_1.actualMark.innerText = student.english_actual_mark_1 || "N/A";

      social_1.monthlyTests.innerText = student.social_monthly_tests_1 || "N/A";
      social_1.behaviorAndAttendance.innerText =
        student.social_behavior_and_attendance_1 || "N/A";
      social_1.homework.innerText = student.social_homework_1 || "N/A";
      social_1.weeklyAssessment.innerText =
        student.social_weekly_assessment_1 || "N/A";
      social_1.firstSemesterExam.innerText =
        student.social_first_semester_exam_1 || "N/A";
      social_1.detailedTotalMark.innerText =
        student.social_detailed_total_mark_1 || "N/A";
      social_1.actualMark.innerText = student.social_actual_mark_1 || "N/A";

      math_1.monthlyTests.innerText = student.math_monthly_tests_1 || "N/A";
      math_1.behaviorAndAttendance.innerText =
        student.math_behavior_and_attendance_1 || "N/A";
      math_1.homework.innerText = student.math_homework_1 || "N/A";
      math_1.weeklyAssessment.innerText =
        student.math_weekly_assessment_1 || "N/A";
      math_1.firstSemesterExam.innerText =
        student.math_first_semester_exam_1 || "N/A";
      math_1.detailedTotalMark.innerText =
        student.math_detailed_total_mark_1 || "N/A";
      math_1.actualMark.innerText = student.math_actual_mark_1 || "N/A";

      science_1.monthlyTests.innerText =
        student.science_monthly_tests_1 || "N/A";
      science_1.behaviorAndAttendance.innerText =
        student.science_behavior_and_attendance_1 || "N/A";
      science_1.homework.innerText = student.science_homework_1 || "N/A";
      science_1.weeklyAssessment.innerText =
        student.science_weekly_assessment_1 || "N/A";
      science_1.firstSemesterExam.innerText =
        student.science_first_semester_exam_1 || "N/A";
      science_1.detailedTotalMark.innerText =
        student.science_detailed_total_mark_1 || "N/A";
      science_1.actualMark.innerText = student.science_actual_mark_1 || "N/A";

      total_1.totalMark.innerHTML =
        student.science_detailed_total_mark_1 +
          student.math_detailed_total_mark_1 +
          student.social_detailed_total_mark_1 +
          student.english_detailed_total_mark_1 +
          student.arabic_detailed_total_mark_1 || "N/A";
      total_1.actualTotalMark.innerHTML =
        student.science_actual_mark_1 +
          student.math_actual_mark_1 +
          student.social_actual_mark_1 +
          student.english_actual_mark_1 +
          student.arabic_actual_mark_1 || "N/A";

      additional_1.religion.innerText = student.religion_1 || "N/A";
      additional_1.sport.innerText = student.sport_1 || "N/A";
      additional_1.computer.innerText = student.computer_1 || "N/A";
      additional_1.englishHigh.innerText = student.english_high_1 || "N/A";
      additional_1.optional1.innerText = student.optional_1_1 || "N/A";
      additional_1.optional2.innerText = student.optional_2_1 || "N/A";
      additional_1.secondLanguage.innerText =
        student.second_language_1 || "N/A";
      additional_1.art.innerText = student.art_1 || "N/A";
      additional_1.music.innerText = student.music_1 || "N/A";
    } else if (student["grade"] === "2nd prep") {
      studentName.innerText =
        `أسم الطالب: ${student["student_name_2"]}` || "N/A";
      grade.innerHTML = "بالصف الثاني الاعدادي";
      attendancePercentage.innerText = student.attendance_percentage_2 * 100;
      firstSection.style.display = "none";
      secondSection.style.display = "block";

      arabic_2.monthlyTests.innerText = student.arabic_monthly_tests_2 || "N/A";
      arabic_2.behaviorAndAttendance.innerText =
        student.arabic_behavior_and_attendance_2 || "N/A";
      arabic_2.homework.innerText = student.arabic_homework_2 || "N/A";
      arabic_2.weeklyAssessment.innerText =
        student.arabic_weekly_assessment_2 || "N/A";
      arabic_2.firstSemesterExam.innerText =
        student.arabic_first_semester_exam_2 || "N/A";
      arabic_2.detailedTotalMark.innerText =
        student.arabic_detailed_total_mark_2 || "N/A";
      arabic_2.actualMark.innerText = student.arabic_actual_mark_2 || "N/A";

      english_2.monthlyTests.innerText =
        student.english_monthly_tests_2 || "N/A";
      english_2.behaviorAndAttendance.innerText =
        student.english_behavior_and_attendance_2 || "N/A";
      english_2.homework.innerText = student.english_homework_2 || "N/A";
      english_2.weeklyAssessment.innerText =
        student.english_weekly_assessment_2 || "N/A";
      english_2.firstSemesterExam.innerText =
        student.english_first_semester_exam_2 || "N/A";
      english_2.detailedTotalMark.innerText =
        student.english_detailed_total_mark_2 || "N/A";
      english_2.actualMark.innerText = student.english_actual_mark_2 || "N/A";

      social_2.monthlyTests.innerText = student.social_monthly_tests_2 || "N/A";
      social_2.behaviorAndAttendance.innerText =
        student.social_behavior_and_attendance_2 || "N/A";
      social_2.homework.innerText = student.social_homework_2 || "N/A";
      social_2.weeklyAssessment.innerText =
        student.social_weekly_assessment_2 || "N/A";
      social_2.firstSemesterExam.innerText =
        student.social_first_semester_exam_2 || "N/A";
      social_2.detailedTotalMark.innerText =
        student.social_detailed_total_mark_2 || "N/A";
      social_2.actualMark.innerText = student.social_actual_mark_2 || "N/A";

      math_2.monthlyTests.innerText = student.math_monthly_tests_2 || "N/A";
      math_2.behaviorAndAttendance.innerText =
        student.math_behavior_and_attendance_2 || "N/A";
      math_2.homework.innerText = student.math_homework_2 || "N/A";
      math_2.weeklyAssessment.innerText =
        student.math_weekly_assessment_2 || "N/A";
      math_2.firstSemesterExam.innerText =
        student.math_first_semester_exam_2 || "N/A";
      math_2.detailedTotalMark.innerText =
        student.math_detailed_total_mark_2 || "N/A";
      math_2.actualMark.innerText = student.math_actual_mark_2 || "N/A";

      science_2.monthlyTests.innerText =
        student.science_monthly_tests_2 || "N/A";
      science_2.behaviorAndAttendance.innerText =
        student.science_behavior_and_attendance_2 || "N/A";
      science_2.homework.innerText = student.science_homework_2 || "N/A";
      science_2.weeklyAssessment.innerText =
        student.science_weekly_assessment_2 || "N/A";
      science_2.firstSemesterExam.innerText =
        student.science_first_semester_exam_2 || "N/A";
      science_2.detailedTotalMark.innerText =
        student.science_detailed_total_mark_2 || "N/A";
      science_2.actualMark.innerText = student.science_actual_mark_2 || "N/A";

      total_2.totalMark.innerHTML =
        student.science_detailed_total_mark_2 +
          student.math_detailed_total_mark_2 +
          student.social_detailed_total_mark_2 +
          student.english_detailed_total_mark_2 +
          student.arabic_detailed_total_mark_2 || "N/A";
      total_2.actualTotalMark.innerHTML =
        student.science_actual_mark_2 +
          student.math_actual_mark_2 +
          student.social_actual_mark_2 +
          student.english_actual_mark_2 +
          student.arabic_actual_mark_2 || "N/A";

      additional_2.religion.innerText = student.religion_2 || "N/A";
      additional_2.computer.innerText = student.computer_2 || "N/A";
      additional_2.englishHigh.innerText = student.english_high_2 || "N/A";
      additional_2.optional1.innerText = student.optional_1_2 || "N/A";
      additional_2.optional2.innerText = student.optional_2_2 || "N/A";
      additional_2.secondLanguage.innerText =
        student.second_language_2 || "N/A";
    } else {
      studentName.innerText = "";
      grade.innerHTML = "بالمرحلة الإعدادي";
      firstSection.style.display = "none";
      secondSection.style.display = "none";
    }
  } else {
    alert(
      "لا يوجد طالب مسجل بهذا الرقم القومي او بالكود الطالب" + " : " + input
    );
    grade.innerHTML = "بالمرحلة الإعدادي";
    studentName.innerText = "";
    certificateContainer.style.display = "none";
    return;
  }
}



window.onload = loadExcel;
