import type { CategoryId, LangCode } from "./i18n";

export type QuizDifficulty = "easy" | "medium" | "challenging";
export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  difficulty?: QuizDifficulty;
  explanation?: string;
};

export type CategoryContent = {
  title: string;
  desc: string;
  storyTitle: string;
  story: string;
  tips: string[];
  dos: string[];
  donts: string[];
  myths: { myth: string; fact: string }[];
  quiz: QuizQuestion[];
};

type Content = Record<CategoryId, CategoryContent>;

const en: Content = {
  hygiene: {
    title: "Personal Hygiene",
    desc: "Wash hands, use soap, drink safe water.",
    storyTitle: "Why this matters",
    story:
      "Little Ravi kept getting stomach pain and missed school many days. His mother saw that he ate with unwashed hands after playing outside. She kept a soap near the water pot. In one month, Ravi stopped falling sick. Clean hands saved money and school days.",
    tips: [
      "Wash hands with soap for 20 seconds before eating and after using the toilet.",
      "Take a bath daily and wear clean, dry clothes.",
      "Cut nails short and keep them clean.",
      "Brush teeth two times a day, morning and night.",
      "Drink only boiled or filtered water.",
    ],
    dos: [
      "Keep a soap next to your water tap or pot.",
      "Cover cooked food with a lid or net.",
      "Use a toilet, never open ground.",
    ],
    donts: [
      "Do not share towels, combs or razors.",
      "Do not drink water from open ponds or canals.",
      "Do not touch your face with dirty hands.",
    ],
    myths: [
      { myth: "Water alone is enough to clean hands.", fact: "Soap removes the germs that water leaves behind." },
      { myth: "A bath is only needed when you feel dirty.", fact: "Daily bathing stops skin problems and itching." },
    ],
    quiz: [
      {
        q: "How long should you wash your hands with soap?",
        options: ["2 seconds", "20 seconds", "Only with water"],
        answer: 1,
      },
      {
        q: "Which water is safest to drink?",
        options: ["Boiled or filtered water", "Pond water", "Canal water"],
        answer: 0,
      },
      { q: "How many times a day should you brush your teeth?", options: ["Once", "Two times", "Never"], answer: 1 },
    ],
  },
  mosquito: {
    title: "Mosquito Safety",
    desc: "Stop stagnant water. Stay safe from dengue.",
    storyTitle: "Why this matters",
    story:
      "In one street, three children got dengue fever in the same week. Health workers found water sitting in old tyres and flower pots behind the houses. The families emptied them every week. No new fever came after that.",
    tips: [
      "Empty and dry water from pots, tyres and coolers once a week.",
      "Cover all water drums and tanks with a tight lid.",
      "Sleep under a mosquito net, also in the day time.",
      "Wear full-sleeve clothes in the evening.",
      "Go to the health centre if fever lasts more than two days.",
    ],
    dos: [
      "Clear blocked drains near your house.",
      "Put mesh on windows if you can.",
      "Keep the area around the water tap dry.",
    ],
    donts: [
      "Do not store water in open buckets for days.",
      "Do not throw coconut shells and cups in the yard.",
      "Do not treat high fever at home with leftover medicine.",
    ],
    myths: [
      { myth: "Dengue mosquitoes bite only at night.", fact: "They mostly bite in the day, morning and evening." },
      { myth: "Dirty water only breeds mosquitoes.", fact: "Dengue mosquitoes breed in clean stored water." },
    ],
    quiz: [
      {
        q: "How often should you empty stored water pots?",
        options: ["Once a week", "Once a year", "Never"],
        answer: 0,
      },
      {
        q: "When does the dengue mosquito bite most?",
        options: ["Only midnight", "Day time, morning and evening", "It never bites"],
        answer: 1,
      },
      {
        q: "Fever for more than two days. What should you do?",
        options: ["Wait one week", "Go to the health centre", "Take a friend's tablet"],
        answer: 1,
      },
    ],
  },
  nutrition: {
    title: "Good Food",
    desc: "Eat more fruits and vegetables. Eat less junk.",
    storyTitle: "Why this matters",
    story:
      "Lakshmi felt tired all the time and her hands felt weak. The nurse said her blood was low. She started eating greens, groundnuts and one lemon a day. In two months she felt strong again and could work all day.",
    tips: [
      "Eat green leafy vegetables at least three times a week.",
      "Eat one seasonal fruit every day.",
      "Add dal, egg, groundnut or milk for body strength.",
      "Drink 8 to 10 glasses of safe water daily.",
      "Use less salt, less sugar and less fried food.",
    ],
    dos: [
      "Cook with local grains like millets and rice together.",
      "Wash fruits and vegetables before cutting.",
      "Give children home food in their school box.",
    ],
    donts: [
      "Do not give small children cold drinks and packet snacks.",
      "Do not skip breakfast before work or school.",
      "Do not reuse frying oil again and again.",
    ],
    myths: [
      { myth: "Costly food is always better food.", fact: "Cheap greens, dal and groundnut are very rich in strength." },
      { myth: "Skipping meals reduces weight safely.", fact: "It makes you weak. Eat small, simple meals on time." },
    ],
    quiz: [
      { q: "How many glasses of water a day is good?", options: ["1 to 2", "8 to 10", "None"], answer: 1 },
      {
        q: "Which food gives blood strength?",
        options: ["Green leafy vegetables", "Cold drinks", "Packet chips"],
        answer: 0,
      },
      { q: "Frying oil should be reused how many times?", options: ["Many times", "Not again", "Daily"], answer: 1 },
    ],
  },
  mind: {
    title: "Mind & Peace",
    desc: "Rest well, talk to someone, stay calm.",
    storyTitle: "Why this matters",
    story:
      "Ramesh could not sleep because of money worry. He stopped talking to everyone. One day he told his brother everything. Just talking made him lighter. Together they made a small plan, and he slept well again.",
    tips: [
      "Sleep 7 to 8 hours at the same time every night.",
      "Talk to a family member or friend when you feel heavy.",
      "Sit quietly, pray or breathe slowly for 10 minutes daily.",
      "Walk outside for 30 minutes each day.",
      "Call the free helpline 14416 if sadness stays for weeks.",
    ],
    dos: [
      "Keep one small daily habit you enjoy.",
      "Help a neighbour; kindness lifts your own mind.",
      "Listen without judging when someone shares pain.",
    ],
    donts: [
      "Do not use alcohol or tobacco to forget worry.",
      "Do not laugh at anyone who feels low.",
      "Do not stay alone for many days.",
    ],
    myths: [
      { myth: "Mental illness means a person is mad.", fact: "It is an illness like fever. It gets better with help." },
      { myth: "Strong people never feel sad.", fact: "Everyone feels sad sometimes. Asking for help is strength." },
    ],
    quiz: [
      { q: "How many hours of sleep are good for an adult?", options: ["3 to 4", "7 to 8", "12 to 14"], answer: 1 },
      { q: "Which free helpline is for mental health?", options: ["14416", "1947", "180"], answer: 0 },
      {
        q: "A friend feels very sad. What is best?",
        options: ["Laugh at him", "Listen and sit with him", "Ignore him"],
        answer: 1,
      },
    ],
  },
  disease: {
    title: "Know About Diseases",
    desc: "Simple facts. No fear. No shame.",
    storyTitle: "Why this matters",
    story:
      "A young man in a village was living with HIV. People stopped sitting with him because they thought it spreads by touch. A health worker explained the truth to the village. He took free medicine, kept working, and his friends came back.",
    tips: [
      "HIV spreads only through unsafe blood, unsafe injections, unprotected sex, or mother to baby — not by touch.",
      "Free HIV testing and free medicine are available at government centres.",
      "In seasonal fever, drink water often and rest; see a doctor if it stays.",
      "Cover your mouth when you cough, and wash hands after.",
      "Complete the full course of any medicine the doctor gives.",
    ],
    dos: [
      "Insist on a new needle for every injection.",
      "Take children for all free vaccinations on time.",
      "Treat a person with illness with respect.",
    ],
    donts: [
      "Do not believe that HIV spreads by food, touch or sitting together.",
      "Do not buy medicine without a doctor for a long fever.",
      "Do not hide illness out of shame; hiding delays cure.",
    ],
    myths: [
      { myth: "HIV spreads by shaking hands or sharing food.", fact: "It does not. Daily contact is completely safe." },
      { myth: "HIV has no treatment.", fact: "Free daily medicine lets people live a long, normal life." },
      { myth: "All fevers are the same.", fact: "Dengue, malaria and typhoid need different care. Get tested." },
    ],
    quiz: [
      {
        q: "Does HIV spread by shaking hands?",
        options: ["Yes", "No", "Only in summer"],
        answer: 1,
      },
      { q: "HIV testing at a government centre costs how much?", options: ["It is free", "Very costly", "Not available"], answer: 0 },
      {
        q: "For an injection you should ask for",
        options: ["Any needle", "A new needle", "A washed needle"],
        answer: 1,
      },
    ],
  },
  women: {
    title: "Women & Family",
    desc: "Care for mothers, babies and young girls.",
    storyTitle: "Why this matters",
    story:
      "Sita went for all her check-ups when she was pregnant, took iron tablets and delivered in the hospital. Her neighbour delivered at home without check-ups and faced problems. Simple, free check-ups keep mother and baby safe.",
    tips: [
      "Pregnant mothers should have at least four check-ups at the health centre.",
      "Take iron and folic acid tablets as the nurse tells you.",
      "Give only mother's milk for the first six months.",
      "Complete all baby vaccinations in the card.",
      "Use clean cloth or sanitary pads during periods, and change them often.",
    ],
    dos: [
      "Talk openly with girls about periods; it is normal and healthy.",
      "Let girls finish school; educated mothers raise healthy children.",
      "Deliver the baby at a hospital or health centre.",
    ],
    donts: [
      "Do not stop a girl from eating good food during periods.",
      "Do not marry girls before 18 years.",
      "Do not skip check-ups because you feel fine.",
    ],
    myths: [
      { myth: "Periods make a girl impure.", fact: "Periods are a normal, healthy part of the body." },
      { myth: "A mother must eat less after delivery.", fact: "She needs more good food and water to feed the baby." },
    ],
    quiz: [
      {
        q: "How many check-ups should a pregnant mother have at least?",
        options: ["None", "Four", "One"],
        answer: 1,
      },
      { q: "For the first six months a baby should get", options: ["Only mother's milk", "Cow milk only", "Rice water"], answer: 0 },
      { q: "The safe minimum age for a girl's marriage is", options: ["15 years", "18 years", "Any age"], answer: 1 },
    ],
  },
};

