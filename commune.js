

// بيانات البلديات من baladiyas.xml
const municipalities = [
  { id: 1, state: "أدرار", municipality: "أدرار", area: "أدرار", lat: 27.87338070, lng: -0.28748840 },

  { id: 2, state: "أدرار", municipality: "بودة", area: "أدرار", lat: 28.01000200, lng: -0.42679700 },

  { id: 3, state: "أدرار", municipality: "أولاد أحمد تيمي", area: "أدرار", lat: 27.85104110, lng: -0.28127950 },

  { id: 4, state: "أدرار", municipality: "شروين", area: "شروين", lat: 29.01860640, lng: -0.25859930 },

  { id: 5, state: "أدرار", municipality: "أولاد عيسى", area: "شروين", lat: 29.42355860, lng: -0.08913570 },

  { id: 6, state: "أدرار", municipality: "طالمين", area: "شروين", lat: 29.32960130, lng: -0.49862590 },

  { id: 7, state: "أدرار", municipality: "رقان", area: "رقان", lat: 26.72072670, lng: 0.17515070 },

  { id: 8, state: "أدرار", municipality: "سالي", area: "رقان", lat: 26.96125270, lng: -0.02515530 },

  { id: 9, state: "أدرار", municipality: "السبع", area: "تسابيت", lat: 28.21501780, lng: -0.17377500 },

  { id: 10, state: "أدرار", municipality: "تسابيت", area: "تسابيت", lat: 28.35096830, lng: -0.21610010 },

  { id: 11, state: "أدرار", municipality: "أولاد السعيد", area: "تيميمون", lat: 29.41499640, lng: 0.24443830 },

  { id: 12, state: "تيميمون", municipality: "تيميمون", area: "تيميمون", lat: 29.26051170, lng: 0.22859230 },

  { id: 13, state: "أدرار", municipality: "إن زغمير", area: "زاوية كنتة", lat: 27.09539520, lng: -0.11553730 },

  { id: 14, state: "أدرار", municipality: "زاوية كنتة", area: "زاوية كنتة", lat: 27.23004190, lng: -0.19331130 },

  { id: 15, state: "أدرار", municipality: "اقبلي", area: "أولف", lat: 26.71339170, lng: 1.36919630 },

  { id: 16, state: "أدرار", municipality: "أولف", area: "أولف", lat: 26.97220770, lng: 1.07868170 },

  { id: 17, state: "أدرار", municipality: "تيمقتن", area: "أولف", lat: 27.02145790, lng: 1.01408770 },

  { id: 18, state: "أدرار", municipality: "تيت", area: "أولف", lat: 26.93830210, lng: 1.49101970 },

  { id: 19, state: "أدرار", municipality: "فنوغيل", area: "تامنطيط", lat: 27.60609650, lng: -0.30211040 },

  { id: 20, state: "أدرار", municipality: "تامنطيط", area: "تامنطيط", lat: 27.76133340, lng: -0.26575330 },

  { id: 21, state: "أدرار", municipality: "تامست", area: "تامنطيط", lat: 27.42374160, lng: -0.24579590 },

  { id: 22, state: "وهران", municipality: "قصر قدور", area: "تنركوك", lat: 29.57849100, lng: 0.37397280 },

  { id: 23, state: "وهران", municipality: "تنركوك", area: "تنركوك", lat: 30.46193900, lng: 1.36119960 },

  { id: 24, state: "وهران", municipality: "أوقروت", area: "أوقروت", lat: 28.70744290, lng: 0.34061030 },

  { id: 25, state: "أدرار", municipality: "دلدول", area: "أوقروت", lat: 34.04994460, lng: 3.36816070 },

  { id: 26, state: "أدرار", municipality: "المطارفة", area: "أوقروت", lat: 28.58900130, lng: -0.14993770 },

  { id: 27, state: "برج باجي مختار", municipality: "برج باجي مختار", area: "برج باجي مختار", lat: 21.32582560, lng: 0.95285630 },

  { id: 28, state: "برج باجي مختار", municipality: "تيمياوين", area: "برج باجي مختار", lat: 20.43395780, lng: 1.81012650 },

  { id: 29, state: "الشلف", municipality: "الشلف", area: "الشلف", lat: 36.16459200, lng: 1.33149900 },

  { id: 30, state: "الشلف", municipality: "أم الدروع", area: "الشلف", lat: 36.19667570, lng: 1.39138240 },

  { id: 31, state: "الشلف", municipality: "سنجاس", area: "الشلف", lat: 36.03966550, lng: 1.45520690 },

  { id: 32, state: "الشلف", municipality: "سيدي عبد الرحمن", area: "تنس", lat: 36.47917470, lng: 1.12575860 },

  { id: 33, state: "الشلف", municipality: "سيدي عكاشة", area: "تنس", lat: 36.46495780, lng: 1.30525190 },

  { id: 34, state: "الشلف", municipality: "تنس", area: "تنس", lat: 36.50808180, lng: 1.30780720 },

  { id: 35, state: "الشلف", municipality: "بني بوعتاب", area: "الكريمية", lat: 35.99021150, lng: 1.65726400 },

  { id: 36, state: "الشلف", municipality: "الكريمية", area: "الكريمية", lat: 36.11217420, lng: 1.55344460 },

  { id: 37, state: "الشلف", municipality: "حرشون", area: "الكريمية", lat: 36.11379190, lng: 1.50617830 },

  { id: 38, state: "الشلف", municipality: "الظهرة", area: "الظهرة", lat: 36.25456420, lng: 0.85188210 },

  { id: 39, state: "الشلف", municipality: "تاوقريت", area: "الظهرة", lat: 36.24723250, lng: 0.92222930 },

  { id: 40, state: "الشلف", municipality: "بني حواء", area: "بني حواء", lat: 36.53044510, lng: 1.56926260 },

  { id: 41, state: "الشلف", municipality: "بريرة", area: "بني حواء", lat: 36.44880160, lng: 1.61503420 },

  { id: 42, state: "الشلف", municipality: "وادي قوسين", area: "بني حواء", lat: 36.49347870, lng: 1.45203930 },

  { id: 43, state: "الشلف", municipality: "الشطية", area: "الشطية", lat: 36.19291780, lng: 1.24910440 },

  { id: 44, state: "الشلف", municipality: "الأبيض مجاجة", area: "الشطية", lat: 36.25073090, lng: 1.39191120 },

  { id: 45, state: "الشلف", municipality: "أولاد فارس", area: "الشطية", lat: 36.23034570, lng: 1.20841330 },

  { id: 46, state: "الشلف", municipality: "بوقادير", area: "بوقادير", lat: 36.06507460, lng: 1.12786810 },

  { id: 47, state: "الشلف", municipality: "وادي سلي", area: "بوقادير", lat: 36.10156500, lng: 1.19957380 },

  { id: 48, state: "الشلف", municipality: "الصبحة", area: "بوقادير", lat: 36.10645620, lng: 1.03129610 },

  { id: 49, state: "الشلف", municipality: "بنايرية", area: "الزبوجة", lat: 36.38442730, lng: 1.37433290 },

  { id: 50, state: "الشلف", municipality: "بوزغاية", area: "الزبوجة", lat: 36.36058760, lng: 1.26272320 },

  { id: 51, state: "الشلف", municipality: "الزبوجة", area: "الزبوجة", lat: 36.35402520, lng: 1.43029990 },

  { id: 52, state: "الشلف", municipality: "أبو الحسن", area: "تاجنة", lat: 36.41459380, lng: 1.19382410 },

  { id: 53, state: "الشلف", municipality: "تاجنة", area: "تاجنة", lat: 36.33470000, lng: 1.11792200 },

  { id: 54, state: "الشلف", municipality: "تلعصة", area: "تاجنة", lat: 36.41798650, lng: 1.06989520 },

  { id: 55, state: "الشلف", municipality: "المرسى", area: "مصدق", lat: 36.40012700, lng: 0.91536340 },

  { id: 56, state: "الشلف", municipality: "مصدق", area: "مصدق", lat: 36.35104260, lng: 1.01688940 },

  { id: 57, state: "الشلف", municipality: "بني راشد", area: "وادي الفضة", lat: 36.29277570, lng: 1.53075660 },

  { id: 58, state: "الشلف", municipality: "وادي الفضة", area: "وادي الفضة", lat: 36.18596600, lng: 1.53474890 },

  { id: 59, state: "الشلف", municipality: "أولاد عباس", area: "وادي الفضة", lat: 36.21476860, lng: 1.48606840 },

  { id: 60, state: "الشلف", municipality: "الحجاج", area: "أولاد بن عبد القادر", lat: 36.00415340, lng: 1.37217670 },

  { id: 61, state: "الشلف", municipality: "أولاد بن عبد القادر", area: "أولاد بن عبد القادر", lat: 36.02388970, lng: 1.27618550 },

  { id: 62, state: "الشلف", municipality: "عين مران", area: "عين مران", lat: 36.17562600, lng: 0.97236680 },

  { id: 63, state: "الشلف", municipality: "الهرانفة", area: "عين مران", lat: 36.24283120, lng: 1.06025190 },

  { id: 64, state: "الأغواط", municipality: "الأغواط", area: "الأغواط", lat: 33.80635180, lng: 2.88086160 },

  { id: 65, state: "الأغواط", municipality: "بن ناصر بن شهرة", area: "بن ناصر بن شهرة", lat: 33.75623210, lng: 3.00477960 },

  { id: 66, state: "الأغواط", municipality: "قصر الحيران", area: "بن ناصر بن شهرة", lat: 33.70120820, lng: 3.22692820 },

  { id: 67, state: "الأغواط", municipality: "العسافية", area: "العسافية", lat: 33.90187680, lng: 3.09536420 },

  { id: 68, state: "الأغواط", municipality: "سيدي مخلوف", area: "العسافية", lat: 34.06762810, lng: 2.86691110 },

  { id: 69, state: "الأغواط", municipality: "حاسي الدلاعة", area: "حاسي الرمل", lat: 33.41656510, lng: 3.55189670 },

  { id: 70, state: "الأغواط", municipality: "حاسي الرمل", area: "حاسي الرمل", lat: 32.94588550, lng: 3.27366600 },

  { id: 71, state: "الأغواط", municipality: "عين ماضي", area: "عين ماضي", lat: 33.79706200, lng: 2.30591560 },

  { id: 72, state: "الأغواط", municipality: "الحوايطة", area: "عين ماضي", lat: 33.54110060, lng: 2.50890549 },

  { id: 73, state: "الأغواط", municipality: "الخنق", area: "عين ماضي", lat: 33.74474020, lng: 2.79113480 },

  { id: 74, state: "الأغواط", municipality: "تاجموت", area: "عين ماضي", lat: 33.87963560, lng: 2.52467940 },

  { id: 75, state: "الأغواط", municipality: "تاجرونة", area: "عين ماضي", lat: 33.55447000, lng: 2.06392150 },

  { id: 76, state: "الأغواط", municipality: "عين سيدي علي", area: "عين سيدي علي", lat: 34.15791180, lng: 1.57013080 },

  { id: 77, state: "الأغواط", municipality: "البيضاء", area: "عين سيدي علي", lat: 35.67758780, lng: 5.18953800 },

  { id: 78, state: "الأغواط", municipality: "قلتة سيدي سعد", area: "عين سيدي علي", lat: 34.27012530, lng: 1.84208350 },

  { id: 79, state: "الأغواط", municipality: "بريدة", area: "بريدة", lat: 33.90678500, lng: 1.78378010 },

  { id: 80, state: "الأغواط", municipality: "الحاج مشري", area: "بريدة", lat: 33.99772050, lng: 1.54607480 },

  { id: 81, state: "الأغواط", municipality: "تاويالة", area: "بريدة", lat: 33.85415150, lng: 1.84555100 },

  { id: 82, state: "الأغواط", municipality: "الغيشة", area: "الغيشة", lat: 33.87508880, lng: 2.13952640 },

  { id: 83, state: "الأغواط", municipality: "أفلو", area: "أفلو", lat: 34.11252000, lng: 2.10029000 },

  { id: 84, state: "الأغواط", municipality: "سبقاق", area: "أفلو", lat: 34.02957960, lng: 1.92697470 },

  { id: 85, state: "الأغواط", municipality: "سيدي بوزيد", area: "أفلو", lat: 34.32650590, lng: 2.19560100 },

  { id: 86, state: "الأغواط", municipality: "وادي مرة", area: "وادي مزي", lat: 34.16492410, lng: 2.32470590 },

  { id: 87, state: "الأغواط", municipality: "وادي مزي", area: "وادي مزي", lat: 33.92085480, lng: 2.43487270 },

  { id: 88, state: "أم البواقي", municipality: "عين الزيتون", area: "أم البواقي", lat: 35.71371920, lng: 7.05765940 },

  { id: 89, state: "أم البواقي", municipality: "أم البواقي", area: "أم البواقي", lat: 35.86877580, lng: 7.11506450 },

  { id: 90, state: "أم البواقي", municipality: "عين البيضاء", area: "عين البيضاء", lat: 35.79528390, lng: 7.38943460 },

  { id: 91, state: "أم البواقي", municipality: "بريش", area: "عين البيضاء", lat: 35.91779800, lng: 7.37698130 },

  { id: 92, state: "أم البواقي", municipality: "الزرق", area: "عين البيضاء", lat: 35.81298600, lng: 7.48871220 },

  { id: 93, state: "أم البواقي", municipality: "عين مليلة", area: "عين مليلة", lat: 36.03754440, lng: 6.57098600 },

  { id: 94, state: "أم البواقي", municipality: "أولاد قاسم", area: "عين مليلة", lat: 36.03272410, lng: 6.68806760 },

  { id: 95, state: "أم البواقي", municipality: "أولاد حملة", area: "عين مليلة", lat: 36.07959980, lng: 6.47209190 },

  { id: 96, state: "أم البواقي", municipality: "العامرية", area: "سيقوس", lat: 36.07188420, lng: 6.90599200 },

  { id: 97, state: "أم البواقي", municipality: "سيقوس", area: "سيقوس", lat: 36.12394010, lng: 6.78549470 },

  { id: 98, state: "أم البواقي", municipality: "عين ببوش", area: "عين الديس", lat: 35.94223150, lng: 7.18748540 },

  { id: 99, state: "أم البواقي", municipality: "عين الديس", area: "عين الديس", lat: 36.01393390, lng: 7.03236940 },

  { id: 100, state: "أم البواقي", municipality: "الضلعة", area: "الضلعة", lat: 35.46028500, lng: 7.55000580 },

  { id: 101, state: "أم البواقي", municipality: "الجازية", area: "الضلعة", lat: 35.65713990, lng: 7.55211740 },

  { id: 102, state: "أم البواقي", municipality: "عين كرشة", area: "عين كرشة", lat: 35.92336620, lng: 6.70228980 },

  { id: 103, state: "أم البواقي", municipality: "الحرملية", area: "عين كرشة", lat: 35.92509060, lng: 6.62239070 },

  { id: 104, state: "أم البواقي", municipality: "هنشير تومغني", area: "عين كرشة", lat: 35.93461790, lng: 6.74126570 },

  { id: 105, state: "أم البواقي", municipality: "فكيرينة", area: "فكيرينة", lat: 35.66088170, lng: 7.29722430 },

  { id: 106, state: "أم البواقي", municipality: "وادي نيني", area: "فكيرينة", lat: 35.57212710, lng: 7.34901450 },

  { id: 107, state: "أم البواقي", municipality: "بئر الشهداء", area: "بئر الشهداء", lat: 35.90073520, lng: 6.24544580 },

  { id: 108, state: "أم البواقي", municipality: "أولاد زواي", area: "بئر الشهداء", lat: 35.84022140, lng: 6.51142780 },

  { id: 109, state: "أم البواقي", municipality: "سوق نعمان", area: "بئر الشهداء", lat: 35.89530790, lng: 6.39257490 },

  { id: 110, state: "أم البواقي", municipality: "قصر الصباحي", area: "قصر الصباحي", lat: 36.06146550, lng: 7.25303150 },

  { id: 111, state: "أم البواقي", municipality: "بحير الشرقي", area: "مسكيانة", lat: 35.81619350, lng: 7.72973070 },

  { id: 112, state: "أم البواقي", municipality: "البلالة", area: "مسكيانة", lat: 35.66852250, lng: 7.76308890 },

  { id: 113, state: "أم البواقي", municipality: "مسكيانة", area: "مسكيانة", lat: 35.62914070, lng: 7.66941430 },

  { id: 114, state: "أم البواقي", municipality: "الرحية", area: "مسكيانة", lat: 35.75289160, lng: 7.62894170 },

  { id: 115, state: "أم البواقي", municipality: "عين فكرون", area: "عين فكرون", lat: 35.94201870, lng: 6.87282230 },

  { id: 116, state: "أم البواقي", municipality: "الفجوج بوغرارة سعودي", area: "عين فكرون", lat: 35.71036680, lng: 6.81935210 },

  { id: 117, state: "باتنة", municipality: "باتنة", area: "باتنة", lat: 35.55442270, lng: 6.17677470 },

  { id: 118, state: "باتنة", municipality: "فسديس", area: "باتنة", lat: 35.61811670, lng: 6.24643920 },

  { id: 119, state: "باتنة", municipality: "وادي الشعبة", area: "باتنة", lat: 35.52384260, lng: 6.03466920 },

  { id: 120, state: "باتنة", municipality: "حيدوسة", area: "مروانة", lat: 35.52831050, lng: 5.91889030 },

  { id: 121, state: "باتنة", municipality: "قصر بلزمة", area: "مروانة", lat: 35.67627170, lng: 5.90215160 },

  { id: 122, state: "باتنة", municipality: "مروانة", area: "مروانة", lat: 35.63205550, lng: 5.91313800 },

  { id: 123, state: "باتنة", municipality: "وادي الماء", area: "مروانة", lat: 35.64487310, lng: 5.99534230 },

  { id: 124, state: "باتنة", municipality: "لازرو", area: "سريانة", lat: 35.80738460, lng: 6.22530200 },

  { id: 125, state: "باتنة", municipality: "سريانة", area: "سريانة", lat: 35.69256120, lng: 6.18505580 },

  { id: 126, state: "باتنة", municipality: "زانة البيضاء", area: "سريانة", lat: 35.79509280, lng: 6.10481000 },

  { id: 127, state: "باتنة", municipality: "منعة", area: "منعة", lat: 35.17624980, lng: 6.00399390 },

  { id: 128, state: "باتنة", municipality: "تغرغار", area: "منعة", lat: 19.52550000, lng: 1.21950000 },

  { id: 129, state: "باتنة", municipality: "عين ياقوت", area: "عين ياقوت", lat: 35.78663240, lng: 6.41821200 },

  { id: 130, state: "باتنة", municipality: "بومية", area: "عين ياقوت", lat: 35.70607170, lng: 6.46747570 },

  { id: 131, state: "باتنة", municipality: "جرمة", area: "عين ياقوت", lat: 35.68449990, lng: 6.29090320 },

  { id: 132, state: "باتنة", municipality: "المعذر", area: "عين ياقوت", lat: 35.62587460, lng: 6.37067220 },

  { id: 133, state: "باتنة", municipality: "عيون العصافير", area: "تازولت", lat: 35.55560050, lng: 6.30833930 },

  { id: 134, state: "باتنة", municipality: "تازولت", area: "تازولt", lat: 35.48600910, lng: 6.25360970 },

  { id: 135, state: "باتنة", municipality: "بومقر", area: "نقاوس", lat: 35.50515880, lng: 5.55252460 },

  { id: 136, state: "باتنة", municipality: "نقاوس", area: "نقاوس", lat: 35.55472840, lng: 5.61085160 },

  { id: 137, state: "باتنة", municipality: "سفيان", area: "نقاوس", lat: 35.43793840, lng: 5.55977630 },

  { id: 138, state: "باتنة", municipality: "أريس", area: "أريس", lat: 35.25851400, lng: 6.34498180 },

  { id: 139, state: "باتنة", municipality: "تيغانمين", area: "أريس", lat: 35.18534310, lng: 6.24922500 },

  { id: 140, state: "باتنة", municipality: "عين جاسر", area: "عين جاسر", lat: 35.85968690, lng: 6.00128350 },

  { id: 141, state: "باتنة", municipality: "الحاسي", area: "عين جاسر", lat: 35.78047240, lng: 5.95036110 },

  { id: 142, state: "باتنة", municipality: "سقانة", area: "سقانة", lat: 35.36416020, lng: 5.57190010 },

  { id: 143, state: "باتنة", municipality: "تيلاطو", area: "سقانة", lat: 35.32921580, lng: 5.79312390 },

  { id: 144, state: "باتنة", municipality: "فم الطوب", area: "فم الطوب", lat: 35.40439600, lng: 6.55035090 },

  { id: 145, state: "باتنة", municipality: "إشمول", area: "فم الطوب", lat: 35.30951060, lng: 6.51001050 },

  { id: 146, state: "باتنة", municipality: "إينوغيسن", area: "فم الطوب", lat: 35.28648120, lng: 6.54124220 },

  { id: 147, state: "باتنة", municipality: "بوزينة", area: "بوزينة", lat: 35.26483620, lng: 6.09886470 },

  { id: 148, state: "باتنة", municipality: "لارباع", area: "بوزينة", lat: 35.35454160, lng: 6.14107840 },

  { id: 149, state: "باتنة", municipality: "بولهيلات", area: "الشمرة", lat: 35.73764900, lng: 6.63052030 },

  { id: 150, state: "باتنة", municipality: "الشمرة", area: "الشمرة", lat: 35.62988610, lng: 6.60561110 },

  { id: 151, state: "باتنة", municipality: "بريكة", area: "بريكة", lat: 35.38466990, lng: 5.37022150 },

  { id: 152, state: "باتنة", municipality: "بيطام", area: "بريكة", lat: 35.30777810, lng: 5.37408150 },

  { id: 153, state: "باتنة", municipality: "إمدوكل", area: "بريكة", lat: 35.12165750, lng: 5.18212430 },

  { id: 154, state: "باتنة", municipality: "عزيل عبد القادر", area: "الجزار", lat: 35.32368250, lng: 5.01498260 },

  { id: 155, state: "باتنة", municipality: "الجزار", area: "الجزار", lat: 35.50825510, lng: 5.26767040 },

  { id: 156, state: "باتنة", municipality: "أولاد عمار", area: "الجزار", lat: 35.46225580, lng: 5.15602330 },

  { id: 157, state: "باتنة", municipality: "غسيرة", area: "غسيرة", lat: 35.09707680, lng: 6.22280710 },

  { id: 158, state: "باتنة", municipality: "كيمل", area: "غسيرة", lat: 35.21668750, lng: 6.54490070 },

  { id: 159, state: "باتنة", municipality: "تكوت", area: "غسيرة", lat: 35.14038160, lng: 6.30855030 },

  { id: 160, state: "باتنة", municipality: "عين التوتة", area: "عين التوتة", lat: 35.37520890, lng: 5.89421300 },

  { id: 161, state: "باتنة", municipality: "بني فضالة الحقانية", area: "عين التوتة", lat: 35.37815860, lng: 6.06075010 },

  { id: 162, state: "باتنة", municipality: "معافة", area: "عين التوتة", lat: 35.26631210, lng: 5.90184670 },

  { id: 163, state: "باتنة", municipality: "أولاد عوف", area: "عين التوتة", lat: 35.45545350, lng: 5.75643550 },

  { id: 164, state: "باتنة", municipality: "شير", area: "شير", lat: 35.21794010, lng: 6.13207900 },

  { id: 165, state: "باتنة", municipality: "وادي الطاقة", area: "شير", lat: 35.43233730, lng: 6.41460790 },

  { id: 166, state: "باتنة", municipality: "ثنية العابد", area: "شير", lat: 35.28602920, lng: 6.25463890 },

  { id: 167, state: "باتنة", municipality: "أولاد فاضل", area: "تيمقاد", lat: 35.55580540, lng: 6.67850870 },

  { id: 168, state: "باتنة", municipality: "تيمقاد", area: "تيمقاد", lat: 35.49385650, lng: 6.47056950 },

  { id: 169, state: "باتنة", municipality: "القصبات", area: "القصبات", lat: 35.61638400, lng: 5.47085200 },

  { id: 170, state: "باتنة", municipality: "القيقبة", area: "القصبات", lat: 35.73415610, lng: 5.58964770 },

  { id: 171, state: "باتنة", municipality: "أولاد سلام", area: "القصبات", lat: 35.82638660, lng: 5.88362130 },

  { id: 172, state: "باتنة", municipality: "الرحبات", area: "القصبات", lat: 35.71285680, lng: 5.65628460 },

  { id: 173, state: "باتنة", municipality: "رأس العيون", area: "القصبات", lat: 35.67585240, lng: 5.65156720 },

  { id: 174, state: "باتنة", municipality: "تالخمت", area: "القصبات", lat: 35.66697980, lng: 5.78540120 },

  { id: 175, state: "باتنة", municipality: "لمسان", area: "لمسان", lat: 35.65707740, lng: 5.79827580 },

  { id: 176, state: "باتنة", municipality: "أولاد سي سليمان", area: "لمسان", lat: 35.61043000, lng: 5.63220420 },

  { id: 177, state: "باتنة", municipality: "تاكسلانت", area: "لمسان", lat: 35.60559330, lng: 5.80067900 },

  { id: 178, state: "بجاية", municipality: "بجاية", area: "بجاية", lat: 36.75117830, lng: 5.06436870 },

  { id: 179, state: "بجاية", municipality: "وادي غير", area: "بجاية", lat: 36.71062960, lng: 4.97829150 },

  { id: 180, state: "بجاية", municipality: "أميزور", area: "أميزور", lat: 36.64390220, lng: 4.90365350 },

  { id: 181, state: "بجاية", municipality: "بني جليل", area: "أميزور", lat: 36.57288070, lng: 4.81043340 },

  { id: 182, state: "بجاية", municipality: "فرعون", area: "أميزور", lat: 36.55807560, lng: 4.86604880 },

  { id: 183, state: "بجاية", municipality: "سمعون", area: "أميزور", lat: 36.60846920, lng: 4.82242820 },

  { id: 184, state: "بجاية", municipality: "تيمزريت", area: "تيمزريت", lat: 36.61557360, lng: 4.76832450 },

  { id: 185, state: "بجاية", municipality: "مالبو", area: "سوق لإثنين", lat: 36.64032820, lng: 5.36263720 },

  { id: 186, state: "بجاية", municipality: "سوق لإثنين", area: "سوق لإثنين", lat: 36.59508320, lng: 4.00730100 },

  { id: 187, state: "بجاية", municipality: "تامريجت", area: "سوق لإثنين", lat: 36.57216830, lng: 5.37467440 },

  { id: 188, state: "بجاية", municipality: "بوخليفة", area: "تالة حمزة", lat: 36.63689140, lng: 5.07497080 },

  { id: 189, state: "بجاية", municipality: "تالة حمزة", area: "تالة حمزة", lat: 36.70292530, lng: 5.03941770 },

  { id: 190, state: "بجاية", municipality: "تيشي", area: "تالة حمزة", lat: 36.66895100, lng: 5.15748750 },

  { id: 191, state: "بجاية", municipality: "أيت رزين", area: "إغيل علي", lat: 36.36888200, lng: 4.48667130 },

  { id: 192, state: "بجاية", municipality: "إغيل علي", area: "إغيل علي", lat: 36.33785930, lng: 4.47019600 },

  { id: 193, state: "بجاية", municipality: "أيت إسماعيل", area: "درقينة", lat: 36.55364620, lng: 5.22973010 },

  { id: 194, state: "بجاية", municipality: "درقينة", area: "درقينة", lat: 36.56430700, lng: 5.30631180 },

  { id: 195, state: "بجاية", municipality: "تاسكريوت", area: "درقينة", lat: 36.55585870, lng: 5.27991120 },

  { id: 196, state: "بجاية", municipality: "أوقاس", area: "أوقاس", lat: 36.63765180, lng: 5.24531220 },

  { id: 197, state: "بجاية", municipality: "تيزي نبربر", area: "أوقاس", lat: 36.61241390, lng: 5.21698850 },

  { id: 198, state: "بجاية", municipality: "أدكار", area: "أدكار", lat: 36.69291710, lng: 4.67342990 },

  { id: 199, state: "بجاية", municipality: "بني كسيلة", area: "أدكار", lat: 36.88198900, lng: 4.66438920 },

  { id: 200, state: "بجاية", municipality: "تاوريرت إغيل", area: "أدكار", lat: 36.69959910, lng: 4.69770770 },

  { id: 201, state: "بجاية", municipality: "أقبو", area: "أقبو", lat: 36.45975380, lng: 4.52892430 },

  { id: 202, state: "بجاية", municipality: "شلاطة", area: "أقبو", lat: 36.51871020, lng: 4.49546200 },

  { id: 203, state: "بجاية", municipality: "اغرم", area: "أقبو", lat: 36.46225090, lng: 4.50425340 },

  { id: 204, state: "بجاية", municipality: "تامقرة", area: "أقبو", lat: 36.39808670, lng: 4.66713490 },

  { id: 205, state: "بجاية", municipality: "أمالو", area: "صدوق", lat: 36.47746070, lng: 4.63266000 },

  { id: 206, state: "بجاية", municipality: "بوحمزة", area: "صدوق", lat: 36.44508680, lng: 4.68550350 },

  { id: 207, state: "بجاية", municipality: "مسيسنة", area: "صدوق", lat: 36.56424930, lng: 4.73147680 },

  { id: 208, state: "بجاية", municipality: "صدوق", area: "صدوق", lat: 36.54723370, lng: 4.68946420 },

  { id: 209, state: "بجاية", municipality: "بني مليكش", area: "تازمالت", lat: 36.44717960, lng: 4.41022660 },

  { id: 210, state: "بجاية", municipality: "بو جليل", area: "تازمالت", lat: 36.34986540, lng: 4.41419160 },

  { id: 211, state: "بجاية", municipality: "تازمالت", area: "تازمالت", lat: 36.38851110, lng: 4.40001060 },

  { id: 212, state: "بجاية", municipality: "أكفادو", area: "أكفادو", lat: 36.65783950, lng: 4.60681650 },

  { id: 213, state: "بجاية", municipality: "شميني", area: "أكفادو", lat: 36.59440180, lng: 4.62104130 },

  { id: 214, state: "بجاية", municipality: "سوق اوفلا", area: "أكفادو", lat: 36.60547250, lng: 4.63829520 },

  { id: 215, state: "بجاية", municipality: "طيبان", area: "أكفادو", lat: 36.61357980, lng: 4.65260100 },

  { id: 216, state: "بجاية", municipality: "برباشة", area: "برباشة", lat: 36.57347260, lng: 4.96938250 },

  { id: 217, state: "بجاية", municipality: "كنديرة", area: "برباشة", lat: 36.55772800, lng: 5.02158740 },

  { id: 218, state: "بجاية", municipality: "أوزلاقن", area: "أوزلاقن", lat: 36.54785250, lng: 4.57669840 },

  { id: 219, state: "بجاية", municipality: "الفلاي", area: "سيدي عيش", lat: 36.60904560, lng: 4.67134130 },

  { id: 220, state: "بجاية", municipality: "سيدي عياد", area: "سيدي عيش", lat: 36.61191580, lng: 4.71517370 },

  { id: 221, state: "بجاية", municipality: "سيدي عيش", area: "سيدي عيش", lat: 36.61279140, lng: 4.69130910 },

  { id: 222, state: "بجاية", municipality: "تيفرة", area: "سيدي عيش", lat: 36.66630650, lng: 4.69742990 },

  { id: 223, state: "بجاية", municipality: "تينبدار", area: "سيدي عيش", lat: 36.62328390, lng: 4.67819110 },

  { id: 224, state: "بجاية", municipality: "القصر", area: "القصر", lat: 36.67943510, lng: 4.85237570 },

  { id: 225, state: "بجاية", municipality: "فناية الماثن", area: "القصر", lat: 36.66662990, lng: 4.79310480 },

  { id: 226, state: "بجاية", municipality: "توجة", area: "القصر", lat: 36.75253170, lng: 4.89712150 },

  { id: 227, state: "بجاية", municipality: "ذراع القايد", area: "خراطة", lat: 36.44005610, lng: 5.23486700 },

  { id: 228, state: "بجاية", municipality: "خراطة", area: "خراطة", lat: 36.49362620, lng: 5.27710410 },

  { id: 229, state: "بجاية", municipality: "بني معوش", area: "بني معوش", lat: 36.48785120, lng: 4.78755200 },

  { id: 230, state: "بسكرة", municipality: "بسكرة", area: "بسكرة", lat: 34.85085080, lng: 5.72868780 },

  { id: 231, state: "بسكرة", municipality: "الحاجب", area: "بسكرة", lat: 34.78922940, lng: 5.59960010 },

  { id: 232, state: "غرداية", municipality: "الشعيبة", area: "أولاد جلال", lat: 34.83345680, lng: 4.91942880 },

  { id: 233, state: "غرداية", municipality: "الدوسن", area: "أولاد جلال", lat: 34.59754490, lng: 5.10292980 },

  { id: 234, state: "غرداية", municipality: "أولاد جلال", area: "أولاد جلال", lat: 34.42541030, lng: 5.06443420 },

  { id: 235, state: "غرداية", municipality: "بسباس", area: "سيدي خالد", lat: 34.16503070, lng: 4.99901130 },

  { id: 236, state: "غرداية", municipality: "رأس الميعاد", area: "سيدي خالد", lat: 34.18389610, lng: 4.45104620 },

  { id: 237, state: "غرداية", municipality: "سيدي خالد", area: "سيدي خالد", lat: 34.39159070, lng: 5.00051770 },

  { id: 238, state: "بسكرة", municipality: "عين الناقة", area: "سيدي عقبة", lat: 34.65354150, lng: 6.14160990 },

  { id: 239, state: "بسكرة", municipality: "شتمة", area: "سيدي عقبة", lat: 34.84473070, lng: 5.79394240 },

  { id: 240, state: "بسكرة", municipality: "الحوش", area: "سيدي عقبة", lat: 34.56094940, lng: 6.04595190 },

  { id: 241, state: "بسكرة", municipality: "سيدي عقبة", area: "سيدي عقبة", lat: 34.74976130, lng: 5.91078490 },

  { id: 242, state: "بسكرة", municipality: "مشونش", area: "مشونش", lat: 34.90698490, lng: 6.00338890 },

  { id: 243, state: "بسكرة", municipality: "الفيض", area: "زريبة الوادي", lat: 34.50059290, lng: 6.46963500 },

  { id: 244, state: "بسكرة", municipality: "خنقة سيدي ناجي", area: "زريبة الوادي", lat: 34.80531460, lng: 6.70592040 },

  { id: 245, state: "بسكرة", municipality: "المزيرعة", area: "زريبة الوادي", lat: 34.72076860, lng: 6.29474490 },

  { id: 246, state: "بسكرة", municipality: "زريبة الوادي", area: "زريبة الوادي", lat: 34.68301990, lng: 6.50473330 },

  { id: 247, state: "بسكرة", municipality: "عين زعطوط", area: "القنطرة", lat: 35.14637400, lng: 5.83736780 },

  { id: 248, state: "بسكرة", municipality: "القنطرة", area: "القنطرة", lat: 35.22311520, lng: 5.70928440 },

  { id: 249, state: "بسكرة", municipality: "الوطاية", area: "الوطاية", lat: 35.03456570, lng: 5.58955000 },

  { id: 250, state: "بسكرة", municipality: "برانيس", area: "جمورة", lat: 34.99476310, lng: 5.77225100 },

  { id: 251, state: "بسكرة", municipality: "جمورة", area: "جمورة", lat: 35.06897990, lng: 5.84486380 },

  { id: 252, state: "بسكرة", municipality: "برج بن عزوز", area: "طولقة", lat: 34.69571620, lng: 5.36125620 },

  { id: 253, state: "بسكرة", municipality: "بوشقرون", area: "طولقة", lat: 34.72065590, lng: 5.46779650 },

  { id: 254, state: "بسكرة", municipality: "ليشانة", area: "طولقة", lat: 34.72517660, lng: 5.43565050 },

  { id: 255, state: "بسكرة", municipality: "طولقة", area: "طولقة", lat: 34.73212000, lng: 5.38307520 },

  { id: 256, state: "بسكرة", municipality: "ليوة", area: "مليلي", lat: 34.63921370, lng: 5.40091340 },

  { id: 257, state: "بسكرة", municipality: "مخادمة", area: "مليلي", lat: 34.56445910, lng: 5.46129550 },

  { id: 258, state: "بسكرة", municipality: "مليلي", area: "مليلي", lat: 34.57609220, lng: 5.62432460 },

  { id: 259, state: "بسكرة", municipality: "أوماش", area: "مليلي", lat: 34.69520350, lng: 5.69913950 },

  { id: 260, state: "بسكرة", municipality: "أورلال", area: "مليلي", lat: 34.56663860, lng: 5.52774440 },

  { id: 261, state: "بسكرة", municipality: "الغروس", area: "فوغالة", lat: 34.70541620, lng: 5.28549210 },

  { id: 262, state: "بسكرة", municipality: "فوغالة", area: "فوغالة", lat: 34.73095520, lng: 5.32600420 },

  { id: 263, state: "بشار", municipality: "بشار", area: "بشار", lat: 31.61653550, lng: -2.21800530 },

  { id: 264, state: "النعامة", municipality: "القصابي", area: "أولاد خضير", lat: 29.12703040, lng: -0.98565970 },

  { id: 265, state: "النعامة", municipality: "أولاد خضير", area: "أولاد خضير", lat: 29.25650860, lng: -1.05964580 },

  { id: 266, state: "بشار", municipality: "بوكايس", area: "بوكايس", lat: 31.92445040, lng: -2.46786080 },

  { id: 267, state: "بشار", municipality: "لحمر", area: "بوكايس", lat: 31.84924870, lng: -2.28075760 },

  { id: 268, state: "بشار", municipality: "موغل", area: "بوكايس", lat: 32.02334780, lng: -2.21824750 },

  { id: 269, state: "النعامة", municipality: "بني عباس", area: "بني عباس", lat: 30.13174260, lng: -2.16903100 },

  { id: 270, state: "النعامة", municipality: "تامترت", area: "بني عباس", lat: 30.12470140, lng: -1.90165930 },

  { id: 271, state: "بشار", municipality: "القنادسة", area: "القنادسة", lat: 31.55453210, lng: -2.43266100 },

  { id: 272, state: "بشار", municipality: "المريجة", area: "القنادسة", lat: 31.54916480, lng: -2.94738250 },

  { id: 273, state: "النعامة", municipality: "إقلي", area: "إقلي", lat: 30.45284930, lng: -2.29082640 },

  { id: 274, state: "النعامة", municipality: "تبلبالة", area: "تبلبالة", lat: 29.40541540, lng: -3.25536640 },

  { id: 275, state: "بشار", municipality: "تاغيت", area: "تاغيت", lat: 30.91706110, lng: -2.02947540 },

  { id: 276, state: "النعامة", municipality: "الواتة", area: "الواتة", lat: 29.86080140, lng: -1.84963140 },

  { id: 277, state: "بشار", municipality: "العبادلة", area: "العبادلة", lat: 31.02748390, lng: -2.71044180 },

  { id: 278, state: "بشار", municipality: "عرق فراج", area: "العبادلة", lat: 31.03572900, lng: -2.78967370 },

  { id: 279, state: "بشار", municipality: "مشرع هواري بومدين", area: "العبادلة", lat: 30.93206050, lng: -2.73757660 },

  { id: 280, state: "النعامة", municipality: "بن يخلف", area: "كرزاز", lat: 29.74851470, lng: -1.43551570 },

  { id: 281, state: "النعامة", municipality: "كرزاز", area: "كرزاز", lat: 29.88168040, lng: -0.88890160 },

  { id: 282, state: "النعامة", municipality: "تيمودي", area: "كرزاز", lat: 29.32133600, lng: -1.12881010 },

  { id: 283, state: "بشار", municipality: "بني ونيف", area: "بني ونيف", lat: 32.05018910, lng: -1.24868080 },

  { id: 284, state: "البليدة", municipality: "البليدة", area: "البليدة", lat: 36.47056580, lng: 2.82749370 },

  { id: 285, state: "البليدة", municipality: "بوعرفة", area: "البليدة", lat: 36.46389050, lng: 2.81263940 },

  { id: 286, state: "البليدة", municipality: "بوعينان", area: "بوعينان", lat: 36.53221020, lng: 2.99184960 },

  { id: 287, state: "البليدة", municipality: "الشبلي", area: "بوعينان", lat: 36.57745730, lng: 3.00901760 },

  { id: 288, state: "البليدة", municipality: "بني تامو", area: "وادي العلايق", lat: 36.53747050, lng: 2.82065290 },

  { id: 289, state: "البليدة", municipality: "بن خليل", area: "وادي العلايق", lat: 36.59752440, lng: 2.84650630 },

  { id: 290, state: "البليدة", municipality: "وادي العلايق", area: "وادي العلايق", lat: 36.55583740, lng: 2.78963580 },

  { id: 291, state: "البليدة", municipality: "بني مراد", area: "بني مراد", lat: 36.52352600, lng: 2.86161020 },

  { id: 292, state: "البليدة", municipality: "الشريعة", area: "بني مراد", lat: 36.42692050, lng: 2.87667700 },

  { id: 293, state: "البليدة", municipality: "أولاد يعيش", area: "بني مراد", lat: 36.49704510, lng: 2.86104930 },

  { id: 294, state: "البليدة", municipality: "العفرون", area: "العفرون", lat: 36.46975000, lng: 2.62674210 },

  { id: 295, state: "البليدة", municipality: "وادي جر", area: "العفرون", lat: 36.42684590, lng: 2.56053480 },

  { id: 296, state: "البليدة", municipality: "عين الرمانة", area: "موزاية", lat: 36.40623940, lng: 2.69139290 },

  { id: 297, state: "البليدة", municipality: "الشفة", area: "موزاية", lat: 36.46222870, lng: 2.74090970 },

  { id: 298, state: "البليدة", municipality: "موزاية", area: "موزاية", lat: 36.46744160, lng: 2.68799530 },

  { id: 299, state: "البليدة", municipality: "جبابرة", area: "مفتاح", lat: 36.58357530, lng: 3.26890280 },

  { id: 300, state: "البليدة", municipality: "مفتاح", area: "مفتاح", lat: 36.62019230, lng: 3.22281350 },

  { id: 301, state: "البليدة", municipality: "بوفاريك", area: "بوفاريك", lat: 36.57555230, lng: 2.91289630 },

  { id: 302, state: "البليدة", municipality: "قرواو", area: "بوفاريك", lat: 36.52645950, lng: 2.88611500 },

  { id: 303, state: "البليدة", municipality: "الصومعة", area: "بوفاريك", lat: 36.51849090, lng: 2.90848530 },

  { id: 304, state: "البليدة", municipality: "الأربعاء", area: "الأربعاء", lat: 36.56480000, lng: 3.15310000 },

  { id: 305, state: "البليدة", municipality: "صوحان", area: "الأربعاء", lat: 36.50657020, lng: 3.23763890 },

  { id: 306, state: "البليدة", municipality: "بوقرة", area: "بوقرة", lat: 36.54050000, lng: 3.08440000 },

  { id: 307, state: "البليدة", municipality: "حمام ملوان", area: "بوقرة", lat: 36.48692590, lng: 3.04460770 },

  { id: 308, state: "البليدة", municipality: "اولاد سلامة", area: "بوقرة", lat: 36.55345820, lng: 3.11536280 },

  { id: 309, state: "البويرة", municipality: "عين الترك", area: "البويرة", lat: 36.39320610, lng: 3.82460430 },

  { id: 310, state: "البويرة", municipality: "أيت لعزيز", area: "البويرة", lat: 36.44456450, lng: 3.88078510 },

  { id: 311, state: "البويرة", municipality: "البويرة", area: "البويرة", lat: 36.37390120, lng: 3.90070070 },

  { id: 312, state: "البويرة", municipality: "المقراني", area: "سوق الخميس", lat: 36.42440790, lng: 3.61216250 },

  { id: 313, state: "البويرة", municipality: "سوق الخميس", area: "سوق الخميس", lat: 36.39122730, lng: 3.63177800 },

  { id: 314, state: "البويرة", municipality: "أعمر", area: "قادرية", lat: 36.49239300, lng: 3.77119390 },

  { id: 315, state: "البويرة", municipality: "جباحية", area: "قادرية", lat: 36.47682080, lng: 3.75811100 },

  { id: 316, state: "البويرة", municipality: "قادرية", area: "قادرية", lat: 36.53543850, lng: 3.67884010 },

  { id: 317, state: "البويرة", municipality: "حيزر", area: "حيزر", lat: 36.39799250, lng: 3.99944480 },

  { id: 318, state: "البويرة", municipality: "تاغزوت", area: "حيزر", lat: 33.47079400, lng: 6.79648050 },

  { id: 319, state: "البويرة", municipality: "بودربالة", area: "الأخضرية", lat: 36.58082080, lng: 3.50999860 },

  { id: 320, state: "البويرة", municipality: "بوكرم", area: "الأخضرية", lat: 36.54160350, lng: 3.39715910 },

  { id: 321, state: "البويرة", municipality: "قرومة", area: "الأخضرية", lat: 36.43267970, lng: 3.42772720 },

  { id: 322, state: "البويرة", municipality: "الأخضرية", area: "الأخضرية", lat: 36.56448270, lng: 3.59675230 },

  { id: 323, state: "البويرة", municipality: "معلة", area: "الأخضرية", lat: 36.49438050, lng: 3.58923390 },

  { id: 324, state: "البويرة", municipality: "زبربر", area: "الأخضرية", lat: 36.47266550, lng: 3.51390500 },

  { id: 325, state: "البويرة", municipality: "الهاشمية", area: "الهاشمية", lat: 36.22250330, lng: 3.81428480 },

  { id: 326, state: "البويرة", municipality: "وادي البردي", area: "الهاشمية", lat: 36.28858510, lng: 3.91807430 },

  { id: 327, state: "البويرة", municipality: "برج أوخريص", area: "برج أوخريص", lat: 36.09324710, lng: 3.91073030 },

  { id: 328, state: "البويرة", municipality: "الحجرة الزرقاء", area: "برج أوخريص", lat: 35.94762400, lng: 3.82253340 },

  { id: 329, state: "البويرة", municipality: "مزدور", area: "برج أوخريص", lat: 36.06806350, lng: 4.05626500 },

  { id: 330, state: "البويرة", municipality: "تاقديت", area: "برج أوخريص", lat: 35.95324500, lng: 3.95562390 },

  { id: 331, state: "البويرة", municipality: "أهل القصر", area: "العجيبة", lat: 36.25280690, lng: 4.04140670 },

  { id: 332, state: "البويرة", municipality: "بشلول", area: "العجيبة", lat: 36.31219500, lng: 4.07495660 },

  { id: 333, state: "البويرة", municipality: "العجيبة", area: "العجيبة", lat: 36.32934560, lng: 4.15868580 },

  { id: 334, state: "البويرة", municipality: "الأسنام", area: "العجيبة", lat: 36.16459200, lng: 1.33149900 },

  { id: 335, state: "البويرة", municipality: "أولاد راشد", area: "العجيبة", lat: 36.20350300, lng: 4.11677250 },

  { id: 336, state: "البويرة", municipality: "عين الحجر", area: "عين بسام", lat: 36.34022840, lng: 3.80952090 },

  { id: 337, state: "البويرة", municipality: "عين العلوي", area: "عين بسام", lat: 36.30681060, lng: 3.75067100 },

  { id: 338, state: "البويرة", municipality: "عين بسام", area: "عين بسام", lat: 36.29291130, lng: 3.67354170 },

  { id: 339, state: "البويرة", municipality: "بئر غبالو", area: "بئر غبالو", lat: 36.26288120, lng: 3.58501130 },

  { id: 340, state: "البويرة", municipality: "الخبوزية", area: "بئر غبالو", lat: 36.30907800, lng: 3.59716790 },

  { id: 341, state: "البويرة", municipality: "روراوة", area: "بئر غبالو", lat: 36.23626010, lng: 3.64633520 },

  { id: 342, state: "البويرة", municipality: "أغبالو", area: "أمشدالة", lat: 36.42700900, lng: 4.35264600 },

  { id: 343, state: "البويرة", municipality: "شرفة", area: "أمشدالة", lat: 35.43066210, lng: -0.24628830 },

  { id: 344, state: "البويرة", municipality: "حنيف", area: "أمشدالة", lat: 36.33479970, lng: 4.26177980 },

  { id: 345, state: "البويرة", municipality: "أمشدالة", area: "أمشدالة", lat: 36.36468640, lng: 4.27117180 },

  { id: 346, state: "البويرة", municipality: "سحاريج", area: "أمشدالة", lat: 36.39748470, lng: 4.24823360 },

  { id: 347, state: "البويرة", municipality: "آث منصور", area: "أمشدالة", lat: 36.32782590, lng: 4.31726010 },

  { id: 348, state: "البويرة", municipality: "الدشمية", area: "سور الغزلان", lat: 36.13047620, lng: 3.57657650 },

  { id: 349, state: "البويرة", municipality: "ديرة", area: "سور الغزلان", lat: 36.00226310, lng: 3.72151770 },

  { id: 350, state: "البويرة", municipality: "الحاكمية", area: "سور الغزلان", lat: 36.09073380, lng: 3.79363510 },

  { id: 351, state: "البويرة", municipality: "المعمورة", area: "سور الغزلان", lat: 36.03312340, lng: 3.55146660 },

  { id: 352, state: "البويرة", municipality: "ريدان", area: "سور الغزلان", lat: 36.07388790, lng: 3.46207840 },

  { id: 353, state: "البويرة", municipality: "سور الغزلان", area: "سور الغزلان", lat: 36.14737600, lng: 3.69179700 },

  { id: 354, state: "تمنراست", municipality: "عين امقل", area: "تمنراست", lat: 23.69098370, lng: 5.15094340 },

  { id: 355, state: "تمنراست", municipality: "تمنراست", area: "تمنراست", lat: 22.78545430, lng: 5.53244650 },

  { id: 356, state: "تمنراست", municipality: "ابلسة", area: "ابلسة", lat: 22.88958340, lng: 4.84699310 },

  { id: 357, state: "عين صالح", municipality: "إينغر", area: "إينغر", lat: 27.10183190, lng: 1.90652640 },

  { id: 358, state: "عين قزام", municipality: "عين قزام", area: "عين قزام", lat: 19.56967070, lng: 5.77257440 },

  { id: 359, state: "تمنراست", municipality: "أدلس", area: "تاظروك", lat: 23.82043170, lng: 5.93576800 },

  { id: 360, state: "تمنراست", municipality: "تاظروك", area: "تاظروك", lat: 23.41962250, lng: 6.26589070 },

  { id: 361, state: "عين قزام", municipality: "تين زواتين", area: "تين زواتين", lat: 19.95419060, lng: 2.96947820 },

  { id: 362, state: "عين صالح", municipality: "عين صالح", area: "عين صالح", lat: 27.19503310, lng: 2.48261320 },

  { id: 363, state: "عين صالح", municipality: "فقارة الزوى", area: "عين صالح", lat: 27.35873070, lng: 2.84886520 },

  { id: 364, state: "تبسة", municipality: "تبسة", area: "تبسة", lat: 35.40359560, lng: 8.12123220 },

  { id: 365, state: "تبسة", municipality: "بئر العاتر", area: "بئر العاتر", lat: 34.74418820, lng: 8.05840120 },

  { id: 366, state: "تبسة", municipality: "العقلة المالحة", area: "بئر العاتر", lat: 35.13319310, lng: 8.00664890 },

  { id: 367, state: "تبسة", municipality: "الشريعة", area: "الشريعة", lat: 35.27067780, lng: 7.75271150 },

  { id: 368, state: "تبسة", municipality: "ثليجان", area: "الشريعة", lat: 34.83937400, lng: 7.75212400 },

  { id: 369, state: "تبسة", municipality: "بوخضرة", area: "العوينات", lat: 35.74495180, lng: 8.03468370 },

  { id: 370, state: "تبسة", municipality: "العوينات", area: "العوينات", lat: 35.89329250, lng: 3.03586600 },

  { id: 371, state: "تبسة", municipality: "فركان", area: "نقرين", lat: 34.49302950, lng: 7.36456230 },

  { id: 372, state: "تبسة", municipality: "نقرين", area: "نقرين", lat: 34.48551330, lng: 7.52195940 },

  { id: 373, state: "تبسة", municipality: "بئر مقدم", area: "قريقر", lat: 35.37040320, lng: 7.80850140 },

  { id: 374, state: "تبسة", municipality: "قريقر", area: "قريقر", lat: 35.42354620, lng: 7.59407840 },

  { id: 375, state: "تبسة", municipality: "الحمامات", area: "قريقر", lat: 36.81376120, lng: 2.97125540 },

  { id: 376, state: "تبسة", municipality: "بكارية", area: "الكويف", lat: 35.37465840, lng: 8.24070340 },

  { id: 377, state: "تبسة", municipality: "بولحاف الدير", area: "الكويف", lat: 35.48916400, lng: 8.07261960 },

  { id: 378, state: "تبسة", municipality: "الكويف", area: "الكويف", lat: 35.50082300, lng: 8.32196700 },

  { id: 379, state: "تبسة", municipality: "بئر الذهب", area: "مرسط", lat: 35.52457710, lng: 7.93950540 },

  { id: 380, state: "تبسة", municipality: "مرسط", area: "مرسط", lat: 35.67176540, lng: 8.01027280 },

  { id: 381, state: "تبسة", municipality: "بجن", area: "العقلة", lat: 35.33861130, lng: 7.48320560 },

  { id: 382, state: "تبسة", municipality: "المزرعة", area: "العقلة", lat: 35.26276440, lng: 7.57678680 },

  { id: 383, state: "تبسة", municipality: "العقلة", area: "العقلة", lat: 33.24659950, lng: 6.94608070 },

  { id: 384, state: "تبسة", municipality: "سطح قنطيس", area: "العقلة", lat: 34.83358540, lng: 7.49978840 },

  { id: 385, state: "تبسة", municipality: "عين الزرقاء", area: "الونزة", lat: 35.64801590, lng: 8.26032570 },

  { id: 386, state: "تبسة", municipality: "المريج", area: "الونزة", lat: 35.82364360, lng: 8.20335150 },

  { id: 387, state: "تبسة", municipality: "الونزة", area: "الونزة", lat: 35.94458540, lng: 8.13690110 },

  { id: 388, state: "تبسة", municipality: "الماء الابيض", area: "الحويجبات", lat: 35.20609240, lng: 8.17196940 },

  { id: 389, state: "تبسة", municipality: "الحويجبات", area: "الحويجبات", lat: 35.29305120, lng: 8.28015240 },

  { id: 390, state: "تبسة", municipality: "أم علي", area: "أم علي", lat: 35.01132850, lng: 8.30074430 },

  { id: 391, state: "تبسة", municipality: "صفصاف الوسرى", area: "أم علي", lat: 34.95648250, lng: 8.20712550 },

  { id: 392, state: "تلمسان", municipality: "تلمسان", area: "تلمسان", lat: 34.88178900, lng: -1.31669900 },

  { id: 393, state: "تلمسان", municipality: "عين النحالة", area: "عين تالوت", lat: 35.03246200, lng: -0.99006220 },

  { id: 394, state: "تلمسان", municipality: "عين تالوت", area: "عين تالوت", lat: 34.92999070, lng: -0.95427420 },

  { id: 395, state: "تلمسان", municipality: "عين يوسف", area: "الرمشي", lat: 35.04728650, lng: -1.37393190 },

  { id: 396, state: "تلمسان", municipality: "بني وارسوس", area: "الرمشي", lat: 35.09145400, lng: -1.58303750 },

  { id: 397, state: "تلمسان", municipality: "الفحول", area: "الرمشي", lat: 35.13795420, lng: -1.28321250 },

  { id: 398, state: "تلمسان", municipality: "الرمشي", area: "الرمشي", lat: 35.06172680, lng: -1.43183260 },

  { id: 399, state: "تلمسان", municipality: "سبعة شيوخ", area: "الرمشي", lat: 35.15640080, lng: -1.36057460 },

  { id: 400, state: "تلمسان", municipality: "بوحلو", area: "صبرة", lat: 34.80796930, lng: -1.60257220 },

  { id: 401, state: "تلمسان", municipality: "صبرة", area: "صبرة", lat: 34.82602480, lng: -1.53033500 },

  { id: 402, state: "تلمسان", municipality: "دار يغمراسن", area: "الغزوات", lat: 35.10531880, lng: -1.77411730 },

  { id: 403, state: "تلمسان", municipality: "الغزوات", area: "الغزوات", lat: 35.09386300, lng: -1.86322000 },

  { id: 404, state: "تلمسان", municipality: "السواحلية", area: "الغزوات", lat: 35.02699360, lng: -1.89701240 },

  { id: 405, state: "تلمسان", municipality: "تيانت", area: "الغزوات", lat: 35.05226130, lng: -1.83874900 },

  { id: 406, state: "تلمسان", municipality: "بني صميل", area: "أولاد ميمون", lat: 34.78512130, lng: -1.09171470 },

  { id: 407, state: "تلمسان", municipality: "وادي الخضر", area: "أولاد ميمون", lat: 34.87496260, lng: -1.13411450 },

  { id: 408, state: "تلمسان", municipality: "أولاد ميمون", area: "أولاد ميمون", lat: 34.90479400, lng: -1.02816740 },

  { id: 409, state: "تلمسان", municipality: "بني بهدل", area: "بني سنوس", lat: 34.69374420, lng: -1.51870110 },

  { id: 410, state: "تلمسان", municipality: "بني سنوس", area: "بني سنوس", lat: 34.62462820, lng: -1.55519570 },

  { id: 411, state: "تلمسان", municipality: "العزايل", area: "بني سنوس", lat: 34.65422490, lng: -1.42282840 },

  { id: 412, state: "تلمسان", municipality: "باب العسة", area: "سوق الثلاثاء", lat: 34.96610570, lng: -2.03179990 },

  { id: 413, state: "تلمسان", municipality: "السواني", area: "سوق الثلاثاء", lat: 34.92214750, lng: -1.91584230 },

  { id: 414, state: "تلمسان", municipality: "سوق الثلاثاء", area: "سوق الثلاثاء", lat: 35.02709450, lng: -1.99678320 },

  { id: 415, state: "تلمسان", municipality: "عين فتاح", area: "فلاوسن", lat: 34.97108270, lng: -1.64378060 },

  { id: 416, state: "تلمسان", municipality: "عين الكبيرة", area: "فلاوسن", lat: 35.02599710, lng: -1.68173750 },

  { id: 417, state: "تلمسان", municipality: "فلاوسن", area: "فلاوسن", lat: 35.01373510, lng: -1.57007330 },

  { id: 418, state: "تلمسان", municipality: "بن سكران", area: "سيدي العبدلي", lat: 35.11090000, lng: -1.19983960 },

  { id: 419, state: "تلمسان", municipality: "سيدي العبدلي", area: "سيدي العبدلي", lat: 35.04451500, lng: -1.11274160 },

  { id: 420, state: "تلمسان", municipality: "الحناية", area: "زناتة", lat: 36.09558930, lng: 4.47432540 },

  { id: 421, state: "تلمسان", municipality: "أولاد رياح", area: "زناتة", lat: 34.96102920, lng: -1.49804980 },

  { id: 422, state: "تلمسان", municipality: "زناتة", area: "زناتة", lat: 34.98949030, lng: -1.46305650 },

  { id: 423, state: "تلمسان", municipality: "حمام بوغرارة", area: "مغنية", lat: 34.89368130, lng: -1.63825740 },

  { id: 424, state: "تلمسان", municipality: "مغنية", area: "مغنية", lat: 34.84719900, lng: -1.72965800 },

  { id: 425, state: "تلمسان", municipality: "العريشة", area: "سبدو", lat: 34.22404220, lng: -1.25766530 },

  { id: 426, state: "تلمسان", municipality: "القور", area: "سبدو", lat: 34.55324640, lng: -1.05037080 },

  { id: 427, state: "تلمسان", municipality: "سبدو", area: "سبدو", lat: 34.64030220, lng: -1.32203830 },

  { id: 428, state: "تلمسان", municipality: "بني بوسعيد", area: "سيدي مجاهد", lat: 34.64802510, lng: -1.75298790 },

  { id: 429, state: "تلمسان", municipality: "سيدي مجاهد", area: "سيدي مجاهد", lat: 34.75328180, lng: -1.62445290 },

  { id: 430, state: "تلمسان", municipality: "مرسى بن مهيدي", area: "مسيردة الفواقة", lat: 35.08179920, lng: -2.20439710 },

  { id: 431, state: "تلمسان", municipality: "مسيردة الفواقة", area: "مسيردة الفواقة", lat: 35.01885770, lng: -2.08315650 },

  { id: 432, state: "تلمسان", municipality: "جبالة", area: "ندرومة", lat: 34.95990880, lng: -1.82128340 },

  { id: 433, state: "تلمسان", municipality: "ندرومة", area: "ندرومة", lat: 35.01076020, lng: -1.74805000 },

  { id: 434, state: "تلمسان", municipality: "البويهي", area: "سيدي الجيلالي", lat: 34.30263160, lng: -1.60212240 },

  { id: 435, state: "تلمسان", municipality: "سيدي الجيلالي", area: "سيدي الجيلالي", lat: 34.41682890, lng: -1.49538070 },

  { id: 436, state: "تلمسان", municipality: "بني خلاد", area: "هنين", lat: 35.18283000, lng: -1.58467860 },

  { id: 437, state: "تلمسان", municipality: "هنين", area: "هنين", lat: 35.17826400, lng: -1.65344210 },

  { id: 438, state: "تلمسان", municipality: "عين فزة", area: "شتوان", lat: 34.87804050, lng: -1.23485860 },

  { id: 439, state: "تلمسان", municipality: "عمير", area: "شتوان", lat: 35.00480570, lng: -1.23778290 },

  { id: 440, state: "تلمسان", municipality: "شتوان", area: "شتوان", lat: 34.92075910, lng: -1.29106420 },

  { id: 441, state: "تلمسان", municipality: "عين غرابة", area: "منصورة", lat: 34.73658370, lng: -1.39768440 },

  { id: 442, state: "تلمسان", municipality: "بني مستر", area: "منصورة", lat: 34.87044850, lng: -1.42100360 },

  { id: 443, state: "تلمسان", municipality: "منصورة", area: "منصورة", lat: 34.87331720, lng: -1.33026470 },

  { id: 444, state: "تلمسان", municipality: "تيرني بني هديل", area: "منصورة", lat: 34.79589790, lng: -1.35782810 },

  { id: 445, state: "تيارت", municipality: "تيارت", area: "تيارت", lat: 35.36597070, lng: 1.31845690 },

  { id: 446, state: "تيارت", municipality: "مدروسة", area: "ملاكو", lat: 35.18306590, lng: 1.15527090 },

  { id: 447, state: "تيارت", municipality: "ملاكو", area: "ملاكو", lat: 35.23806620, lng: 1.28077150 },

  { id: 448, state: "تيارت", municipality: "سيدي بختي", area: "ملاكو", lat: 35.23678110, lng: 0.99675050 },

  { id: 449, state: "تيارت", municipality: "عين الذهب", area: "عين الذهب", lat: 34.84640300, lng: 1.55078380 },

  { id: 450, state: "تيارت", municipality: "شحيمة", area: "عين الذهب", lat: 34.54461150, lng: 1.39079080 },

  { id: 451, state: "تيارت", municipality: "النعيمة", area: "عين الذهب", lat: 34.80707620, lng: 1.70943690 },

  { id: 452, state: "تيارت", municipality: "عين بوشقيف", area: "دحموني", lat: 35.33070930, lng: 1.48460260 },

  { id: 453, state: "تيارت", municipality: "دحموني", area: "دحموني", lat: 35.44930970, lng: 1.42443720 },

  { id: 454, state: "تيارت", municipality: "قرطوفة", area: "الرحوية", lat: 35.44925320, lng: 1.16763700 },

  { id: 455, state: "تيارت", municipality: "الرحوية", area: "الرحوية", lat: 35.53032000, lng: 1.02378330 },

  { id: 456, state: "تيارت", municipality: "عين دزاريت", area: "مهدية", lat: 35.35339030, lng: 1.66699430 },

  { id: 457, state: "تيارت", municipality: "مهدية", area: "مهدية", lat: 35.45698520, lng: 1.74147800 },

  { id: 458, state: "تيارت", municipality: "الناظورة", area: "مهدية", lat: 35.21549420, lng: 1.91279330 },

  { id: 459, state: "تيارت", municipality: "السبعين", area: "مهدية", lat: 35.45898950, lng: 1.60802200 },

  { id: 460, state: "تيارت", municipality: "الفايجة", area: "السوقر", lat: 34.89273190, lng: 1.96105100 },

  { id: 461, state: "تيارت", municipality: "سي عبد الغني", area: "السوقر", lat: 35.20873270, lng: 1.67684340 },

  { id: 462, state: "تيارت", municipality: "السوقر", area: "السوقr", lat: 35.18616700, lng: 1.49674500 },

  { id: 463, state: "تيارت", municipality: "توسنينة", area: "السوقر", lat: 35.09303040, lng: 1.32208130 },

  { id: 464, state: "تيارت", municipality: "مغيلة", area: "السبت", lat: 35.60622550, lng: 1.43539180 },

  { id: 465, state: "تيارت", municipality: "السبت", area: "السبت", lat: 35.61923370, lng: 1.35257490 },

  { id: 466, state: "تيارت", municipality: "سيدي حسني", area: "السبت", lat: 35.52889360, lng: 1.50656680 },

  { id: 467, state: "تيارت", municipality: "عين الحديد", area: "فرندة", lat: 35.05547960, lng: 0.88563450 },

  { id: 468, state: "تيارت", municipality: "فرندة", area: "فرندة", lat: 35.06559650, lng: 1.05660920 },

  { id: 469, state: "تيارت", municipality: "تخمرت", area: "فرندة", lat: 35.10729310, lng: 0.68335720 },

  { id: 470, state: "تيارت", municipality: "عين كرمس", area: "مادنة", lat: 34.92880070, lng: 1.07039000 },

  { id: 471, state: "تيارت", municipality: "جبيلات الرصفاء", area: "مادنة", lat: 34.84640750, lng: 0.79430030 },

  { id: 472, state: "تيارت", municipality: "مادنة", area: "مادنة", lat: 34.75394620, lng: 0.98316480 },

  { id: 473, state: "تيارت", municipality: "مدريسة", area: "مادنة", lat: 34.89248590, lng: 1.24580480 },

  { id: 474, state: "تيارت", municipality: "سيدي عبد الرحمن", area: "مادنة", lat: 36.47917470, lng: 1.12575860 },

  { id: 475, state: "تيارت", municipality: "قصر الشلالة", area: "قصر الشلالة", lat: 35.21434530, lng: 2.31294030 },

  { id: 476, state: "تيارت", municipality: "سرغين", area: "قصر الشلالة", lat: 35.25434470, lng: 2.48566640 },

  { id: 477, state: "تيارت", municipality: "زمالة الأمير عبد القادر", area: "قصر الشلالة", lat: 34.89460600, lng: 2.30994410 },

  { id: 478, state: "تيارت", municipality: "وادي ليلي", area: "وادي ليلي", lat: 35.50706190, lng: 1.26739330 },

  { id: 479, state: "تيارت", municipality: "سيدي علي ملال", area: "وادي ليلي", lat: 35.60062230, lng: 1.16742390 },

  { id: 480, state: "تيارت", municipality: "تيدة", area: "وادي ليلي", lat: 35.60251610, lng: 1.27062080 },

  { id: 481, state: "تيارت", municipality: "جيلالي بن عمار", area: "تاقدمت", lat: 35.44592220, lng: 0.84990860 },

  { id: 482, state: "تيارت", municipality: "مشرع الصفا", area: "تاقدمت", lat: 35.38486360, lng: 1.05443390 },

  { id: 483, state: "تيارت", municipality: "تاقدمت", area: "تاقدمت", lat: 35.33477340, lng: 1.22905010 },

  { id: 484, state: "تيارت", municipality: "بوقرة", area: "حمادية", lat: 35.54613520, lng: 1.98934030 },

  { id: 485, state: "تيارت", municipality: "حمادية", area: "حمادية", lat: 35.45840770, lng: 1.87239350 },

  { id: 486, state: "تيارت", municipality: "الرشايقة", area: "حمادية", lat: 35.31223300, lng: 2.12030690 },

  { id: 487, state: "تيزي وزو", municipality: "تيزي وزو", area: "تيزي وزو", lat: 36.71378430, lng: 4.04939190 },

  { id: 488, state: "تيزي وزو", municipality: "أبي يوسف", area: "عين الحمام", lat: 36.53847460, lng: 4.34386120 },

  { id: 489, state: "تيزي وزو", municipality: "عين الحمام", area: "عين الحمام", lat: 36.57043260, lng: 4.31113660 },

  { id: 490, state: "تيزي وزو", municipality: "أيت يحيى", area: "عين الحمام", lat: 36.59925460, lng: 4.34346790 },

  { id: 491, state: "تيزي وزو", municipality: "اقبيل", area: "عين الحمام", lat: 36.50402380, lng: 4.31001600 },

  { id: 492, state: "تيزي وزو", municipality: "بوجيمة", area: "ماكودة", lat: 36.80470720, lng: 4.14884000 },

  { id: 493, state: "تيزي وزو", municipality: "ماكودة", area: "ماكودة", lat: 36.79197340, lng: 4.06242210 },

  { id: 494, state: "تيزي وزو", municipality: "عين الزاوية", area: "ذراع الميزان", lat: 36.55023510, lng: 3.89486740 },

  { id: 495, state: "تيزي وزو", municipality: "أيت يحي موسى", area: "ذراع الميزان", lat: 36.63791220, lng: 3.88622830 },

  { id: 496, state: "تيزي وزو", municipality: "ذراع الميزان", area: "ذراع الميزان", lat: 36.53506480, lng: 3.83803580 },

  { id: 497, state: "تيزي وزو", municipality: "فريقات", area: "ذراع الميزان", lat: 36.51335320, lng: 3.88565980 },

  { id: 498, state: "تيزي وزو", municipality: "مكيرة", area: "تيزي غنيف", lat: 36.63156750, lng: 3.78300060 },

  { id: 499, state: "تيزي وزو", municipality: "تيزي غنيف", area: "تيزي غنيف", lat: 36.58722740, lng: 3.77427590 },

  { id: 500, state: "تيزي وزو", municipality: "إفرحونان", area: "إفرحونان", lat: 36.52096750, lng: 4.36952220 },

  { id: 501, state: "تيزي وزو", municipality: "إيليتتن", area: "إفرحونان", lat: 36.51606170, lng: 4.39441510 },

  { id: 502, state: "تيزي وزو", municipality: "إمسوحال", area: "إفرحونان", lat: 36.58027790, lng: 4.39271170 },

  { id: 503, state: "تيزي وزو", municipality: "عزازقة", area: "عزازقة", lat: 36.74473800, lng: 4.37163990 },

  { id: 504, state: "تيزي وزو", municipality: "فريحة", area: "عزازقة", lat: 36.75739900, lng: 4.31944540 },

  { id: 505, state: "تيزي وزو", municipality: "إيفيغاء", area: "عزازقة", lat: 36.67149290, lng: 4.41379890 },

  { id: 506, state: "تيزي وزو", municipality: "إعكورن", area: "عزازقة", lat: 36.73359370, lng: 4.43899440 },

  { id: 507, state: "تيزي وزو", municipality: "زكري", area: "عزازقة", lat: 36.78033970, lng: 4.58951930 },

  { id: 508, state: "تيزي وزو", municipality: "أيت عقواشة", area: "الأربعاء ناث إيراثن", lat: 36.61781360, lng: 4.23248800 },

  { id: 509, state: "تيزي وزو", municipality: "إيرجن", area: "الأربعاء ناث إيراثن", lat: 36.66830280, lng: 4.14647620 },

  { id: 510, state: "تيزي وزو", municipality: "الأربعاء ناث إيراثن", area: "الأربعاء ناث إيراثن", lat: 36.63749180, lng: 4.20284660 },

  { id: 511, state: "تيزي وزو", municipality: "أيت أومالو", area: "تيزي راشد", lat: 36.65516980, lng: 4.22843890 },

  { id: 512, state: "تيزي وزو", municipality: "تيزي راشد", area: "تيزي راشد", lat: 36.67896620, lng: 4.20861640 },

  { id: 513, state: "تيزي وزو", municipality: "أيت عيسى ميمون", area: "تيميزار", lat: 36.75065440, lng: 4.11032470 },

  { id: 514, state: "تيزي وزو", municipality: "واقنون", area: "تيميزار", lat: 36.75884920, lng: 4.18441090 },

  { id: 515, state: "تيزي وزو", municipality: "تيميزار", area: "تيميزار", lat: 36.79782080, lng: 4.24618750 },

  { id: 516, state: "تيزي وزو", municipality: "معاتقة", area: "سوق الإثنين", lat: 36.61071750, lng: 3.97018610 },

  { id: 517, state: "تيزي وزو", municipality: "سوق الإثنين", area: "سوق الإثنين", lat: 36.59508320, lng: 4.00730100 },

  { id: 518, state: "تيزي وزو", municipality: "أيت محمود", area: "بني عيسي", lat: 36.61018030, lng: 4.11951400 },

  { id: 519, state: "تيزي وزو", municipality: "بني زمنزار", area: "بني عيسي", lat: 36.63706420, lng: 4.03906300 },

  { id: 520, state: "تيزي وزو", municipality: "بني عيسي", area: "بني عيسي", lat: 36.65770450, lng: 4.08933020 },

  { id: 521, state: "تيزي وزو", municipality: "بني دوالة", area: "بني عيسي", lat: 36.61887960, lng: 4.08249330 },

  { id: 522, state: "تيزي وزو", municipality: "بني زيكي", area: "بوزقن", lat: 36.56584600, lng: 4.50680050 },

  { id: 523, state: "تيزي وزو", municipality: "بوزقن", area: "بوزقن", lat: 36.61704120, lng: 4.47702400 },

  { id: 524, state: "تيزي وزو", municipality: "إيجار", area: "بوزقن", lat: 36.67391700, lng: 4.53632300 },

  { id: 525, state: "تيزي وزو", municipality: "إيلولة أومالو", area: "بوزقن", lat: 36.56499950, lng: 4.44873660 },

  { id: 526, state: "تيزي وزو", municipality: "أقني قغران", area: "واضية", lat: 36.51441280, lng: 4.11349080 },

  { id: 527, state: "تيزي وزو", municipality: "أيت بوادو", area: "واضية", lat: 36.50320980, lng: 4.06125450 },

  { id: 528, state: "تيزي وزو", municipality: "واضية", area: "واضية", lat: 36.54940000, lng: 4.08420000 },

  { id: 529, state: "تيزي وزو", municipality: "تيزي نثلاثة", area: "واضية", lat: 36.54609830, lng: 4.05761220 },

  { id: 530, state: "تيزي وزو", municipality: "أغريب", area: "أزفون", lat: 36.80453130, lng: 4.32309470 },

  { id: 531, state: "تيزي وزو", municipality: "أيت شافع", area: "أزفون", lat: 36.82250020, lng: 4.52552840 },

  { id: 532, state: "تيزي وزو", municipality: "أقرو", area: "أزفون", lat: 36.80743900, lng: 4.44218460 },

  { id: 533, state: "تيزي وزو", municipality: "أزفون", area: "أزفون", lat: 36.89307250, lng: 4.42039170 },

  { id: 534, state: "تيزي وزو", municipality: "إفليسن", area: "تيقزيرت", lat: 36.87221670, lng: 4.22218770 },

  { id: 535, state: "تيزي وزو", municipality: "ميزرانة", area: "تيقزيرت", lat: 36.84471640, lng: 4.09625880 },

  { id: 536, state: "تيزي وزو", municipality: "تيقزيرت", area: "تيقزيرت", lat: 36.89266140, lng: 4.12617900 },

  { id: 537, state: "تيزي وزو", municipality: "أسي يوسف", area: "بوغني", lat: 36.50554210, lng: 4.01451540 },

  { id: 538, state: "تيزي وزو", municipality: "بوغني", area: "بوغني", lat: 36.54074710, lng: 3.95712850 },

  { id: 539, state: "تيزي وزو", municipality: "بونوح", area: "بوغني", lat: 36.49326500, lng: 3.93756560 },

  { id: 540, state: "تيزي وزو", municipality: "مشطراس", area: "بوغني", lat: 36.54389170, lng: 4.01109200 },

  { id: 541, state: "تيزي وزو", municipality: "ذراع بن خدة", area: "ذراع بن خدة", lat: 36.73313430, lng: 3.95909030 },

  { id: 542, state: "تيزي وزو", municipality: "سيدي نعمان", area: "ذراع بن خدة", lat: 36.75861770, lng: 3.98142330 },

  { id: 543, state: "تيزي وزو", municipality: "تادمايت", area: "ذراع بن خدة", lat: 36.74465730, lng: 3.90122560 },

  { id: 544, state: "تيزي وزو", municipality: "تيرمتين", area: "ذراع بن خدة", lat: 36.66868110, lng: 3.96537310 },

  { id: 545, state: "تيزي وزو", municipality: "أيت بومهدي", area: "واسيف", lat: 36.49888130, lng: 4.20199930 },

  { id: 546, state: "تيزي وزو", municipality: "أيت تودرت", area: "واسيف", lat: 36.52031060, lng: 4.18445130 },

  { id: 547, state: "تيزي وزو", municipality: "واسيف", area: "واسيف", lat: 36.52385400, lng: 4.20491760 },

  { id: 548, state: "تيزي وزو", municipality: "أيت خليلي", area: "مقلع", lat: 36.67579210, lng: 4.30882000 },

  { id: 549, state: "تيزي وزو", municipality: "مقلع", area: "مقلع", lat: 36.68763910, lng: 4.26811850 },

  { id: 550, state: "تيزي وزو", municipality: "صوامع", area: "مقلع", lat: 36.64228760, lng: 4.34221780 },

  { id: 551, state: "تيزي وزو", municipality: "بني يني", area: "بني يني", lat: 36.58294520, lng: 4.19647380 },

  { id: 552, state: "تيزي وزو", municipality: "إبودرارن", area: "بني يني", lat: 36.50931400, lng: 4.25128240 },

  { id: 553, state: "تيزي وزو", municipality: "يطافن", area: "بني يني", lat: 36.55190790, lng: 4.25575730 },

  { id: 554, state: "الجزائر", municipality: "الجزائر الوسطى", area: "الجزائر الوسطى", lat: 36.77618810, lng: 3.05831280 },

  { id: 555, state: "الجزائر", municipality: "المدنية", area: "الجزائر الوسطى", lat: 36.74200670, lng: 3.06657150 },

  { id: 556, state: "الجزائر", municipality: "المرادية", area: "الجزائر الوسطى", lat: 36.74749630, lng: 3.05009350 },

  { id: 557, state: "الجزائر", municipality: "سيدي امحمد", area: "الجزائر الوسطى", lat: 36.76442380, lng: 3.04963190 },

  { id: 558, state: "الجزائر", municipality: "باب الوادي", area: "باب الوادي", lat: 36.79076770, lng: 3.05308120 },

  { id: 559, state: "الجزائر", municipality: "بولوغين بن زيري", area: "باب الوادي", lat: 36.80467780, lng: 3.04261680 },

  { id: 560, state: "الجزائر", municipality: "القصبة", area: "باب الوادي", lat: 36.78467660, lng: 3.05958650 },

  { id: 561, state: "الجزائر", municipality: "وادي قريش", area: "باب الوادي", lat: 36.78534870, lng: 3.04309180 },

  { id: 562, state: "الجزائر", municipality: "الرايس حميدو", area: "باب الوادي", lat: 36.81741280, lng: 3.01147010 },

  { id: 563, state: "الجزائر", municipality: "بئر مراد رايس", area: "بئر مراد رايس", lat: 36.73939380, lng: 3.05007480 },

  { id: 564, state: "الجزائر", municipality: "بئر خادم", area: "بئر مراد رايس", lat: 36.71607500, lng: 3.04973610 },

  { id: 565, state: "الجزائر", municipality: "جسر قسنطينة", area: "بئر مراد رايس", lat: 36.70247220, lng: 3.08019510 },

  { id: 566, state: "الجزائر", municipality: "حيدرة", area: "بئر مراد رايس", lat: 36.74742590, lng: 3.04018320 },

  { id: 567, state: "الجزائر", municipality: "السحاولة", area: "بئر مراد رايس", lat: 36.70270160, lng: 3.02389940 },

  { id: 568, state: "الجزائر", municipality: "ابن عكنون", area: "بوزريعة", lat: 36.75927100, lng: 3.01971690 },

  { id: 569, state: "الجزائر", municipality: "بني مسوس", area: "بوزريعة", lat: 36.78009960, lng: 2.97453580 },

  { id: 570, state: "الجزائر", municipality: "بوزريعة", area: "بوزريعة", lat: 36.79037200, lng: 3.01661970 },

  { id: 571, state: "الجزائر", municipality: "الابيار", area: "بوزريعة", lat: 36.76888180, lng: 3.03065100 },

  { id: 572, state: "الجزائر", municipality: "باش جراح", area: "الحراش", lat: 36.72302640, lng: 3.11307290 },

  { id: 573, state: "الجزائر", municipality: "بوروبة", area: "الحراش", lat: 36.71382320, lng: 3.11257890 },

  { id: 574, state: "الجزائر", municipality: "الحراش", area: "الحراش", lat: 36.71191550, lng: 3.13889430 },

  { id: 575, state: "الجزائر", municipality: "وادي السمار", area: "الحراش", lat: 36.70441990, lng: 3.16815610 },

  { id: 576, state: "الجزائر", municipality: "براقي", area: "براقي", lat: 36.67000490, lng: 3.10031520 },

  { id: 577, state: "الجزائر", municipality: "الكاليتوس", area: "براقي", lat: 36.65671430, lng: 3.14726160 },

  { id: 578, state: "الجزائر", municipality: "سيدي موسى", area: "براقي", lat: 36.60625380, lng: 3.08814620 },

  { id: 579, state: "الجزائر", municipality: "المغارية", area: "القبة", lat: 36.73133490, lng: 3.10855690 },

  { id: 580, state: "الجزائر", municipality: "حسين داي", area: "القبة", lat: 36.74293880, lng: 3.09402700 },

  { id: 581, state: "الجزائر", municipality: "القبة", area: "القبة", lat: 36.73244360, lng: 3.08753580 },

  { id: 582, state: "الجزائر", municipality: "محمد بلوزداد", area: "القبة", lat: 36.74424130, lng: 3.07839590 },

  { id: 583, state: "الجزائر", municipality: "عين طاية", area: "عين طاية", lat: 36.79129020, lng: 3.29261940 },

  { id: 584, state: "الجزائر", municipality: "باب الزوار", area: "عين طاية", lat: 36.72280210, lng: 3.18388630 },

  { id: 585, state: "الجزائر", municipality: "برج البحري", area: "عين طاية", lat: 36.79079490, lng: 3.25017750 },

  { id: 586, state: "الجزائر", municipality: "برج الكيفان", area: "عين طاية", lat: 36.74727300, lng: 3.19089530 },

  { id: 587, state: "الجزائر", municipality: "الدار البيضاء", area: "عين طاية", lat: 36.71497680, lng: 3.20946110 },

  { id: 588, state: "الجزائر", municipality: "المرسى", area: "عين طاية", lat: 36.80912810, lng: 3.25460390 },

  { id: 589, state: "الجزائر", municipality: "المحمدية", area: "عين طاية", lat: 36.73333300, lng: 3.13333300 },

  { id: 590, state: "الجزائر", municipality: "بئر توتة", area: "اولاد شبل", lat: 36.64498840, lng: 2.99855330 },

  { id: 591, state: "الجزائر", municipality: "اولاد شبل", area: "اولاد شبل", lat: 36.59815740, lng: 2.99495040 },

  { id: 592, state: "الجزائر", municipality: "تسالة المرجة", area: "اولاد شبل", lat: 36.63071930, lng: 2.94551740 },

  { id: 593, state: "الجزائر", municipality: "هراوة", area: "رغاية", lat: 36.77274590, lng: 3.30850080 },

  { id: 594, state: "الجزائر", municipality: "رغاية", area: "رغاية", lat: 36.72680400, lng: 3.30809030 },

  { id: 595, state: "الجزائر", municipality: "الرويبة", area: "رغاية", lat: 36.73642370, lng: 3.28264170 },

  { id: 596, state: "الجزائر", municipality: "المعالمة", area: "زرالدة", lat: 36.68236290, lng: 2.87765000 },

  { id: 597, state: "الجزائر", municipality: "الرحمانية", area: "زرالدة", lat: 36.68053670, lng: 2.90646840 },

  { id: 598, state: "الجزائر", municipality: "سويدانية", area: "زرالدة", lat: 36.70797480, lng: 2.91255920 },

  { id: 599, state: "الجزائر", municipality: "سطاوالي", area: "زرالدة", lat: 36.75327550, lng: 2.88818220 },

  { id: 600, state: "الجزائر", municipality: "زرالدة", area: "زرالدة", lat: 36.71203920, lng: 2.84078940 },

  { id: 601, state: "الجزائر", municipality: "بابا حسن", area: "الدرارية", lat: 36.69437830, lng: 2.97182230 },

  { id: 602, state: "الجزائر", municipality: "الدويرة", area: "الدرارية", lat: 36.66686050, lng: 2.92616890 },

  { id: 603, state: "الجزائر", municipality: "الدرارية", area: "الدرارية", lat: 36.71378750, lng: 3.00160250 },

  { id: 604, state: "الجزائر", municipality: "العاشور", area: "الدرارية", lat: 36.73416240, lng: 2.99052360 },

  { id: 605, state: "الجزائر", municipality: "الخرايسية", area: "الدرارية", lat: 36.67718680, lng: 2.98177000 },

  { id: 606, state: "الجزائر", municipality: "عين بنيان", area: "الشراقة", lat: 36.80330590, lng: 2.92167860 },

  { id: 607, state: "الجزائر", municipality: "الشراقة", area: "الشراقة", lat: 36.76692690, lng: 2.96025710 },

  { id: 608, state: "الجزائر", municipality: "دالي ابراهيم", area: "الشراقة", lat: 36.75203160, lng: 2.98151010 },

  { id: 609, state: "الجزائر", municipality: "الحمامات", area: "الشراقة", lat: 36.81376120, lng: 2.97125540 },

  { id: 610, state: "الجزائر", municipality: "اولاد فايت", area: "الشراقة", lat: 36.73552490, lng: 2.95090640 },

  { id: 611, state: "الجلفة", municipality: "الجلفة", area: "الجلفة", lat: 34.67138670, lng: 3.25401930 },

  { id: 612, state: "الجلفة", municipality: "عين معبد", area: "حاسي بحبح", lat: 34.83615260, lng: 3.15037240 },

  { id: 613, state: "الجلفة", municipality: "حاسي بحبح", area: "حاسي بحبح", lat: 35.07475360, lng: 3.02704880 },

  { id: 614, state: "الجلفة", municipality: "حاسي العش", area: "حاسي بحبح", lat: 35.15269240, lng: 3.24846150 },

  { id: 615, state: "الجلفة", municipality: "زعفران", area: "حاسي بحبح", lat: 34.85025490, lng: 2.85496240 },

  { id: 616, state: "الجلفة", municipality: "عمورة", area: "فيض البطمة", lat: 34.21077950, lng: 4.00194970 },

  { id: 617, state: "الجلفة", municipality: "فيض البطمة", area: "فيض البطمة", lat: 34.52865980, lng: 3.78490900 },

  { id: 618, state: "الجلفة", municipality: "أم العظام", area: "فيض البطمة", lat: 33.72002040, lng: 4.53099250 },

  { id: 619, state: "الجلفة", municipality: "بنهار", area: "بيرين", lat: 35.48490800, lng: 3.00944000 },

  { id: 620, state: "الجلفة", municipality: "بيرين", area: "بيرين", lat: 35.63373860, lng: 3.22440160 },

  { id: 621, state: "الجلفة", municipality: "عين الشهداء", area: "الادريسية", lat: 34.22335970, lng: 2.58352740 },

  { id: 622, state: "الجلفة", municipality: "دويس", area: "الادريسية", lat: 34.26176650, lng: 2.75893420 },

  { id: 623, state: "الجلفة", municipality: "الادريسية", area: "الادريسية", lat: 34.44866770, lng: 2.53128730 },

  { id: 624, state: "الجلفة", municipality: "دلدول", area: "مسعد", lat: 34.04994460, lng: 3.36816070 },

  { id: 625, state: "الجلفة", municipality: "قطارة", area: "مسعد", lat: 33.29175330, lng: 4.41259730 },

  { id: 626, state: "الجلفة", municipality: "مسعد", area: "مسعد", lat: 34.15408110, lng: 3.49223100 },

  { id: 627, state: "الجلفة", municipality: "سد الرحال", area: "مسعد", lat: 33.74571930, lng: 3.56766020 },

  { id: 628, state: "الجلفة", municipality: "سلمانة", area: "مسعد", lat: 34.03079820, lng: 3.72651980 },

  { id: 629, state: "الجلفة", municipality: "الخميس", area: "سيدي لعجال", lat: 35.40507610, lng: 2.70487770 },

  { id: 630, state: "الجلفة", municipality: "حاسي فدول", area: "سيدي لعجال", lat: 35.43671230, lng: 2.21410250 },

  { id: 631, state: "الجلفة", municipality: "سيدي لعجال", area: "سيدي لعجال", lat: 35.43812720, lng: 2.51577050 },

  { id: 632, state: "الجلفة", municipality: "عين فقه", area: "بويرة الأحداب", lat: 35.42665070, lng: 3.57760410 },

  { id: 633, state: "الجلفة", municipality: "بويرة الأحداب", area: "بويرة الأحداب", lat: 35.21561730, lng: 3.11797930 },

  { id: 634, state: "الجلفة", municipality: "حد الصحاري", area: "بويرة الأحداب", lat: 35.35066020, lng: 3.36405730 },

  { id: 635, state: "الجلفة", municipality: "دار الشيوخ", area: "دار الشيوخ", lat: 34.89729240, lng: 3.48972490 },

  { id: 636, state: "الجلفة", municipality: "مليليحة", area: "دار الشيوخ", lat: 34.71957440, lng: 3.68897400 },

  { id: 637, state: "الجلفة", municipality: "سيدي بايزيد", area: "دار الشيوخ", lat: 35.01880700, lng: 3.43216880 },

  { id: 638, state: "الجلفة", municipality: "بنى يعقوب", area: "الشارف", lat: 34.46580000, lng: 2.78500000 },

  { id: 639, state: "الجلفة", municipality: "الشارف", area: "الشارف", lat: 34.62709180, lng: 2.80591710 },

  { id: 640, state: "الجلفة", municipality: "القديد", area: "الشارف", lat: 34.66548610, lng: 2.52977510 },

  { id: 641, state: "الجلفة", municipality: "عين الإبل", area: "عين الإبل", lat: 34.35506160, lng: 3.22383010 },

  { id: 642, state: "الجلفة", municipality: "مجبارة", area: "عين الإبل", lat: 34.48736550, lng: 3.50932860 },

  { id: 643, state: "الجلفة", municipality: "تعظميت", area: "عين الإبل", lat: 34.29009690, lng: 2.94434560 },

  { id: 644, state: "الجلفة", municipality: "زكار", area: "عين الإبل", lat: 34.46537220, lng: 3.34527100 },

  { id: 645, state: "الجلفة", municipality: "عين وسارة", area: "عين وسارة", lat: 35.44925820, lng: 2.90710650 },

  { id: 646, state: "الجلفة", municipality: "قرنيني", area: "عين وسارة", lat: 35.16877150, lng: 2.78769150 },

  { id: 647, state: "جيجل", municipality: "جيجل", area: "جيجل", lat: 36.81673050, lng: 5.77149400 },

  { id: 648, state: "جيجل", municipality: "العوانة", area: "سلمى بن زيادة", lat: 36.77165650, lng: 5.61146990 },

  { id: 649, state: "جيجل", municipality: "سلمى بن زيادة", area: "سلمى بن زيادة", lat: 36.64999540, lng: 5.63319300 },

  { id: 650, state: "جيجل", municipality: "أراقن سويسي", area: "زيامة منصورية", lat: 36.58645880, lng: 5.58128650 },

  { id: 651, state: "جيجل", municipality: "زيامة منصورية", area: "زيامة منصورية", lat: 36.67215060, lng: 5.48083120 },

  { id: 652, state: "جيجل", municipality: "بوسيف أولاد عسكر", area: "الطاهير", lat: 36.66359600, lng: 6.01775360 },

  { id: 653, state: "جيجل", municipality: "الشحنة", area: "الطاهير", lat: 36.65866700, lng: 5.94420050 },

  { id: 654, state: "جيجل", municipality: "الامير عبد القادر", area: "الطاهير", lat: 36.75469040, lng: 5.84432280 },

  { id: 655, state: "جيجل", municipality: "وجانة", area: "الطاهير", lat: 36.67542710, lng: 5.88379940 },

  { id: 656, state: "جيجل", municipality: "الطاهير", area: "الطاهير", lat: 36.77129120, lng: 5.89758900 },

  { id: 657, state: "جيجل", municipality: "برج الطهر", area: "الشقفة", lat: 36.74830180, lng: 6.05127740 },

  { id: 658, state: "جيجل", municipality: "الشقفة", area: "الشقفة", lat: 36.77127230, lng: 5.96124560 },

  { id: 659, state: "جيجل", municipality: "القنار نشفي", area: "الشقفة", lat: 36.81250180, lng: 5.98629320 },

  { id: 660, state: "جيجل", municipality: "سيدي عبد العزيز", area: "الشقفة", lat: 36.85326100, lng: 6.05147300 },

  { id: 661, state: "جيجل", municipality: "الميلية", area: "الميلية", lat: 36.75141040, lng: 6.27446140 },

  { id: 662, state: "جيجل", municipality: "أولاد يحيى خدروش", area: "الميلية", lat: 36.69071980, lng: 6.19013730 },

  { id: 663, state: "جيجل", municipality: "أولاد رابح", area: "سيدي معروف", lat: 36.62165590, lng: 6.17312000 },

  { id: 664, state: "جيجل", municipality: "سيدي معروف", area: "سيدي معروف", lat: 36.64000650, lng: 6.27417060 },

  { id: 665, state: "جيجل", municipality: "غبالة", area: "السطارة", lat: 36.62825000, lng: 6.38821800 },

  { id: 666, state: "جيجل", municipality: "السطارة", area: "السطارة", lat: 36.70527170, lng: 6.35916570 },

  { id: 667, state: "جيجل", municipality: "بوراوي بلهادف", area: "الجمعة بني حبيبي", lat: 36.69553520, lng: 6.09517000 },

  { id: 668, state: "جيجل", municipality: "الجمعة بني حبيبي", area: "الجمعة بني حبيبي", lat: 36.80104470, lng: 6.09326440 },

  { id: 669, state: "جيجل", municipality: "العنصر", area: "الجمعة بني حبيبي", lat: 36.79416350, lng: 6.17707860 },

  { id: 670, state: "جيجل", municipality: "خيري واد عجول", area: "الجمعة بني حبيبي", lat: 36.85778990, lng: 6.15739250 },

  { id: 671, state: "جيجل", municipality: "بودريعة بني ياجيس", area: "جيملة", lat: 36.59012570, lng: 5.75956240 },

  { id: 672, state: "جيجل", municipality: "جيملة", area: "جيملة", lat: 36.58217200, lng: 5.89738010 },

  { id: 673, state: "جيجل", municipality: "قاوس", area: "تاكسنة", lat: 36.77017230, lng: 5.81361680 },

  { id: 674, state: "جيجل", municipality: "تاكسنة", area: "تاكسنة", lat: 36.66057080, lng: 5.79097780 },

  { id: 675, state: "سطيف", municipality: "سطيف", area: "سطيف", lat: 36.18958520, lng: 5.40246560 },

  { id: 676, state: "سطيف", municipality: "عين الكبيرة", area: "عين الكبيرة", lat: 36.36484460, lng: 5.50693560 },

  { id: 677, state: "سطيف", municipality: "الدهامشة", area: "عين الكبيرة", lat: 36.38356620, lng: 5.59249520 },

  { id: 678, state: "سطيف", municipality: "أولاد عدوان", area: "عين الكبيرة", lat: 36.33758790, lng: 5.43747550 },

  { id: 679, state: "سطيف", municipality: "عين السبت", area: "بني عزيز", lat: 36.49495110, lng: 5.71855750 },

  { id: 680, state: "سطيف", municipality: "بني عزيز", area: "بني عزيز", lat: 36.46450620, lng: 5.64901390 },

  { id: 681, state: "سطيف", municipality: "معاوية", area: "بني عزيز", lat: 36.37502700, lng: 5.71182480 },

  { id: 682, state: "سطيف", municipality: "بلاعة", area: "بئر العرش", lat: 36.22069400, lng: 5.86905710 },

  { id: 683, state: "سطيف", municipality: "بئر العرش", area: "بئر العرش", lat: 36.13039250, lng: 5.83920640 },

  { id: 684, state: "سطيف", municipality: "الولجة", area: "بئر العرش", lat: 36.08824300, lng: 5.92219890 },

  { id: 685, state: "سطيف", municipality: "تاشودة", area: "بئر العرش", lat: 36.26748500, lng: 5.74002390 },

  { id: 686, state: "سطيف", municipality: "بابور", area: "بابور", lat: 36.48986220, lng: 5.53782930 },

  { id: 687, state: "سطيف", municipality: "سرج الغول", area: "بابور", lat: 36.47783940, lng: 5.58048020 },

  { id: 688, state: "سطيف", municipality: "قجال", area: "قجال", lat: 36.08127800, lng: 5.49202630 },

  { id: 689, state: "سطيف", municipality: "أولاد صابر", area: "قجال", lat: 36.18194250, lng: 5.54038570 },

  { id: 690, state: "سطيف", municipality: "بازر سكرة", area: "العلمة", lat: 36.11632290, lng: 5.71111390 },

  { id: 691, state: "سطيف", municipality: "العلمة", area: "العلمة", lat: 36.15290570, lng: 5.69115880 },

  { id: 692, state: "سطيف", municipality: "قلتة زرقاء", area: "العلمة", lat: 36.20575000, lng: 5.67993430 },

  { id: 693, state: "سطيف", municipality: "بني فودة", area: "جميلة", lat: 36.28031600, lng: 5.55334700 },

  { id: 694, state: "سطيف", municipality: "جميلة", area: "جميلة", lat: 36.31461870, lng: 5.73715620 },

  { id: 695, state: "سطيف", municipality: "عين لقراج", area: "بني ورتيلان", lat: 36.41111450, lng: 4.90330970 },

  { id: 696, state: "سطيف", municipality: "بني شبانة", area: "بني ورتيلان", lat: 36.46842620, lng: 4.86840470 },

  { id: 697, state: "سطيف", municipality: "بني ورتيلان", area: "بني ورتيلان", lat: 36.44225850, lng: 4.85574250 },

  { id: 698, state: "سطيف", municipality: "بني موحلي", area: "بني ورتيلان", lat: 36.51321350, lng: 4.89400320 },

  { id: 699, state: "سطيف", municipality: "عين عباسة", area: "عين أرنات", lat: 36.30004820, lng: 5.29533370 },

  { id: 700, state: "سطيف", municipality: "عين أرنات", area: "عين أرنات", lat: 36.18493670, lng: 5.31448690 },

  { id: 701, state: "سطيف", municipality: "أوريسيا", area: "عين أرنات", lat: 36.28376740, lng: 5.40956610 },

  { id: 702, state: "سطيف", municipality: "مزلوق", area: "عين أرنات", lat: 36.10742010, lng: 5.33719320 },

  { id: 703, state: "سطيف", municipality: "عموشة", area: "عموشة", lat: 36.37662450, lng: 5.41818840 },

  { id: 704, state: "سطيف", municipality: "واد البارد", area: "عموشة", lat: 36.49874750, lng: 5.40623150 },

  { id: 705, state: "سطيف", municipality: "تيزي نبشار", area: "عموشة", lat: 36.43148810, lng: 5.35989830 },

  { id: 706, state: "سطيف", municipality: "عين ولمان", area: "عين ولمان", lat: 35.92316890, lng: 5.29592320 },

  { id: 707, state: "سطيف", municipality: "قلال", area: "عين ولمان", lat: 36.03399340, lng: 5.33878390 },

  { id: 708, state: "سطيف", municipality: "قصر الابطال", area: "عين ولمان", lat: 35.97370470, lng: 5.28904970 },

  { id: 709, state: "سطيف", municipality: "أولاد سي أحمد", area: "عين ولمان", lat: 35.90125970, lng: 5.19113300 },

  { id: 710, state: "سطيف", municipality: "أيت نوال مزادة", area: "بوعنداس", lat: 36.54586960, lng: 5.08396290 },

  { id: 711, state: "سطيف", municipality: "ايت تيزي", area: "بوعنداس", lat: 36.53541350, lng: 5.15664510 },

  { id: 712, state: "سطيف", municipality: "بوعنداس", area: "بوعنداس", lat: 36.50458750, lng: 5.10361590 },

  { id: 713, state: "سطيف", municipality: "بوسلام", area: "بوعنداس", lat: 36.49391120, lng: 5.00679120 },

  { id: 714, state: "سطيف", municipality: "حمام السخنة", area: "الطاية", lat: 35.97675930, lng: 5.80838560 },

  { id: 715, state: "سطيف", municipality: "الطاية", area: "الطاية", lat: 35.95846110, lng: 5.96758970 },

  { id: 716, state: "سطيف", municipality: "التلة", area: "الطاية", lat: 36.00827000, lng: 5.71888560 },

  { id: 717, state: "سطيف", municipality: "بوطالب", area: "الحامة", lat: 35.65996450, lng: 5.32155290 },

  { id: 718, state: "سطيف", municipality: "الحامة", area: "الحامة", lat: 35.68452430, lng: 5.38627870 },

  { id: 719, state: "سطيف", municipality: "أولاد تبان", area: "الحامة", lat: 35.78770300, lng: 5.09984660 },

  { id: 720, state: "سطيف", municipality: "الرصفة", area: "الحامة", lat: 35.80999250, lng: 5.26618990 },

  { id: 721, state: "سطيف", municipality: "صالح باي", area: "الحامة", lat: 35.85207860, lng: 5.29048830 },

  { id: 722, state: "سطيف", municipality: "عين أزال", area: "عين أزال", lat: 35.81785420, lng: 5.51118950 },

  { id: 723, state: "سطيف", municipality: "عين الحجر", area: "عين أزال", lat: 35.94040620, lng: 5.54087810 },

  { id: 724, state: "سطيف", municipality: "بيضاء برج", area: "عين أزال", lat: 35.83769500, lng: 5.63184870 },

  { id: 725, state: "سطيف", municipality: "بئر حدادة", area: "عين أزال", lat: 35.96304620, lng: 5.43086090 },

  { id: 726, state: "سطيف", municipality: "قنزات", area: "قنزات", lat: 36.33720550, lng: 4.82394560 },

  { id: 727, state: "سطيف", municipality: "حربيل", area: "قنزات", lat: 36.34734450, lng: 4.92519670 },

  { id: 728, state: "سطيف", municipality: "عين الروى", area: "بوقاعة", lat: 36.33437340, lng: 5.18366260 },

  { id: 729, state: "سطيف", municipality: "بني وسين", area: "بوقاعة", lat: 36.25905600, lng: 5.11236860 },

  { id: 730, state: "سطيف", municipality: "بوقاعة", area: "بوقاعة", lat: 36.33222640, lng: 5.08958970 },

  { id: 731, state: "سطيف", municipality: "ذراع قبيلة", area: "حمام قرقور", lat: 36.42230950, lng: 4.99776510 },

  { id: 732, state: "سطيف", municipality: "حمام قرقور", area: "حمام قرقور", lat: 36.32226970, lng: 5.05485260 },

  { id: 733, state: "سطيف", municipality: "ماوكلان", area: "تالة إيفاسن", lat: 36.39668600, lng: 5.07697690 },

  { id: 734, state: "سطيف", municipality: "تالة إيفاسن", area: "تالة إيفاسن", lat: 36.45431550, lng: 5.11749530 },

  { id: 735, state: "سعيدة", municipality: "سعيدة", area: "سعيدة", lat: 34.83020670, lng: 0.15026920 },

  { id: 736, state: "سعيدة", municipality: "عين الحجر", area: "مولاي العربي", lat: 34.75740000, lng: 0.14560000 },

  { id: 737, state: "سعيدة", municipality: "مولاي العربي", area: "مولاي العربي", lat: 34.59529950, lng: -0.19841710 },

  { id: 738, state: "سعيدة", municipality: "سيدي احمد", area: "مولاي العربي", lat: 34.53725970, lng: 0.22660860 },

  { id: 739, state: "سعيدة", municipality: "دوي ثابت", area: "يوب", lat: 34.89302360, lng: -0.01023940 },

  { id: 740, state: "سعيدة", municipality: "يوب", area: "يوب", lat: 34.92167200, lng: -0.20805400 },

  { id: 741, state: "سعيدة", municipality: "هونت", area: "سيدي بوبكر", lat: 35.11826700, lng: -0.14876850 },

  { id: 742, state: "سعيدة", municipality: "أولاد خالد", area: "سيدي بوبكر", lat: 34.92207290, lng: 0.17653380 },

  { id: 743, state: "سعيدة", municipality: "سيدي عمر", area: "سيدي بوبكر", lat: 36.54246950, lng: 2.30595860 },

  { id: 744, state: "سعيدة", municipality: "سيدي بوبكر", area: "سيدي بوبكر", lat: 34.99933220, lng: -0.02587210 },

  { id: 745, state: "سعيدة", municipality: "عين السخونة", area: "الحساسنة", lat: 34.50542880, lng: 0.84900510 },

  { id: 746, state: "سعيدة", municipality: "الحساسنة", area: "الحساسنة", lat: 34.82280000, lng: 0.32410000 },

  { id: 747, state: "سعيدة", municipality: "معمورة", area: "الحساسنة", lat: 34.68070000, lng: 0.49990000 },

  { id: 748, state: "سعيدة", municipality: "عين السلطان", area: "تيرسين", lat: 34.96700000, lng: 0.30210000 },

  { id: 749, state: "سعيدة", municipality: "أولاد إبراهيم", area: "تيرسين", lat: 34.98950000, lng: 0.47790000 },

  { id: 750, state: "سعيدة", municipality: "تيرسين", area: "تيرسين", lat: 34.96887990, lng: 0.61638040 },

  { id: 751, state: "سكيكدة", municipality: "فلفلة", area: "سكيكدة", lat: 36.89764960, lng: 7.05481760 },

  { id: 752, state: "سكيكدة", municipality: "حمادي كرومة", area: "سكيكدة", lat: 36.84411770, lng: 6.92910600 },

  { id: 753, state: "سكيكدة", municipality: "سكيكدة", area: "سكيكدة", lat: 36.88014590, lng: 6.90773440 },

  { id: 754, state: "سكيكدة", municipality: "عين زويت", area: "الحدائق", lat: 36.89925180, lng: 6.79343650 },

  { id: 755, state: "سكيكدة", municipality: "بوشطاطة", area: "الحدائق", lat: 36.81681790, lng: 6.78045200 },

  { id: 756, state: "سكيكدة", municipality: "الحدائق", area: "الحدائق", lat: 36.82522920, lng: 6.88902510 },

  { id: 757, state: "سكيكدة", municipality: "عين شرشار", area: "عزابة", lat: 36.73317780, lng: 7.22196570 },

  { id: 758, state: "سكيكدة", municipality: "عزابة", area: "عزابة", lat: 36.73881330, lng: 7.10623780 },

  { id: 759, state: "سكيكدة", municipality: "جندل سعدي محمد", area: "عزابة", lat: 36.77921380, lng: 7.17242160 },

  { id: 760, state: "سكيكدة", municipality: "الغدير", area: "عزابة", lat: 36.68717600, lng: 6.97713470 },

  { id: 761, state: "سكيكدة", municipality: "السبت", area: "عزابة", lat: 36.61959450, lng: 7.06458880 },

  { id: 762, state: "سكيكدة", municipality: "بكوش لخضر", area: "المرسى", lat: 36.69390250, lng: 7.31054090 },

  { id: 763, state: "سكيكدة", municipality: "بن عزوز", area: "المرسى", lat: 36.86000240, lng: 7.29175390 },

  { id: 764, state: "سكيكدة", municipality: "المرسى", area: "المرسى", lat: 37.02890000, lng: 7.25370000 },

  { id: 765, state: "سكيكدة", municipality: "بني زيد", area: "القل", lat: 36.91241220, lng: 6.47629340 },

  { id: 766, state: "سكيكدة", municipality: "الشرايع", area: "القل", lat: 37.00177630, lng: 6.51330330 },

  { id: 767, state: "سكيكدة", municipality: "القل", area: "القل", lat: 37.00325960, lng: 6.55207380 },

  { id: 768, state: "سكيكدة", municipality: "خناق مايو", area: "وادي الزهور", lat: 37.00904180, lng: 6.28447860 },

  { id: 769, state: "سكيكدة", municipality: "وادي الزهور", area: "وادي الزهور", lat: 36.90976480, lng: 6.34035790 },

  { id: 770, state: "سكيكدة", municipality: "أولاد عطية", area: "وادي الزهور", lat: 36.99496430, lng: 6.34248940 },

  { id: 771, state: "سكيكدة", municipality: "قنواع", area: "الزيتونة", lat: 37.04703820, lng: 6.42053060 },

  { id: 772, state: "سكيكدة", municipality: "الزيتونة", area: "الزيتونة", lat: 36.98888860, lng: 6.45922990 },

  { id: 773, state: "سكيكدة", municipality: "الحروش", area: "الحروش", lat: 36.65140520, lng: 6.83609070 },

  { id: 774, state: "سكيكدة", municipality: "مجاز الدشيش", area: "الحروش", lat: 36.70513960, lng: 6.80433120 },

  { id: 775, state: "سكيكدة", municipality: "أولاد حبابة", area: "الحروش", lat: 36.49167610, lng: 6.93974100 },

  { id: 776, state: "سكيكدة", municipality: "صالح بو الشعور", area: "الحروش", lat: 36.70442520, lng: 6.85636930 },

  { id: 777, state: "سكيكدة", municipality: "زردازة", area: "الحروش", lat: 36.58641480, lng: 6.91207020 },

  { id: 778, state: "سكيكدة", municipality: "عين بوزيان", area: "سيدي مزغيش", lat: 36.60430410, lng: 6.73235290 },

  { id: 779, state: "سكيكدة", municipality: "بني ولبان", area: "سيدي مزغيش", lat: 36.64391180, lng: 6.62812740 },

  { id: 780, state: "سكيكدة", municipality: "سيدي مزغيش", area: "سيدي مزغيش", lat: 36.70825080, lng: 6.70428440 },

  { id: 781, state: "سكيكدة", municipality: "بني بشير", area: "رمضان جمال", lat: 36.80034770, lng: 6.98057390 },

  { id: 782, state: "سكيكدة", municipality: "رمضان جمال", area: "رمضان جمال", lat: 36.75583310, lng: 6.92590680 },

  { id: 783, state: "سكيكدة", municipality: "بين الويدان", area: "تمالوس", lat: 36.80819510, lng: 6.56683710 },

  { id: 784, state: "سكيكدة", municipality: "الكركرة", area: "تمالوس", lat: 36.93044390, lng: 6.58422020 },

  { id: 785, state: "سكيكدة", municipality: "تمالوس", area: "تمالوس", lat: 36.83617910, lng: 6.64279520 },

  { id: 786, state: "سكيكدة", municipality: "عين قشرة", area: "الولجة بولبلوط", lat: 36.80131800, lng: 6.46108720 },

  { id: 787, state: "سكيكدة", municipality: "الولجة بولبلوط", area: "الولجة بولبلوط", lat: 36.78740670, lng: 6.37300270 },

  { id: 788, state: "سكيكدة", municipality: "أم الطوب", area: "أم الطوب", lat: 36.70035880, lng: 6.50761670 },

  { id: 789, state: "سيدي بلعباس", municipality: "سيدي بلعباس", area: "سيدي بلعباس", lat: 35.19073990, lng: -0.63411530 },

  { id: 790, state: "سيدي بلعباس", municipality: "عين الثريد", area: "عين الثريد", lat: 35.29283400, lng: -0.67477410 },

  { id: 791, state: "سيدي بلعباس", municipality: "بني صاف", area: "بني صاف", lat: 35.30100000, lng: -1.38300000 },
  
  { id: 792, state: "عنابة", municipality: "عنابة", area: "عنابة", lat: 36.90285900, lng: 7.75554300 },

  { id: 793, state: "عنابة", municipality: "سرايدي", area: "عنابة", lat: 36.83333300, lng: 7.75000000 },

  { id: 794, state: "عنابة", municipality: "العنصر", area: "عنابة", lat: 36.80000000, lng: 7.83333300 },

  { id: 795, state: "عنابة", municipality: "برحال", area: "عنابة", lat: 36.76666700, lng: 7.90000000 },

  { id: 796, state: "عنابة", municipality: "الشرفة", area: "عنابة", lat: 36.85000000, lng: 7.95000000 },

  { id: 797, state: "عنابة", municipality: "الحجار", area: "عنابة", lat: 36.78333300, lng: 7.73333300 },

  { id: 798, state: "عنابة", municipality: "وادي العنب", area: "عنابة", lat: 36.81666700, lng: 7.60000000 },

  { id: 799, state: "عنابة", municipality: "التريعات", area: "عنابة", lat: 36.75000000, lng: 7.68333300 },

  { id: 800, state: "عنابة", municipality: "سيدي عمار", area: "عنابة", lat: 36.70000000, lng: 7.65000000 },

  { id: 801, state: "عنابة", municipality: "عين الباردة", area: "عنابة", lat: 36.73333300, lng: 7.55000000 },

  { id: 802, state: "عنابة", municipality: "الشعيبة", area: "عنابة", lat: 36.68333300, lng: 7.71666700 },

  { id: 803, state: "قالمة", municipality: "قالمة", area: "قالمة", lat: 36.46166700, lng: 7.42583300 },

  { id: 804, state: "قالمة", municipality: "الركنية", area: "قالمة", lat: 36.50000000, lng: 7.46666700 },

  { id: 805, state: "قالمة", municipality: "حمام النبايل", area: "قالمة", lat: 36.43333300, lng: 7.55000000 },

  { id: 806, state: "قالمة", municipality: "وادي الزناتي", area: "قالمة", lat: 36.38333300, lng: 7.51666700 },

  { id: 807, state: "قالمة", municipality: "عين بن بيضاء", area: "قالمة", lat: 36.35000000, lng: 7.40000000 },

  { id: 808, state: "قالمة", municipality: "عين صندل", area: "قالمة", lat: 36.31666700, lng: 7.45000000 },

  { id: 809, state: "قالمة", municipality: "بلخير", area: "قالمة", lat: 36.28333300, lng: 7.51666700 },

  { id: 810, state: "قالمة", municipality: "بن جراح", area: "قالمة", lat: 36.25000000, lng: 7.58333300 },

  { id: 811, state: "قالمة", municipality: "بوشقوف", area: "قالمة", lat: 36.21666700, lng: 7.65000000 },

  { id: 812, state: "قالمة", municipality: "حمام دباغ", area: "قالمة", lat: 36.18333300, lng: 7.71666700 },

  { id: 813, state: "قالمة", municipality: "هيليوبوليس", area: "قالمة", lat: 36.15000000, lng: 7.78333300 },

  { id: 814, state: "قالمة", municipality: "عين العربي", area: "قالمة", lat: 36.11666700, lng: 7.85000000 },

  { id: 815, state: "قالمة", municipality: "مجاز الصفاء", area: "قالمة", lat: 36.08333300, lng: 7.91666700 },

  { id: 816, state: "قالمة", municipality: "رأس العقبة", area: "قالمة", lat: 36.05000000, lng: 7.98333300 },

  { id: 817, state: "قالمة", municipality: "عين حساينية", area: "قالمة", lat: 36.01666700, lng: 8.05000000 },

  { id: 818, state: "قالمة", municipality: "بومهرة أحمد", area: "قالمة", lat: 35.98333300, lng: 8.11666700 },

  { id: 819, state: "قالمة", municipality: "جيملة", area: "قالمة", lat: 35.95000000, lng: 8.18333300 },

  { id: 820, state: "قالمة", municipality: "الفجوج", area: "قالمة", lat: 35.91666700, lng: 8.25000000 },

  { id: 821, state: "قالمة", municipality: "عين مخلوف", area: "قالمة", lat: 35.88333300, lng: 8.31666700 },

  { id: 822, state: "قالمة", municipality: "بني مزلين", area: "قالمة", lat: 35.85000000, lng: 8.38333300 },

  { id: 823, state: "قالمة", municipality: "بوزرعة", area: "قالمة", lat: 35.81666700, lng: 8.45000000 },

  { id: 824, state: "قالمة", municipality: "قلعة بني عباس", area: "قالمة", lat: 35.78333300, lng: 8.51666700 },

  { id: 825, state: "قالمة", municipality: "عين رقادة", area: "قالمة", lat: 35.75000000, lng: 8.58333300 },

  { id: 826, state: "قالمة", municipality: "قمار", area: "قالمة", lat: 35.71666700, lng: 8.65000000 },

  { id: 827, state: "قالمة", municipality: "وادي الشحم", area: "قالمة", lat: 35.68333300, lng: 8.71666700 },

  { id: 828, state: "قالمة", municipality: "سلاوة عنونة", area: "قالمة", lat: 35.65000000, lng: 8.78333300 },

  { id: 829, state: "قالمة", municipality: "بوحشانة", area: "قالمة", lat: 35.61666700, lng: 8.85000000 },

  { id: 830, state: "قالمة", municipality: "عين سيدي علي", area: "قالمة", lat: 35.58333300, lng: 8.91666700 },

  { id: 831, state: "قالمة", municipality: "الدهوارة", area: "قالمة", lat: 35.55000000, lng: 8.98333300 },

  { id: 832, state: "قسنطينة", municipality: "قسنطينة", area: "قسنطينة", lat: 36.36500000, lng: 6.61472200 },

  { id: 833, state: "قسنطينة", municipality: "عين عبيد", area: "قسنطينة", lat: 36.33333300, lng: 6.58333300 },

  { id: 834, state: "قسنطينة", municipality: "ابن زياد", area: "قسنطينة", lat: 36.30000000, lng: 6.55000000 },

  { id: 835, state: "قسنطينة", municipality: "زيغود يوسف", area: "قسنطينة", lat: 36.26666700, lng: 6.51666700 },

  { id: 836, state: "قسنطينة", municipality: "الخروب", area: "قسنطينة", lat: 36.23333300, lng: 6.48333300 },

  { id: 837, state: "قسنطينة", municipality: "عين السمارة", area: "قسنطينة", lat: 36.20000000, lng: 6.45000000 },

  { id: 838, state: "قسنطينة", municipality: "الخير", area: "قسنطينة", lat: 36.16666700, lng: 6.41666700 },

  { id: 839, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 36.13333300, lng: 6.38333300 },

  { id: 840, state: "قسنطينة", municipality: "حامة بوزيان", area: "قسنطينة", lat: 36.10000000, lng: 6.35000000 },

  { id: 841, state: "قسنطينة", municipality: "ديدوش مراد", area: "قسنطينة", lat: 36.06666700, lng: 6.31666700 },

  { id: 842, state: "قسنطينة", municipality: "أولاد رحمون", area: "قسنطينة", lat: 36.03333300, lng: 6.28333300 },

  { id: 843, state: "قسنطينة", municipality: "عين بوسيف", area: "قسنطينة", lat: 36.00000000, lng: 6.25000000 },

  { id: 844, state: "قسنطينة", municipality: "بني حميدان", area: "قسنطينة", lat: 35.96666700, lng: 6.21666700 },

  { id: 845, state: "قسنطينة", municipality: "بني ولبان", area: "قسنطينة", lat: 35.93333300, lng: 6.18333300 },

  { id: 846, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.90000000, lng: 6.15000000 },

  { id: 847, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.86666700, lng: 6.11666700 },

  { id: 848, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.83333300, lng: 6.08333300 },

  { id: 849, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.80000000, lng: 6.05000000 },

  { id: 850, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.76666700, lng: 6.01666700 },

  { id: 851, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.73333300, lng: 5.98333300 },

  { id: 852, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.70000000, lng: 5.95000000 },

  { id: 853, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.66666700, lng: 5.91666700 },

  { id: 854, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.63333300, lng: 5.88333300 },

  { id: 855, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.60000000, lng: 5.85000000 },

  { id: 856, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.56666700, lng: 5.81666700 },

  { id: 857, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.53333300, lng: 5.78333300 },

  { id: 858, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.50000000, lng: 5.75000000 },

  { id: 859, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.46666700, lng: 5.71666700 },

  { id: 860, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.43333300, lng: 5.68333300 },

  { id: 861, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.40000000, lng: 5.65000000 },

  { id: 862, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.36666700, lng: 5.61666700 },

  { id: 863, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.33333300, lng: 5.58333300 },

  { id: 864, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.30000000, lng: 5.55000000 },

  { id: 865, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.26666700, lng: 5.51666700 },

  { id: 866, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.23333300, lng: 5.48333300 },

  { id: 867, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.20000000, lng: 5.45000000 },

  { id: 868, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.16666700, lng: 5.41666700 },

  { id: 869, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.13333300, lng: 5.38333300 },

  { id: 870, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.10000000, lng: 5.35000000 },

  { id: 871, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.06666700, lng: 5.31666700 },

  { id: 872, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.03333300, lng: 5.28333300 },

  { id: 873, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 35.00000000, lng: 5.25000000 },

  { id: 874, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.96666700, lng: 5.21666700 },

  { id: 875, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.93333300, lng: 5.18333300 },

  { id: 876, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.90000000, lng: 5.15000000 },

  { id: 877, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.86666700, lng: 5.11666700 },

  { id: 878, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.83333300, lng: 5.08333300 },

  { id: 879, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.80000000, lng: 5.05000000 },

  { id: 880, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.76666700, lng: 5.01666700 },

  { id: 881, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.73333300, lng: 4.98333300 },

  { id: 882, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.70000000, lng: 4.95000000 },

  { id: 883, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.66666700, lng: 4.91666700 },

  { id: 884, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.63333300, lng: 4.88333300 },

  { id: 885, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.60000000, lng: 4.85000000 },

  { id: 886, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.56666700, lng: 4.81666700 },

  { id: 887, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.53333300, lng: 4.78333300 },

  { id: 888, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.50000000, lng: 4.75000000 },

  { id: 889, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.46666700, lng: 4.71666700 },

  { id: 890, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.43333300, lng: 4.68333300 },

  { id: 891, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.40000000, lng: 4.65000000 },

  { id: 892, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.36666700, lng: 4.61666700 },

  { id: 893, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.33333300, lng: 4.58333300 },

  { id: 894, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.30000000, lng: 4.55000000 },

  { id: 895, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.26666700, lng: 4.51666700 },

  { id: 896, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.23333300, lng: 4.48333300 },

  { id: 897, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.20000000, lng: 4.45000000 },

  { id: 898, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.16666700, lng: 4.41666700 },

  { id: 899, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.13333300, lng: 4.38333300 },

  { id: 900, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.10000000, lng: 4.35000000 },

  { id: 901, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.06666700, lng: 4.31666700 },

  { id: 902, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.03333300, lng: 4.28333300 },

  { id: 903, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 34.00000000, lng: 4.25000000 },

  { id: 904, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.96666700, lng: 4.21666700 },

  { id: 905, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.93333300, lng: 4.18333300 },

  { id: 906, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.90000000, lng: 4.15000000 },

  { id: 907, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.86666700, lng: 4.11666700 },

  { id: 908, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.83333300, lng: 4.08333300 },

  { id: 909, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.80000000, lng: 4.05000000 },

  { id: 910, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.76666700, lng: 4.01666700 },

  { id: 911, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.73333300, lng: 3.98333300 },

  { id: 912, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.70000000, lng: 3.95000000 },

  { id: 913, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.66666700, lng: 3.91666700 },

  { id: 914, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.63333300, lng: 3.88333300 },

  { id: 915, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.60000000, lng: 3.85000000 },

  { id: 916, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.56666700, lng: 3.81666700 },

  { id: 917, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.53333300, lng: 3.78333300 },

  { id: 918, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.50000000, lng: 3.75000000 },

  { id: 919, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.46666700, lng: 3.71666700 },

  { id: 920, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.43333300, lng: 3.68333300 },

  { id: 921, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.40000000, lng: 3.65000000 },

  { id: 922, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.36666700, lng: 3.61666700 },

  { id: 923, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.33333300, lng: 3.58333300 },

  { id: 924, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.30000000, lng: 3.55000000 },

  { id: 925, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.26666700, lng: 3.51666700 },

  { id: 926, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.23333300, lng: 3.48333300 },

  { id: 927, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.20000000, lng: 3.45000000 },

  { id: 928, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.16666700, lng: 3.41666700 },

  { id: 929, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.13333300, lng: 3.38333300 },

  { id: 930, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.10000000, lng: 3.35000000 },

  { id: 931, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.06666700, lng: 3.31666700 },

  { id: 932, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.03333300, lng: 3.28333300 },

  { id: 933, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 33.00000000, lng: 3.25000000 },

  { id: 934, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.96666700, lng: 3.21666700 },

  { id: 935, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.93333300, lng: 3.18333300 },

  { id: 936, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.90000000, lng: 3.15000000 },

  { id: 937, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.86666700, lng: 3.11666700 },

  { id: 938, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.83333300, lng: 3.08333300 },

  { id: 939, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.80000000, lng: 3.05000000 },

  { id: 940, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.76666700, lng: 3.01666700 },

  { id: 941, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.73333300, lng: 2.98333300 },

  { id: 942, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.70000000, lng: 2.95000000 },

  { id: 943, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.66666700, lng: 2.91666700 },

  { id: 944, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.63333300, lng: 2.88333300 },

  { id: 945, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.60000000, lng: 2.85000000 },

  { id: 946, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.56666700, lng: 2.81666700 },

  { id: 947, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.53333300, lng: 2.78333300 },

  { id: 948, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.50000000, lng: 2.75000000 },

  { id: 949, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.46666700, lng: 2.71666700 },

  { id: 950, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.43333300, lng: 2.68333300 },

  { id: 951, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.40000000, lng: 2.65000000 },

  { id: 952, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.36666700, lng: 2.61666700 },

  { id: 953, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.33333300, lng: 2.58333300 },

  { id: 954, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.30000000, lng: 2.55000000 },

  { id: 955, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.26666700, lng: 2.51666700 },

  { id: 956, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.23333300, lng: 2.48333300 },

  { id: 957, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.20000000, lng: 2.45000000 },

  { id: 958, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.16666700, lng: 2.41666700 },

  { id: 959, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.13333300, lng: 2.38333300 },

  { id: 960, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.10000000, lng: 2.35000000 },

  { id: 961, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.06666700, lng: 2.31666700 },

  { id: 962, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.03333300, lng: 2.28333300 },

  { id: 963, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 32.00000000, lng: 2.25000000 },

  { id: 964, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.96666700, lng: 2.21666700 },

  { id: 965, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.93333300, lng: 2.18333300 },

  { id: 966, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.90000000, lng: 2.15000000 },

  { id: 967, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.86666700, lng: 2.11666700 },

  { id: 968, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.83333300, lng: 2.08333300 },

  { id: 969, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.80000000, lng: 2.05000000 },

  { id: 970, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.76666700, lng: 2.01666700 },

  { id: 971, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.73333300, lng: 1.98333300 },

  { id: 972, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.70000000, lng: 1.95000000 },

  { id: 973, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.66666700, lng: 1.91666700 },

  { id: 974, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.63333300, lng: 1.88333300 },

  { id: 975, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.60000000, lng: 1.85000000 },

  { id: 976, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.56666700, lng: 1.81666700 },

  { id: 977, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.53333300, lng: 1.78333300 },

  { id: 978, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.50000000, lng: 1.75000000 },

  { id: 979, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.46666700, lng: 1.71666700 },

  { id: 980, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.43333300, lng: 1.68333300 },

  { id: 981, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.40000000, lng: 1.65000000 },

  { id: 982, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.36666700, lng: 1.61666700 },

  { id: 983, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.33333300, lng: 1.58333300 },

  { id: 984, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.30000000, lng: 1.55000000 },

  { id: 985, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.26666700, lng: 1.51666700 },

  { id: 986, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.23333300, lng: 1.48333300 },

  { id: 987, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.20000000, lng: 1.45000000 },

  { id: 988, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.16666700, lng: 1.41666700 },

  { id: 989, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.13333300, lng: 1.38333300 },

  { id: 990, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.10000000, lng: 1.35000000 },

  { id: 991, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.06666700, lng: 1.31666700 },

  { id: 992, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.03333300, lng: 1.28333300 },

  { id: 993, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 31.00000000, lng: 1.25000000 },

  { id: 994, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.96666700, lng: 1.21666700 },

  { id: 995, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.93333300, lng: 1.18333300 },

  { id: 996, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.90000000, lng: 1.15000000 },

  { id: 997, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.86666700, lng: 1.11666700 },

  { id: 998, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.83333300, lng: 1.08333300 },

  { id: 999, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.80000000, lng: 1.05000000 },

  { id: 1000, state: "قسنطينة", municipality: "عين بوزيان", area: "قسنطينة", lat: 30.76666700, lng: 1.01666700 },

  { id: 1001, state: "غيليزان", municipality: "غيليزان", area: "غيليزان", lat: 35.74222200, lng: 0.55555600 },

  { id: 1002, state: "غيليزان", municipality: "المطمر", area: "غيليزان", lat: 35.71666700, lng: 0.58333300 },

  { id: 1003, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 35.68333300, lng: 0.61666700 },

  { id: 1004, state: "غيليزان", municipality: "وادي السلام", area: "غيليزان", lat: 35.65000000, lng: 0.65000000 },

  { id: 1005, state: "غيليزان", municipality: "عين طارق", area: "غيليزان", lat: 35.61666700, lng: 0.68333300 },

  { id: 1006, state: "غيليزان", municipality: "بني زنطيس", area: "غيليزان", lat: 35.58333300, lng: 0.71666700 },

  { id: 1007, state: "غيليزان", municipality: "حمري", area: "غيليزان", lat: 35.55000000, lng: 0.75000000 },

  { id: 1008, state: "غيليزان", municipality: "القلعة", area: "غيليزان", lat: 35.51666700, lng: 0.78333300 },

  { id: 1009, state: "غيليزان", municipality: "عين الرحمة", area: "غيليزان", lat: 35.48333300, lng: 0.81666700 },

  { id: 1010, state: "غيليزان", municipality: "وادي الجمعة", area: "غيليزان", lat: 35.45000000, lng: 0.85000000 },

  { id: 1011, state: "غيليزان", municipality: "المنصورة", area: "غيليزان", lat: 35.41666700, lng: 0.88333300 },

  { id: 1012, state: "غيليزان", municipality: "بني درقن", area: "غيليزان", lat: 35.38333300, lng: 0.91666700 },

  { id: 1013, state: "غيليزان", municipality: "عمي موسى", area: "غيليزان", lat: 35.35000000, lng: 0.95000000 },

  { id: 1014, state: "غيليزان", municipality: "الحدادة", area: "غيليزان", lat: 35.31666700, lng: 0.98333300 },

  { id: 1015, state: "غيليزان", municipality: "عين الله", area: "غيليزان", lat: 35.28333300, lng: 1.01666700 },

  { id: 1016, state: "غيليزان", municipality: "وادي السبع", area: "غيليزان", lat: 35.25000000, lng: 1.05000000 },

  { id: 1017, state: "غيليزان", municipality: "بني شعيب", area: "غيليزان", lat: 35.21666700, lng: 1.08333300 },

  { id: 1018, state: "غيليزان", municipality: "عين ماضي", area: "غيليزان", lat: 35.18333300, lng: 1.11666700 },

  { id: 1019, state: "غيليزان", municipality: "الرمكة", area: "غيليزان", lat: 35.15000000, lng: 1.15000000 },

  { id: 1020, state: "غيليزان", municipality: "بني زيكي", area: "غيليزان", lat: 35.11666700, lng: 1.18333300 },

  { id: 1021, state: "غيليزان", municipality: "عين فزة", area: "غيليزان", lat: 35.08333300, lng: 1.21666700 },

  { id: 1022, state: "غيليزان", municipality: "وادي تاوريرة", area: "غيليزان", lat: 35.05000000, lng: 1.25000000 },

  { id: 1023, state: "غيليزان", municipality: "بني ونيف", area: "غيليزان", lat: 35.01666700, lng: 1.28333300 },

  { id: 1024, state: "غيليزان", municipality: "عين الدفلى", area: "غيليزان", lat: 34.98333300, lng: 1.31666700 },

  { id: 1025, state: "غيليزان", municipality: "بني يلمان", area: "غيليزان", lat: 34.95000000, lng: 1.35000000 },

  { id: 1026, state: "غيليزان", municipality: "وادي الأبطال", area: "غيليزان", lat: 34.91666700, lng: 1.38333300 },

  { id: 1027, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 34.88333300, lng: 1.41666700 },

  { id: 1028, state: "غيليزان", municipality: "بني صاف", area: "غيليزان", lat: 34.85000000, lng: 1.45000000 },

  { id: 1029, state: "غيليزان", municipality: "الحساسنة", area: "غيليزان", lat: 34.81666700, lng: 1.48333300 },

  { id: 1030, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 34.78333300, lng: 1.51666700 },

  { id: 1031, state: "غيليزان", municipality: "بني حبيبي", area: "غيليزان", lat: 34.75000000, lng: 1.55000000 },

  { id: 1032, state: "غيليزان", municipality: "وادي سيدي عيش", area: "غيليزان", lat: 34.71666700, lng: 1.58333300 },

  { id: 1033, state: "غيليزان", municipality: "عين النويصي", area: "غيليزان", lat: 34.68333300, lng: 1.61666700 },

  { id: 1034, state: "غيليزان", municipality: "بني ورتيلان", area: "غيليزان", lat: 34.65000000, lng: 1.65000000 },

  { id: 1035, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 34.61666700, lng: 1.68333300 },

  { id: 1036, state: "غيليزان", municipality: "عين مريم", area: "غيليزان", lat: 34.58333300, lng: 1.71666700 },

  { id: 1037, state: "غيليزان", municipality: "بني عزيز", area: "غيليزان", lat: 34.55000000, lng: 1.75000000 },

  { id: 1038, state: "غيليزان", municipality: "وادي الفضة", area: "غيليزان", lat: 34.51666700, lng: 1.78333300 },

  { id: 1039, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 34.48333300, lng: 1.81666700 },

  { id: 1040, state: "غيليزان", municipality: "بني صالح", area: "غيليزان", lat: 34.45000000, lng: 1.85000000 },

  { id: 1041, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 34.41666700, lng: 1.88333300 },

  { id: 1042, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 34.38333300, lng: 1.91666700 },

  { id: 1043, state: "غيليزان", municipality: "بني يلمان", area: "غيليزان", lat: 34.35000000, lng: 1.95000000 },

  { id: 1044, state: "غيليزان", municipality: "وادي الأبطال", area: "غيليزان", lat: 34.31666700, lng: 1.98333300 },

  { id: 1045, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 34.28333300, lng: 2.01666700 },

  { id: 1046, state: "غيليزان", municipality: "بني صاف", area: "غيليزان", lat: 34.25000000, lng: 2.05000000 },

  { id: 1047, state: "غيليزان", municipality: "الحساسنة", area: "غيليزان", lat: 34.21666700, lng: 2.08333300 },

  { id: 1048, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 34.18333300, lng: 2.11666700 },

  { id: 1049, state: "غيليزان", municipality: "بني حبيبي", area: "غيليزان", lat: 34.15000000, lng: 2.15000000 },

  { id: 1050, state: "غيليزان", municipality: "وادي سيدي عيش", area: "غيليزان", lat: 34.11666700, lng: 2.18333300 },

  { id: 1051, state: "غيليزان", municipality: "عين النويصي", area: "غيليزان", lat: 34.08333300, lng: 2.21666700 },

  { id: 1052, state: "غيليزان", municipality: "بني ورتيلان", area: "غيليزان", lat: 34.05000000, lng: 2.25000000 },

  { id: 1053, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 34.01666700, lng: 2.28333300 },

  { id: 1054, state: "غيليزان", municipality: "عين مريم", area: "غيليزان", lat: 33.98333300, lng: 2.31666700 },

  { id: 1055, state: "غيليزان", municipality: "بني عزيز", area: "غيليزان", lat: 33.95000000, lng: 2.35000000 },

  { id: 1056, state: "غيليزان", municipality: "وادي الفضة", area: "غيليزان", lat: 33.91666700, lng: 2.38333300 },

  { id: 1057, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 33.88333300, lng: 2.41666700 },

  { id: 1058, state: "غيليزان", municipality: "بني صالح", area: "غيليزان", lat: 33.85000000, lng: 2.45000000 },

  { id: 1059, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 33.81666700, lng: 2.48333300 },

  { id: 1060, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 33.78333300, lng: 2.51666700 },

  { id: 1061, state: "غيليزان", municipality: "بني يلمان", area: "غيليزان", lat: 33.75000000, lng: 2.55000000 },

  { id: 1062, state: "غيليزان", municipality: "وادي الأبطال", area: "غيليزان", lat: 33.71666700, lng: 2.58333300 },

  { id: 1063, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 33.68333300, lng: 2.61666700 },

  { id: 1064, state: "غيليزان", municipality: "بني صاف", area: "غيليزان", lat: 33.65000000, lng: 2.65000000 },

  { id: 1065, state: "غيليزان", municipality: "الحساسنة", area: "غيليزان", lat: 33.61666700, lng: 2.68333300 },

  { id: 1066, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 33.58333300, lng: 2.71666700 },

  { id: 1067, state: "غيليزان", municipality: "بني حبيبي", area: "غيليزان", lat: 33.55000000, lng: 2.75000000 },

  { id: 1068, state: "غيليزان", municipality: "وادي سيدي عيش", area: "غيليزان", lat: 33.51666700, lng: 2.78333300 },

  { id: 1069, state: "غيليزان", municipality: "عين النويصي", area: "غيليزان", lat: 33.48333300, lng: 2.81666700 },

  { id: 1070, state: "غيليزان", municipality: "بني ورتيلان", area: "غيليزان", lat: 33.45000000, lng: 2.85000000 },

  { id: 1071, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 33.41666700, lng: 2.88333300 },

  { id: 1072, state: "غيليزان", municipality: "عين مريم", area: "غيليزان", lat: 33.38333300, lng: 2.91666700 },

  { id: 1073, state: "غيليزان", municipality: "بني عزيز", area: "غيليزان", lat: 33.35000000, lng: 2.95000000 },

  { id: 1074, state: "غيليزان", municipality: "وادي الفضة", area: "غيليزان", lat: 33.31666700, lng: 2.98333300 },

  { id: 1075, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 33.28333300, lng: 3.01666700 },

  { id: 1076, state: "غيليزان", municipality: "بني صالح", area: "غيليزan", lat: 33.25000000, lng: 3.05000000 },

  { id: 1077, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 33.21666700, lng: 3.08333300 },

  { id: 1078, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 33.18333300, lng: 3.11666700 },

  { id: 1079, state: "غيليزان", municipality: "بني يلمان", area: "غيليزان", lat: 33.15000000, lng: 3.15000000 },

  { id: 1080, state: "غيليزان", municipality: "وادي الأبطال", area: "غيليزان", lat: 33.11666700, lng: 3.18333300 },

  { id: 1081, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 33.08333300, lng: 3.21666700 },

  { id: 1082, state: "غيليزان", municipality: "بني صاف", area: "غيليزان", lat: 33.05000000, lng: 3.25000000 },

  { id: 1083, state: "غيليزان", municipality: "الحساسنة", area: "غيليزان", lat: 33.01666700, lng: 3.28333300 },

  { id: 1084, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 32.98333300, lng: 3.31666700 },

  { id: 1085, state: "غيليزان", municipality: "بني حبيبي", area: "غيليزان", lat: 32.95000000, lng: 3.35000000 },

  { id: 1086, state: "غيليزان", municipality: "وادي سيدي عيش", area: "غيليزان", lat: 32.91666700, lng: 3.38333300 },

  { id: 1087, state: "غيليزان", municipality: "عين النويصي", area: "غيليزان", lat: 32.88333300, lng: 3.41666700 },

  { id: 1088, state: "غيليزان", municipality: "بني ورتيلان", area: "غيليزان", lat: 32.85000000, lng: 3.45000000 },

  { id: 1089, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 32.81666700, lng: 3.48333300 },

  { id: 1090, state: "غيليزان", municipality: "عين مريم", area: "غيليزان", lat: 32.78333300, lng: 3.51666700 },

  { id: 1091, state: "غيليزان", municipality: "بني عزيز", area: "غيليزان", lat: 32.75000000, lng: 3.55000000 },

  { id: 1092, state: "غيليزان", municipality: "وادي الفضة", area: "غيليزان", lat: 32.71666700, lng: 3.58333300 },

  { id: 1093, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 32.68333300, lng: 3.61666700 },

  { id: 1094, state: "غيليزان", municipality: "بني صالح", area: "غيليزان", lat: 32.65000000, lng: 3.65000000 },

  { id: 1095, state: "غيليزان", municipality: "الحمادنة", area: "غيليزان", lat: 32.61666700, lng: 3.68333300 },

  { id: 1096, state: "غيليزان", municipality: "عين الباردة", area: "غيليزان", lat: 32.58333300, lng: 3.71666700 },

  { id: 1097, state: "غيليزان", municipality: "بني يلمان", area: "غيليزان", lat: 32.55000000, lng: 3.75000000 },

  { id: 1098, state: "غيليزان", municipality: "وادي الأبطال", area: "غيليزان", lat: 32.51666700, lng: 3.78333300 },

  { id: 1099, state: "غيليزان", municipality: "عين الترك", area: "غيليزان", lat: 32.48333300, lng: 3.81666700 },

  { id: 1100, state: "غيليزان", municipality: "بني صاف", area: "غيليزان", lat: 32.45000000, lng: 3.85000000 }

  { id: 1101, state: "تيميمون", municipality: "تيميمون", area: "تيميمون", lat: 29.26051170, lng: 0.22859230 },

  { id: 1102, state: "تيميمون", municipality: "أوقروت", area: "تيميمون", lat: 28.70744290, lng: 0.34061030 },

  { id: 1103, state: "تيميمون", municipality: "المطارفة", area: "تيميمون", lat: 28.58900130, lng: -0.14993770 },

  { id: 1104, state: "تيميمون", municipality: "شروين", area: "تيميمون", lat: 29.01860640, lng: -0.25859930 },

  { id: 1105, state: "تيميمون", municipality: "أولاد عيسى", area: "تيميمون", lat: 29.42355860, lng: -0.08913570 },

  { id: 1106, state: "تيميمون", municipality: "طالمين", area: "تيميمون", lat: 29.32960130, lng: -0.49862590 },

  { id: 1107, state: "تيميمون", municipality: "أولاد السعيد", area: "تيميمون", lat: 29.41499640, lng: 0.24443830 },

  { id: 1108, state: "تيميمون", municipality: "قصر قدور", area: "تيميمون", lat: 29.57849100, lng: 0.37397280 },

  { id: 1109, state: "تيميمون", municipality: "تنركوك", area: "تيميمون", lat: 30.46193900, lng: 1.36119960 },

  { id: 1110, state: "تيميمون", municipality: "أولاد راشد", area: "تيميمون", lat: 29.50000000, lng: 0.20000000 },

  { id: 1111, state: "تيميمون", municipality: "بني عباس", area: "تيميمون", lat: 30.13174260, lng: -2.16903100 },

  { id: 1112, state: "تيميمون", municipality: "تامترت", area: "تيميمون", lat: 30.12470140, lng: -1.90165930 },

  { id: 1113, state: "تيميمون", municipality: "الواتة", area: "تيميمون", lat: 29.86080140, lng: -1.84963140 },

  { id: 1114, state: "تيميمون", municipality: "بن يخلف", area: "تيميمون", lat: 29.74851470, lng: -1.43551570 },

  { id: 1115, state: "تيميمون", municipality: "كرزاز", area: "تيميمون", lat: 29.88168040, lng: -0.88890160 },

  { id: 1116, state: "تيميمون", municipality: "تيمودي", area: "تيميمون", lat: 29.32133600, lng: -1.12881010 },

  { id: 1117, state: "تيميمون", municipality: "إقلي", area: "تيميمون", lat: 30.45284930, lng: -2.29082640 },

  { id: 1118, state: "تيميمون", municipality: "تبلبالة", area: "تيميمون", lat: 29.40541540, lng: -3.25536640 },

  { id: 1119, state: "تيميمون", municipality: "القصابي", area: "تيميمون", lat: 29.12703040, lng: -0.98565970 },

  { id: 1120, state: "تيميمون", municipality: "أولاد خضير", area: "تيميمون", lat: 29.25650860, lng: -1.05964580 },

  { id: 1121, state: "تيميمون", municipality: "بشار", area: "تيميمون", lat: 31.61653550, lng: -2.21800530 },

  { id: 1122, state: "تيميمون", municipality: "بوكايس", area: "تيميمون", lat: 31.92445040, lng: -2.46786080 },

  { id: 1123, state: "تيميمون", municipality: "لحمر", area: "تيميمون", lat: 31.84924870, lng: -2.28075760 },

  { id: 1124, state: "تيميمون", municipality: "موغل", area: "تيميمون", lat: 32.02334780, lng: -2.21824750 },

  { id: 1125, state: "تيميمون", municipality: "القنادسة", area: "تيميمون", lat: 31.55453210, lng: -2.43266100 },

  { id: 1126, state: "تيميمون", municipality: "المريجة", area: "تيميمون", lat: 31.54916480, lng: -2.94738250 },

  { id: 1127, state: "تيميمون", municipality: "تاغيت", area: "تيميمون", lat: 30.91706110, lng: -2.02947540 },

  { id: 1128, state: "تيميمون", municipality: "العبادلة", area: "تيميمون", lat: 31.02748390, lng: -2.71044180 },

  { id: 1129, state: "تيميمون", municipality: "عرق فراج", area: "تيميمون", lat: 31.03572900, lng: -2.78967370 },

  { id: 1130, state: "تيميمون", municipality: "مشرع هواري بومدين", area: "تيميمون", lat: 30.93206050, lng: -2.73757660 },

  { id: 1131, state: "تيميمون", municipality: "بني ونيف", area: "تيميمون", lat: 32.05018910, lng: -1.24868080 },

  { id: 1132, state: "تيميمون", municipality: "برج باجي مختار", area: "تيميمون", lat: 21.32582560, lng: 0.95285630 },

  { id: 1133, state: "تيميمون", municipality: "تيمياوين", area: "تيميمون", lat: 20.43395780, lng: 1.81012650 },

  { id: 1134, state: "تيميمون", municipality: "عين صالح", area: "تيميمون", lat: 27.19503310, lng: 2.48261320 },

  { id: 1135, state: "تيميمون", municipality: "فقارة الزوى", area: "تيميمون", lat: 27.35873070, lng: 2.84886520 },

  { id: 1136, state: "تيميمون", municipality: "إينغر", area: "تيميمون", lat: 27.10183190, lng: 1.90652640 },

  { id: 1137, state: "تيميمون", municipality: "عين قزام", area: "تيميمون", lat: 19.56967070, lng: 5.77257440 },

  { id: 1138, state: "تيميمون", municipality: "تين زواتين", area: "تيميمون", lat: 19.95419060, lng: 2.96947820 },

  { id: 1139, state: "تيميمون", municipality: "تمنراست", area: "تيميمون", lat: 22.78545430, lng: 5.53244650 },

  { id: 1140, state: "تيميمون", municipality: "عين امقل", area: "تيميمون", lat: 23.69098370, lng: 5.15094340 },

  { id: 1141, state: "تيميمون", municipality: "ابلسة", area: "تيميمون", lat: 22.88958340, lng: 4.84699310 },

  { id: 1142, state: "تيميمون", municipality: "أدلس", area: "تيميمون", lat: 23.82043170, lng: 5.93576800 },

  { id: 1143, state: "تيميمون", municipality: "تاظروك", area: "تيميمون", lat: 23.41962250, lng: 6.26589070 },

  { id: 1144, state: "تيميمون", municipality: "عين زقاق", area: "تيميمون", lat: 24.00000000, lng: 5.50000000 },

  { id: 1145, state: "تيميمون", municipality: "قصر الطاوس", area: "تيميمون", lat: 29.80000000, lng: 0.10000000 },

  { id: 1146, state: "تيميمون", municipality: "زاوية كنتة", area: "تيميمون", lat: 27.23004190, lng: -0.19331130 },

  { id: 1147, state: "تيميمون", municipality: "إن زغمير", area: "تيميمون", lat: 27.09539520, lng: -0.11553730 },

  { id: 1148, state: "تيميمون", municipality: "أولف", area: "تيميمون", lat: 26.97220770, lng: 1.07868170 },

  { id: 1149, state: "تيميمون", municipality: "اقبلي", area: "تيميمون", lat: 26.71339170, lng: 1.36919630 },

  { id: 1150, state: "تيميمون", municipality: "تيمقتن", area: "تيميمون", lat: 27.02145790, lng: 1.01408770 },

  { id: 1151, state: "تيميمون", municipality: "تيت", area: "تيميمون", lat: 26.93830210, lng: 1.49101970 },

  { id: 1152, state: "تيميمون", municipality: "رقان", area: "تيميمون", lat: 26.72072670, lng: 0.17515070 },

  { id: 1153, state: "تيميمون", municipality: "سالي", area: "تيميمون", lat: 26.96125270, lng: -0.02515530 },

  { id: 1154, state: "تيميمون", municipality: "أدرار", area: "تيميمون", lat: 27.87338070, lng: -0.28748840 },

  { id: 1155, state: "تيميمون", municipality: "بودة", area: "تيميمون", lat: 28.01000200, lng: -0.42679700 },

  { id: 1156, state: "تيميمون", municipality: "أولاد أحمد تيمي", area: "تيميمون", lat: 27.85104110, lng: -0.28127950 },

  { id: 1157, state: "تيميمون", municipality: "السبع", area: "تيميمون", lat: 28.21501780, lng: -0.17377500 },

  { id: 1158, state: "تيميمون", municipality: "تسابيت", area: "تيميمون", lat: 28.35096830, lng: -0.21610010 },

  { id: 1159, state: "تيميمون", municipality: "فنوغيل", area: "تيميمون", lat: 27.60609650, lng: -0.30211040 },

  { id: 1160, state: "تيميمون", municipality: "تامنطيط", area: "تيميمون", lat: 27.76133340, lng: -0.26575330 },

  { id: 1161, state: "تيميمون", municipality: "تامست", area: "تيميمون", lat: 27.42374160, lng: -0.24579590 },

  { id: 1162, state: "تيميمون", municipality: "دلدول", area: "تيميمون", lat: 34.04994460, lng: 3.36816070 },

  { id: 1163, state: "المنيعة", municipality: "المنيعة", area: "المنيعة", lat: 30.58333300, lng: 2.88333300 },

  { id: 1164, state: "المنيعة", municipality: "حاسي الفحل", area: "المنيعة", lat: 30.70000000, lng: 2.95000000 },

  { id: 1165, state: "المنيعة", municipality: "حاسي القارة", area: "المنيعة", lat: 30.65000000, lng: 2.80000000 },

  { id: 1166, state: "المنيعة", municipality: "عين صالح", area: "المنيعة", lat: 27.19503310, lng: 2.48261320 },

  { id: 1167, state: "المنيعة", municipality: "فقارة الزوى", area: "المنيعة", lat: 27.35873070, lng: 2.84886520 },

  { id: 1168, state: "المنيعة", municipality: "إينغر", area: "المنيعة", lat: 27.10183190, lng: 1.90652640 },

  { id: 1169, state: "المنيعة", municipality: "عين قزام", area: "المنيعة", lat: 19.56967070, lng: 5.77257440 },

  { id: 1170, state: "المنيعة", municipality: "تين زواتين", area: "المنيعة", lat: 19.95419060, lng: 2.96947820 },

  { id: 1171, state: "المنيعة", municipality: "عين امقل", area: "المنيعة", lat: 23.69098370, lng: 5.15094340 },

  { id: 1172, state: "المنيعة", municipality: "ابلسة", area: "المنيعة", lat: 22.88958340, lng: 4.84699310 },

  { id: 1173, state: "المنيعة", municipality: "أدلس", area: "المنيعة", lat: 23.82043170, lng: 5.93576800 },

  { id: 1174, state: "المنيعة", municipality: "تاظروك", area: "المنيعة", lat: 23.41962250, lng: 6.26589070 },

  { id: 1175, state: "المنيعة", municipality: "عين زقاق", area: "المنيعة", lat: 24.00000000, lng: 5.50000000 },

  { id: 1176, state: "المنيعة", municipality: "قصر الطاوس", area: "المنيعة", lat: 29.80000000, lng: 0.10000000 },

  { id: 1177, state: "المنيعة", municipality: "برج باجي مختار", area: "المنيعة", lat: 21.32582560, lng: 0.95285630 },

  { id: 1178, state: "المنيعة", municipality: "تيمياوين", area: "المنيعة", lat: 20.43395780, lng: 1.81012650 },

  { id: 1179, state: "المنيعة", municipality: "بني عباس", area: "المنيعة", lat: 30.13174260, lng: -2.16903100 },

  { id: 1180, state: "المنيعة", municipality: "تامترت", area: "المنيعة", lat: 30.12470140, lng: -1.90165930 },

  { id: 1181, state: "المنيعة", municipality: "الواتة", area: "المنيعة", lat: 29.86080140, lng: -1.84963140 },

  { id: 1182, state: "المنيعة", municipality: "بن يخلف", area: "المنيعة", lat: 29.74851470, lng: -1.43551570 },

  { id: 1183, state: "المنيعة", municipality: "كرزاز", area: "المنيعة", lat: 29.88168040, lng: -0.88890160 },

  { id: 1184, state: "المنيعة", municipality: "تيمودي", area: "المنيعة", lat: 29.32133600, lng: -1.12881010 },

  { id: 1185, state: "المنيعة", municipality: "إقلي", area: "المنيعة", lat: 30.45284930, lng: -2.29082640 },

  { id: 1186, state: "المنيعة", municipality: "تبلبالة", area: "المنيعة", lat: 29.40541540, lng: -3.25536640 },

  { id: 1187, state: "المنيعة", municipality: "القصابي", area: "المنيعة", lat: 29.12703040, lng: -0.98565970 },

  { id: 1188, state: "المنيعة", municipality: "أولاد خضير", area: "المنيعة", lat: 29.25650860, lng: -1.05964580 },

  { id: 1189, state: "المنيعة", municipality: "بشار", area: "المنيعة", lat: 31.61653550, lng: -2.21800530 },

  { id: 1190, state: "المنيعة", municipality: "بوكايس", area: "المنيعة", lat: 31.92445040, lng: -2.46786080 },

  { id: 1191, state: "المنيعة", municipality: "لحمر", area: "المنيعة", lat: 31.84924870, lng: -2.28075760 },

  { id: 1192, state: "المنيعة", municipality: "موغل", area: "المنيعة", lat: 32.02334780, lng: -2.21824750 },

  { id: 1193, state: "المنيعة", municipality: "القنادسة", area: "المنيعة", lat: 31.55453210, lng: -2.43266100 },

  { id: 1194, state: "المنيعة", municipality: "المريجة", area: "المنيعة", lat: 31.54916480, lng: -2.94738250 },

  { id: 1195, state: "المنيعة", municipality: "تاغيت", area: "المنيعة", lat: 30.91706110, lng: -2.02947540 },

  { id: 1196, state: "المنيعة", municipality: "العبادلة", area: "المنيعة", lat: 31.02748390, lng: -2.71044180 },

  { id: 1197, state: "المنيعة", municipality: "عرق فراج", area: "المنيعة", lat: 31.03572900, lng: -2.78967370 },

  { id: 1198, state: "المنيعة", municipality: "مشرع هواري بومدين", area: "المنيعة", lat: 30.93206050, lng: -2.73757660 },

  { id: 1199, state: "المنيعة", municipality: "بني ونيف", area: "المنيعة", lat: 32.05018910, lng: -1.24868080 },

  { id: 1200, state: "المنيعة", municipality: "تيميمون", area: "المنيعة", lat: 29.26051170, lng: 0.22859230 }
];