const hi: Content = {
  hygiene: {
    title: "साफ़-सफ़ाई",
    desc: "हाथ धोएँ, साबुन लगाएँ, साफ़ पानी पीएँ।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "छोटे रवि का पेट बार-बार दर्द करता था और स्कूल छूट जाता था। माँ ने देखा कि वह खेलने के बाद बिना हाथ धोए खाता है। उसने पानी के पास साबुन रख दिया। एक महीने में रवि बीमार होना बंद हो गया।",
    tips: [
      "खाने से पहले और शौच के बाद 20 सेकंड साबुन से हाथ धोएँ।",
      "रोज़ नहाएँ और साफ़, सूखे कपड़े पहनें।",
      "नाखून छोटे और साफ़ रखें।",
      "सुबह और रात, दिन में दो बार दाँत साफ़ करें।",
      "सिर्फ़ उबला या छना पानी पीएँ।",
    ],
    dos: ["नल या मटके के पास साबुन रखें।", "पके खाने को ढककर रखें।", "शौचालय का ही उपयोग करें।"],
    donts: ["तौलिया, कंघी, ब्लेड साझा न करें।", "खुले तालाब का पानी न पीएँ।", "गंदे हाथों से चेहरा न छुएँ।"],
    myths: [
      { myth: "सिर्फ़ पानी से हाथ साफ़ हो जाते हैं।", fact: "साबुन उन कीटाणुओं को हटाता है जो पानी छोड़ देता है।" },
      { myth: "गंदा लगने पर ही नहाना चाहिए।", fact: "रोज़ नहाने से खुजली और त्वचा रोग नहीं होते।" },
    ],
    quiz: [
      { q: "साबुन से कितनी देर हाथ धोने चाहिए?", options: ["2 सेकंड", "20 सेकंड", "सिर्फ़ पानी से"], answer: 1 },
      { q: "पीने के लिए कौन सा पानी सुरक्षित है?", options: ["उबला या छना पानी", "तालाब का पानी", "नहर का पानी"], answer: 0 },
      { q: "दिन में कितनी बार दाँत साफ़ करें?", options: ["एक बार", "दो बार", "कभी नहीं"], answer: 1 },
    ],
  },
  mosquito: {
    title: "मच्छर से बचाव",
    desc: "पानी जमा न होने दें। डेंगू से बचें।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "एक गली में तीन बच्चों को एक ही हफ़्ते में डेंगू हुआ। स्वास्थ्य कर्मचारी ने घर के पीछे पुराने टायर और गमलों में पानी देखा। परिवारों ने हर हफ़्ते पानी फेंकना शुरू किया। उसके बाद नया बुखार नहीं हुआ।",
    tips: [
      "गमले, टायर और कूलर का पानी हफ़्ते में एक बार खाली करें और सुखाएँ।",
      "पानी के ड्रम और टंकी ढककर रखें।",
      "मच्छरदानी में सोएँ, दिन में भी।",
      "शाम को पूरी आस्तीन के कपड़े पहनें।",
      "बुखार दो दिन से ज़्यादा रहे तो स्वास्थ्य केंद्र जाएँ।",
    ],
    dos: ["घर के पास की नालियाँ साफ़ करें।", "खिड़कियों पर जाली लगाएँ।", "नल के आसपास सूखा रखें।"],
    donts: ["खुली बाल्टी में कई दिन पानी न रखें।", "आँगन में नारियल के खोल न फेंकें।", "तेज़ बुखार में बची दवा न लें।"],
    myths: [
      { myth: "डेंगू का मच्छर रात में ही काटता है।", fact: "वह ज़्यादातर दिन में, सुबह और शाम काटता है।" },
      { myth: "मच्छर सिर्फ़ गंदे पानी में पैदा होते हैं।", fact: "डेंगू का मच्छर साफ़ जमा पानी में पैदा होता है।" },
    ],
    quiz: [
      { q: "जमा पानी कितनी बार खाली करें?", options: ["हफ़्ते में एक बार", "साल में एक बार", "कभी नहीं"], answer: 0 },
      { q: "डेंगू का मच्छर कब ज़्यादा काटता है?", options: ["आधी रात", "दिन, सुबह और शाम", "कभी नहीं"], answer: 1 },
      { q: "दो दिन से ज़्यादा बुखार, क्या करें?", options: ["एक हफ़्ता रुकें", "स्वास्थ्य केंद्र जाएँ", "दोस्त की गोली लें"], answer: 1 },
    ],
  },
  nutrition: {
    title: "अच्छा खाना",
    desc: "फल-सब्ज़ी ज़्यादा, जंक फूड कम।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "लक्ष्मी को हमेशा थकान रहती थी। नर्स ने कहा खून की कमी है। उसने हरी सब्ज़ी, मूँगफली और रोज़ एक नींबू खाना शुरू किया। दो महीने में वह फिर मज़बूत हो गई।",
    tips: [
      "हफ़्ते में कम से कम तीन बार हरी पत्तेदार सब्ज़ी खाएँ।",
      "रोज़ मौसमी एक फल खाएँ।",
      "ताक़त के लिए दाल, अंडा, मूँगफली या दूध लें।",
      "रोज़ 8 से 10 गिलास साफ़ पानी पीएँ।",
      "नमक, चीनी और तली चीज़ें कम करें।",
    ],
    dos: ["मोटे अनाज और चावल साथ पकाएँ।", "काटने से पहले फल-सब्ज़ी धोएँ।", "बच्चों को घर का खाना टिफ़िन में दें।"],
    donts: ["छोटे बच्चों को कोल्ड ड्रिंक और पैकेट स्नैक न दें।", "नाश्ता छोड़कर काम पर न जाएँ।", "तलने का तेल बार-बार न इस्तेमाल करें।"],
    myths: [
      { myth: "महँगा खाना ही अच्छा होता है।", fact: "सस्ती हरी सब्ज़ी, दाल और मूँगफली बहुत ताक़तवर हैं।" },
      { myth: "खाना छोड़ने से वज़न सुरक्षित घटता है।", fact: "इससे कमज़ोरी आती है। समय पर हल्का खाना खाएँ।" },
    ],
    quiz: [
      { q: "दिन में कितने गिलास पानी अच्छा है?", options: ["1 से 2", "8 से 10", "कोई नहीं"], answer: 1 },
      { q: "खून बढ़ाने वाला खाना कौन सा है?", options: ["हरी पत्तेदार सब्ज़ी", "कोल्ड ड्रिंक", "पैकेट चिप्स"], answer: 0 },
      { q: "तलने का तेल कितनी बार दोबारा उपयोग करें?", options: ["कई बार", "दोबारा नहीं", "रोज़"], answer: 1 },
    ],
  },
  mind: {
    title: "मन की शांति",
    desc: "आराम करें, बात करें, शांत रहें।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "रमेश पैसे की चिंता में सो नहीं पाता था और किसी से बात नहीं करता था। एक दिन उसने भाई को सब बताया। बात करने से मन हल्का हुआ। दोनों ने छोटी योजना बनाई और उसकी नींद लौट आई।",
    tips: [
      "रोज़ एक ही समय पर 7 से 8 घंटे सोएँ।",
      "मन भारी हो तो परिवार या दोस्त से बात करें।",
      "रोज़ 10 मिनट शांत बैठें, प्रार्थना करें या धीरे साँस लें।",
      "रोज़ 30 मिनट बाहर टहलें।",
      "उदासी हफ़्तों रहे तो मुफ़्त हेल्पलाइन 14416 पर कॉल करें।",
    ],
    dos: ["रोज़ एक पसंद का छोटा काम करें।", "पड़ोसी की मदद करें, इससे मन हल्का होता है।", "किसी का दुख सुनें, जज न करें।"],
    donts: ["चिंता भुलाने के लिए शराब या तंबाकू न लें।", "उदास व्यक्ति पर न हँसें।", "कई दिन अकेले न रहें।"],
    myths: [
      { myth: "मानसिक बीमारी का मतलब पागलपन है।", fact: "यह बुखार जैसी बीमारी है, इलाज से ठीक होती है।" },
      { myth: "मज़बूत लोग कभी दुखी नहीं होते।", fact: "सबको दुख होता है। मदद माँगना ताक़त है।" },
    ],
    quiz: [
      { q: "बड़ों के लिए कितनी नींद अच्छी है?", options: ["3 से 4 घंटे", "7 से 8 घंटे", "12 से 14 घंटे"], answer: 1 },
      { q: "मानसिक स्वास्थ्य की मुफ़्त हेल्पलाइन?", options: ["14416", "1947", "180"], answer: 0 },
      { q: "दोस्त बहुत उदास है, क्या करें?", options: ["हँसें", "साथ बैठें और सुनें", "ध्यान न दें"], answer: 1 },
    ],
  },
  disease: {
    title: "बीमारी की जानकारी",
    desc: "सही बात। कोई डर नहीं, कोई शर्म नहीं।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "गाँव के एक युवक को एचआईवी था। लोग सोचते थे यह छूने से फैलता है, इसलिए दूर रहने लगे। स्वास्थ्य कर्मचारी ने गाँव को सच बताया। उसने मुफ़्त दवा ली, काम करता रहा और दोस्त लौट आए।",
    tips: [
      "एचआईवी असुरक्षित खून, असुरक्षित सुई, असुरक्षित संबंध या माँ से बच्चे तक फैलता है — छूने से नहीं।",
      "सरकारी केंद्रों में एचआईवी जाँच और दवा मुफ़्त है।",
      "मौसमी बुखार में पानी पीएँ, आराम करें; ज़्यादा दिन रहे तो डॉक्टर के पास जाएँ।",
      "खाँसते समय मुँह ढकें और बाद में हाथ धोएँ।",
      "डॉक्टर की दी दवा पूरी लें।",
    ],
    dos: ["हर इंजेक्शन में नई सुई माँगें।", "बच्चों के सभी मुफ़्त टीके समय पर लगवाएँ।", "बीमार व्यक्ति से सम्मान से बात करें।"],
    donts: ["यह न मानें कि एचआईवी खाने या छूने से फैलता है।", "लंबे बुखार में बिना डॉक्टर दवा न लें।", "शर्म से बीमारी न छिपाएँ।"],
    myths: [
      { myth: "एचआईवी हाथ मिलाने या साथ खाने से फैलता है।", fact: "नहीं फैलता। रोज़ का संपर्क पूरी तरह सुरक्षित है।" },
      { myth: "एचआईवी का इलाज नहीं है।", fact: "मुफ़्त रोज़ की दवा से लंबा सामान्य जीवन जिया जा सकता है।" },
      { myth: "सभी बुखार एक जैसे हैं।", fact: "डेंगू, मलेरिया, टाइफ़ॉइड का इलाज अलग है। जाँच कराएँ।" },
    ],
    quiz: [
      { q: "क्या एचआईवी हाथ मिलाने से फैलता है?", options: ["हाँ", "नहीं", "सिर्फ़ गर्मी में"], answer: 1 },
      { q: "सरकारी केंद्र में एचआईवी जाँच का खर्च?", options: ["मुफ़्त है", "बहुत महँगा", "उपलब्ध नहीं"], answer: 0 },
      { q: "इंजेक्शन के लिए क्या माँगें?", options: ["कोई भी सुई", "नई सुई", "धुली सुई"], answer: 1 },
    ],
  },
  women: {
    title: "महिला व परिवार",
    desc: "माँ, बच्चे और बेटियों की देखभाल।",
    storyTitle: "यह क्यों ज़रूरी है",
    story:
      "सीता ने गर्भावस्था में सभी जाँच कराईं, आयरन की गोली ली और अस्पताल में बच्चा हुआ। पड़ोसन ने बिना जाँच घर पर प्रसव किया और परेशानी हुई। मुफ़्त जाँच माँ और बच्चे को सुरक्षित रखती है।",
    tips: [
      "गर्भवती माँ को कम से कम चार जाँच करानी चाहिए।",
      "नर्स के कहे अनुसार आयरन और फोलिक एसिड की गोली लें।",
      "पहले छह महीने सिर्फ़ माँ का दूध दें।",
      "कार्ड के सभी टीके पूरे कराएँ।",
      "माहवारी में साफ़ कपड़ा या पैड इस्तेमाल करें और बार-बार बदलें।",
    ],
    dos: ["बेटियों से माहवारी पर खुलकर बात करें।", "बेटियों की पढ़ाई पूरी कराएँ।", "प्रसव अस्पताल या स्वास्थ्य केंद्र में कराएँ।"],
    donts: ["माहवारी में अच्छा खाना बंद न करें।", "18 साल से पहले बेटी की शादी न करें।", "ठीक लगने पर भी जाँच न छोड़ें।"],
    myths: [
      { myth: "माहवारी में लड़की अपवित्र होती है।", fact: "माहवारी शरीर की सामान्य और स्वस्थ प्रक्रिया है।" },
      { myth: "प्रसव के बाद माँ को कम खाना चाहिए।", fact: "दूध पिलाने के लिए उसे ज़्यादा अच्छा खाना और पानी चाहिए।" },
    ],
    quiz: [
      { q: "गर्भवती माँ को कम से कम कितनी जाँच?", options: ["कोई नहीं", "चार", "एक"], answer: 1 },
      { q: "पहले छह महीने बच्चे को क्या दें?", options: ["सिर्फ़ माँ का दूध", "सिर्फ़ गाय का दूध", "चावल का पानी"], answer: 0 },
      { q: "बेटी की शादी की सुरक्षित न्यूनतम उम्र?", options: ["15 साल", "18 साल", "कोई भी उम्र"], answer: 1 },
    ],
  },
};

const te: Content = {
  hygiene: {
    title: "శుభ్రత",
    desc: "చేతులు కడుక్కోండి, సబ్బు వాడండి, శుభ్రమైన నీరు తాగండి.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "చిన్న రవికి తరచూ కడుపునొప్పి వచ్చి బడి మానేసేవాడు. ఆడుకున్న తర్వాత చేతులు కడగకుండా తింటున్నాడని అమ్మ గమనించింది. నీటి కుండ దగ్గర సబ్బు పెట్టింది. ఒక నెలలో రవి ఆరోగ్యంగా ఉన్నాడు.",
    tips: [
      "తినే ముందు, మరుగుదొడ్డి తర్వాత 20 సెకన్లు సబ్బుతో చేతులు కడుక్కోండి.",
      "రోజూ స్నానం చేసి శుభ్రమైన బట్టలు వేసుకోండి.",
      "గోళ్లు కత్తిరించి శుభ్రంగా ఉంచండి.",
      "రోజుకు రెండు సార్లు — ఉదయం, రాత్రి పళ్లు తోముకోండి.",
      "కాచిన లేదా వడపోసిన నీరు మాత్రమే తాగండి.",
    ],
    dos: ["నీటి కుండ లేదా కుళాయి దగ్గర సబ్బు ఉంచండి.", "వండిన ఆహారాన్ని మూత పెట్టండి.", "మరుగుదొడ్డినే ఉపయోగించండి."],
    donts: ["తువ్వాలు, దువ్వెన, బ్లేడు పంచుకోవద్దు.", "చెరువు నీరు తాగవద్దు.", "మురికి చేతులతో ముఖం తాకవద్దు."],
    myths: [
      { myth: "నీటితోనే చేతులు శుభ్రమవుతాయి.", fact: "సబ్బు మాత్రమే క్రిములను తొలగిస్తుంది." },
      { myth: "మురికిగా అనిపించినప్పుడే స్నానం.", fact: "రోజూ స్నానం చర్మ సమస్యలను, దురదను ఆపుతుంది." },
    ],
    quiz: [
      { q: "సబ్బుతో ఎంత సేపు చేతులు కడగాలి?", options: ["2 సెకన్లు", "20 సెకన్లు", "నీటితోనే"], answer: 1 },
      { q: "తాగడానికి ఏ నీరు సురక్షితం?", options: ["కాచిన లేదా వడపోసిన నీరు", "చెరువు నీరు", "కాలువ నీరు"], answer: 0 },
      { q: "రోజుకు ఎన్ని సార్లు పళ్లు తోముకోవాలి?", options: ["ఒకసారి", "రెండు సార్లు", "అవసరం లేదు"], answer: 1 },
    ],
  },
  mosquito: {
    title: "దోమల నుండి రక్షణ",
    desc: "నిల్వ నీరు వద్దు. డెంగీ నుండి కాపాడుకోండి.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "ఒక వీధిలో ఒకే వారంలో మూడు పిల్లలకు డెంగీ వచ్చింది. ఇళ్ల వెనుక పాత టైర్లు, మట్టి కుండల్లో నీరు నిల్వ ఉందని ఆరోగ్య కార్యకర్తలు చూశారు. కుటుంబాలు వారానికి ఒకసారి ఖాళీ చేయడం మొదలుపెట్టాయి. తర్వాత కొత్త జ్వరాలు రాలేదు.",
    tips: [
      "కుండలు, టైర్లు, కూలర్లలో నీరు వారానికి ఒకసారి ఖాళీ చేసి ఆరబెట్టండి.",
      "నీటి డ్రమ్ములు, ట్యాంకులు గట్టిగా మూత పెట్టండి.",
      "దోమతెరలో పడుకోండి, పగలు కూడా.",
      "సాయంత్రం పూర్తి చేతుల బట్టలు వేసుకోండి.",
      "జ్వరం రెండు రోజులకు మించి ఉంటే ఆరోగ్య కేంద్రానికి వెళ్లండి.",
    ],
    dos: ["ఇంటి దగ్గర కాలువలు శుభ్రం చేయండి.", "కిటికీలకు మెష్ పెట్టండి.", "కుళాయి చుట్టూ పొడిగా ఉంచండి."],
    donts: ["తెరిచిన బకెట్లలో రోజుల తరబడి నీరు నిల్వ చేయవద్దు.", "కొబ్బరి బొండాలు పరిసరాల్లో పడేయవద్దు.", "మిగిలిన మందులతో జ్వరం చికిత్స చేయవద్దు."],
    myths: [
      { myth: "డెంగీ దోమ రాత్రి మాత్రమే కుడుతుంది.", fact: "అది ఎక్కువగా పగలు, ఉదయం, సాయంత్రం కుడుతుంది." },
      { myth: "మురికి నీటిలోనే దోమలు పెరుగుతాయి.", fact: "డెంగీ దోమ శుభ్రమైన నిల్వ నీటిలో పెరుగుతుంది." },
    ],
    quiz: [
      { q: "నిల్వ నీరు ఎంత తరచుగా ఖాళీ చేయాలి?", options: ["వారానికి ఒకసారి", "ఏడాదికి ఒకసారి", "అవసరం లేదు"], answer: 0 },
      { q: "డెంగీ దోమ ఎప్పుడు ఎక్కువగా కుడుతుంది?", options: ["అర్ధరాత్రి", "పగలు, ఉదయం, సాయంత్రం", "ఎప్పుడూ కాదు"], answer: 1 },
      { q: "రెండు రోజులకు మించిన జ్వరం — ఏం చేయాలి?", options: ["వారం ఆగాలి", "ఆరోగ్య కేంద్రానికి వెళ్లాలి", "స్నేహితుడి మాత్ర వేసుకోవాలి"], answer: 1 },
    ],
  },
  nutrition: {
    title: "మంచి ఆహారం",
    desc: "పండ్లు, కూరగాయలు ఎక్కువ. జంక్ ఫుడ్ తక్కువ.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "లక్ష్మికి ఎప్పుడూ అలసటగా ఉండేది. రక్తం తక్కువ ఉందని నర్సు చెప్పింది. ఆకుకూరలు, వేరుశనగ, రోజూ ఒక నిమ్మకాయ తినడం మొదలుపెట్టింది. రెండు నెలల్లో బలంగా మారింది.",
    tips: [
      "వారానికి కనీసం మూడు సార్లు ఆకుకూరలు తినండి.",
      "రోజూ ఒక కాలానుగుణ పండు తినండి.",
      "బలం కోసం పప్పు, గుడ్డు, వేరుశనగ లేదా పాలు తీసుకోండి.",
      "రోజూ 8 నుండి 10 గ్లాసుల శుభ్రమైన నీరు తాగండి.",
      "ఉప్పు, చక్కెర, వేపుడు ఆహారం తగ్గించండి.",
    ],
    dos: ["చిరుధాన్యాలు, బియ్యం కలిపి వండండి.", "కోసే ముందు పండ్లు, కూరగాయలు కడగండి.", "పిల్లలకు ఇంటి ఆహారం బాక్సులో ఇవ్వండి."],
    donts: ["చిన్న పిల్లలకు కూల్ డ్రింక్స్, ప్యాకెట్ స్నాక్స్ ఇవ్వవద్దు.", "అల్పాహారం మానవద్దు.", "వేపుడు నూనె మళ్లీ మళ్లీ వాడవద్దు."],
    myths: [
      { myth: "ఖరీదైన ఆహారమే మంచిది.", fact: "చౌకైన ఆకుకూరలు, పప్పు, వేరుశనగలో బలం ఎక్కువ." },
      { myth: "భోజనం మానితే బరువు తగ్గుతుంది.", fact: "అది బలహీనత తెస్తుంది. సమయానికి తక్కువ తినండి." },
    ],
    quiz: [
      { q: "రోజుకు ఎన్ని గ్లాసుల నీరు మంచిది?", options: ["1 నుండి 2", "8 నుండి 10", "ఏమీ వద్దు"], answer: 1 },
      { q: "రక్తం పెంచే ఆహారం ఏది?", options: ["ఆకుకూరలు", "కూల్ డ్రింక్", "ప్యాకెట్ చిప్స్"], answer: 0 },
      { q: "వేపుడు నూనె మళ్లీ ఎన్ని సార్లు వాడాలి?", options: ["చాలా సార్లు", "మళ్లీ వాడకూడదు", "రోజూ"], answer: 1 },
    ],
  },
  mind: {
    title: "మనశ్శాంతి",
    desc: "విశ్రాంతి తీసుకోండి, మాట్లాడండి, ప్రశాంతంగా ఉండండి.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "డబ్బు చింతతో రమేష్‌కు నిద్ర పట్టేది కాదు, ఎవరితోనూ మాట్లాడేవాడు కాదు. ఒక రోజు అన్నయ్యకు అంతా చెప్పాడు. మాట్లాడటంతో మనసు తేలికైంది. ఇద్దరూ చిన్న ప్రణాళిక వేసుకున్నారు, నిద్ర తిరిగి వచ్చింది.",
    tips: [
      "ప్రతి రాత్రి ఒకే సమయానికి 7 నుండి 8 గంటలు నిద్రపోండి.",
      "మనసు బాధగా ఉంటే కుటుంబం లేదా స్నేహితుడితో మాట్లాడండి.",
      "రోజూ 10 నిమిషాలు నిశ్శబ్దంగా కూర్చోండి, ప్రార్థించండి లేదా నెమ్మదిగా శ్వాస తీసుకోండి.",
      "రోజూ 30 నిమిషాలు నడవండి.",
      "వారాలపాటు దిగులు ఉంటే ఉచిత హెల్ప్‌లైన్ 14416కు కాల్ చేయండి.",
    ],
    dos: ["రోజూ ఇష్టమైన చిన్న పని చేయండి.", "పొరుగువారికి సహాయం చేయండి, మనసు తేలికవుతుంది.", "ఎవరైనా బాధ చెబితే తీర్పు చెప్పకుండా వినండి."],
    donts: ["చింత మరచేందుకు మద్యం, పొగాకు వాడవద్దు.", "దిగులుగా ఉన్నవారిని ఎగతాళి చేయవద్దు.", "రోజుల తరబడి ఒంటరిగా ఉండవద్దు."],
    myths: [
      { myth: "మానసిక అనారోగ్యం అంటే పిచ్చి.", fact: "అది జ్వరం లాంటి అనారోగ్యం. చికిత్సతో నయమవుతుంది." },
      { myth: "బలమైనవారు ఎప్పుడూ బాధపడరు.", fact: "అందరూ బాధపడతారు. సహాయం అడగడం బలం." },
    ],
    quiz: [
      { q: "పెద్దలకు ఎంత నిద్ర మంచిది?", options: ["3 నుండి 4 గంటలు", "7 నుండి 8 గంటలు", "12 నుండి 14 గంటలు"], answer: 1 },
      { q: "మానసిక ఆరోగ్య ఉచిత హెల్ప్‌లైన్?", options: ["14416", "1947", "180"], answer: 0 },
      { q: "స్నేహితుడు చాలా దిగులుగా ఉన్నాడు — ఏం చేయాలి?", options: ["ఎగతాళి చేయాలి", "పక్కన కూర్చుని వినాలి", "పట్టించుకోకూడదు"], answer: 1 },
    ],
  },
  disease: {
    title: "వ్యాధుల గురించి తెలుసుకోండి",
    desc: "సరైన సమాచారం. భయం వద్దు, సిగ్గు వద్దు.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "ఒక ఊరిలో యువకుడికి ఎచ్ఐవి ఉంది. తాకితే వ్యాపిస్తుందని అనుకుని ప్రజలు దూరంగా ఉన్నారు. ఆరోగ్య కార్యకర్త ఊరికి నిజం చెప్పారు. అతను ఉచిత మందు తీసుకుంటూ పని కొనసాగించాడు, స్నేహితులు తిరిగి వచ్చారు.",
    tips: [
      "ఎచ్ఐవి అసురక్షిత రక్తం, సూదులు, అసురక్షిత సంబంధాలు, తల్లి నుండి బిడ్డకు వ్యాపిస్తుంది — తాకడం వల్ల కాదు.",
      "ప్రభుత్వ కేంద్రాల్లో ఎచ్ఐవి పరీక్ష, మందులు ఉచితం.",
      "కాలానుగుణ జ్వరంలో నీరు తాగి విశ్రాంతి తీసుకోండి; తగ్గకపోతే వైద్యుని కలవండి.",
      "దగ్గినప్పుడు నోరు మూసుకోండి, తర్వాత చేతులు కడుక్కోండి.",
      "వైద్యుడు ఇచ్చిన మందు పూర్తి కోర్సు తీసుకోండి.",
    ],
    dos: ["ప్రతి ఇంజెక్షన్‌కు కొత్త సూది అడగండి.", "పిల్లలకు ఉచిత టీకాలు సమయానికి వేయించండి.", "అనారోగ్యంతో ఉన్నవారిని గౌరవంగా చూడండి."],
    donts: ["ఎచ్ఐవి ఆహారం, తాకడం వల్ల వ్యాపిస్తుందని నమ్మవద్దు.", "ఎక్కువ రోజుల జ్వరానికి వైద్యుడు లేకుండా మందు కొనవద్దు.", "సిగ్గుతో అనారోగ్యం దాచవద్దు."],
    myths: [
      { myth: "ఎచ్ఐవి కరచాలనం, కలిసి తినడం వల్ల వ్యాపిస్తుంది.", fact: "వ్యాపించదు. రోజువారీ కలయిక పూర్తిగా సురక్షితం." },
      { myth: "ఎచ్ఐవికి చికిత్స లేదు.", fact: "ఉచిత రోజువారీ మందుతో సాధారణ జీవితం జీవించవచ్చు." },
      { myth: "అన్ని జ్వరాలు ఒకటే.", fact: "డెంగీ, మలేరియా, టైఫాయిడ్‌కు వేరు చికిత్స. పరీక్ష చేయించండి." },
    ],
    quiz: [
      { q: "కరచాలనం వల్ల ఎచ్ఐవి వ్యాపిస్తుందా?", options: ["అవును", "కాదు", "వేసవిలో మాత్రమే"], answer: 1 },
      { q: "ప్రభుత్వ కేంద్రంలో ఎచ్ఐవి పరీక్ష ఖర్చు?", options: ["ఉచితం", "చాలా ఖరీదు", "అందుబాటులో లేదు"], answer: 0 },
      { q: "ఇంజెక్షన్‌కు ఏమి అడగాలి?", options: ["ఏ సూది అయినా", "కొత్త సూది", "కడిగిన సూది"], answer: 1 },
    ],
  },
  women: {
    title: "మహిళలు & కుటుంబం",
    desc: "తల్లులు, పిల్లలు, ఆడపిల్లల సంరక్షణ.",
    storyTitle: "ఇది ఎందుకు ముఖ్యం",
    story:
      "సీత గర్భంతో ఉన్నప్పుడు అన్ని పరీక్షలు చేయించుకుంది, ఐరన్ మాత్రలు వేసుకుంది, ఆసుపత్రిలో ప్రసవించింది. పొరుగింటి ఆమె పరీక్షలు లేకుండా ఇంట్లో ప్రసవించి ఇబ్బంది పడింది. ఉచిత పరీక్షలు తల్లి, బిడ్డను కాపాడతాయి.",
    tips: [
      "గర్భిణీ తల్లికి కనీసం నాలుగు పరీక్షలు అవసరం.",
      "నర్సు చెప్పినట్లు ఐరన్, ఫోలిక్ యాసిడ్ మాత్రలు వేసుకోండి.",
      "మొదటి ఆరు నెలలు తల్లి పాలు మాత్రమే ఇవ్వండి.",
      "కార్డులోని అన్ని టీకాలు పూర్తి చేయించండి.",
      "నెలసరిలో శుభ్రమైన గుడ్డ లేదా ప్యాడ్ వాడి తరచూ మార్చండి.",
    ],
    dos: ["ఆడపిల్లలతో నెలసరి గురించి బహిరంగంగా మాట్లాడండి.", "ఆడపిల్లల చదువు పూర్తి చేయించండి.", "ప్రసవం ఆసుపత్రిలో లేదా ఆరోగ్య కేంద్రంలో చేయించండి."],
    donts: ["నెలసరిలో మంచి ఆహారం ఆపవద్దు.", "18 ఏళ్ల ముందు ఆడపిల్లకు పెళ్లి చేయవద్దు.", "బాగున్నానని పరీక్షలు మానవద్దు."],
    myths: [
      { myth: "నెలసరిలో ఆడపిల్ల అపవిత్రం.", fact: "నెలసరి శరీరానికి సాధారణమైన, ఆరోగ్యమైన ప్రక్రియ." },
      { myth: "ప్రసవం తర్వాత తల్లి తక్కువ తినాలి.", fact: "పాలివ్వడానికి ఎక్కువ మంచి ఆహారం, నీరు కావాలి." },
    ],
    quiz: [
      { q: "గర్భిణీ తల్లికి కనీసం ఎన్ని పరీక్షలు?", options: ["ఏమీ వద్దు", "నాలుగు", "ఒకటి"], answer: 1 },
      { q: "మొదటి ఆరు నెలలు బిడ్డకు ఏమి ఇవ్వాలి?", options: ["తల్లి పాలు మాత్రమే", "ఆవు పాలు మాత్రమే", "గంజి"], answer: 0 },
      { q: "ఆడపిల్ల పెళ్లికి సురక్షితమైన కనీస వయస్సు?", options: ["15 ఏళ్లు", "18 ఏళ్లు", "ఏ వయసైనా"], answer: 1 },
    ],
  },
};

export const CONTENT: Record<LangCode, Content> = { en, hi, te };

export const CATEGORY_IDS: CategoryId[] = [
  "hygiene",
  "mosquito",
  "nutrition",
  "mind",
  "disease",
  "women",
];
