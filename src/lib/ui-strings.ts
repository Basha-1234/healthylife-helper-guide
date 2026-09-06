import type { LangCode } from "./i18n";

export type UiStrings = {
  topicsHeading: string;
  topicsIntro: string;
  openTopic: string;
  backToTopics: string;
  whyMatters: string;
  tipsTitle: string;
  dosTitle: string;
  dontsTitle: string;
  mythTitle: string;
  myth: string;
  fact: string;
  printPoster: string;
  posterNote: string;
  quizHeading: string;
  quizIntro: string;
  quizTopicQuestion: string;
  allTopics: string;
  startQuiz: string;
  question: string;
  of: string;
  nextQuestion: string;
  seeResult: string;
  correct: string;
  wrong: string;
  yourScore: string;
  tryAgain: string;
  goodJob: string;
  keepLearning: string;
  takeQuiz: string;
  resourcesHeading: string;
  resourcesIntro: string;
  helplinesHeading: string;
  postersHeading: string;
  postersIntro: string;
  trustedHeading: string;
  visit: string;
  contactHeading: string;
  contactIntro: string;
  contactWhoHeading: string;
  contactWho: string;
  emailUs: string;
  callHelpline: string;
  nearestCentre: string;
  nearestCentreText: string;
};

const strings: Record<LangCode, UiStrings> = {
  en: {
    topicsHeading: "All health topics",
    topicsIntro: "Tap a picture to open the topic. Each topic has a story, simple tips and a small quiz.",
    openTopic: "Open",
    backToTopics: "Back to all topics",
    whyMatters: "Why this matters",
    tipsTitle: "Simple things you can do",
    dosTitle: "Do this",
    dontsTitle: "Do not do this",
    mythTitle: "Myths and facts",
    myth: "Myth",
    fact: "Fact",
    printPoster: "Print or save poster (PDF)",
    posterNote: "Use the print button to save this page as a PDF poster for your wall.",
    quizHeading: "Health quiz",
    quizIntro: "Answer a few easy questions. No marks, no fear — just learning.",
    quizTopicQuestion: "Choose a topic",
    allTopics: "All topics mixed",
    startQuiz: "Start quiz",
    question: "Question",
    of: "of",
    nextQuestion: "Next question",
    seeResult: "See my result",
    correct: "Correct!",
    wrong: "Not correct. The right answer is shown.",
    yourScore: "Your score",
    tryAgain: "Try again",
    goodJob: "Very good! Please share these tips with your family.",
    keepLearning: "Good try! Read the topic once more and try again.",
    takeQuiz: "Take the quiz on this topic",
    resourcesHeading: "Resources and helplines",
    resourcesIntro: "Free numbers, printable posters and trusted websites.",
    helplinesHeading: "Free helpline numbers",
    postersHeading: "Printable posters",
    postersIntro: "Open a topic and press the print button to save a poster as PDF.",
    trustedHeading: "Trusted health websites",
    visit: "Visit",
    contactHeading: "Contact us",
    contactIntro: "We are students doing a community service project. Write to us with your questions or ideas.",
    contactWhoHeading: "Who we are",
    contactWho:
      "This website was made as a Community Service Project to share simple health information in villages and towns, in your own language.",
    emailUs: "Email us",
    callHelpline: "Call a free helpline",
    nearestCentre: "Your nearest health centre",
    nearestCentreText:
      "For any illness, visit your village health sub-centre, Primary Health Centre (PHC) or ask your ASHA worker. Care there is free.",
  },
  hi: {
    topicsHeading: "सभी स्वास्थ्य विषय",
    topicsIntro: "विषय खोलने के लिए चित्र दबाएँ। हर विषय में कहानी, आसान सलाह और छोटा सवाल-जवाब है।",
    openTopic: "खोलें",
    backToTopics: "सभी विषयों पर लौटें",
    whyMatters: "यह क्यों ज़रूरी है",
    tipsTitle: "आप क्या कर सकते हैं",
    dosTitle: "यह करें",
    dontsTitle: "यह न करें",
    mythTitle: "भ्रम और सच",
    myth: "भ्रम",
    fact: "सच",
    printPoster: "पोस्टर छापें या सेव करें (PDF)",
    posterNote: "प्रिंट बटन से इस पेज को PDF पोस्टर की तरह सेव करें और दीवार पर लगाएँ।",
    quizHeading: "स्वास्थ्य सवाल-जवाब",
    quizIntro: "कुछ आसान सवालों के जवाब दें। कोई अंक नहीं, कोई डर नहीं — सिर्फ़ सीखना।",
    quizTopicQuestion: "विषय चुनें",
    allTopics: "सभी विषय मिलाकर",
    startQuiz: "शुरू करें",
    question: "सवाल",
    of: "में से",
    nextQuestion: "अगला सवाल",
    seeResult: "मेरा नतीजा देखें",
    correct: "सही!",
    wrong: "यह सही नहीं है। सही जवाब दिखाया गया है।",
    yourScore: "आपका नतीजा",
    tryAgain: "फिर कोशिश करें",
    goodJob: "बहुत अच्छा! ये बातें अपने परिवार को भी बताएँ।",
    keepLearning: "अच्छी कोशिश! विषय एक बार और पढ़ें, फिर कोशिश करें।",
    takeQuiz: "इस विषय के सवाल-जवाब करें",
    resourcesHeading: "साधन और हेल्पलाइन",
    resourcesIntro: "मुफ़्त नंबर, छापने योग्य पोस्टर और भरोसेमंद वेबसाइट।",
    helplinesHeading: "मुफ़्त हेल्पलाइन नंबर",
    postersHeading: "छापने योग्य पोस्टर",
    postersIntro: "कोई विषय खोलें और प्रिंट बटन दबाकर पोस्टर को PDF में सेव करें।",
    trustedHeading: "भरोसेमंद स्वास्थ्य वेबसाइट",
    visit: "देखें",
    contactHeading: "संपर्क करें",
    contactIntro: "हम छात्र हैं और यह सामुदायिक सेवा परियोजना कर रहे हैं। सवाल या सुझाव हमें लिखें।",
    contactWhoHeading: "हम कौन हैं",
    contactWho:
      "यह वेबसाइट एक सामुदायिक सेवा परियोजना है, जिससे गाँव और शहर के लोगों को उनकी भाषा में आसान स्वास्थ्य जानकारी मिले।",
    emailUs: "ईमेल करें",
    callHelpline: "मुफ़्त हेल्पलाइन पर कॉल करें",
    nearestCentre: "आपका नज़दीकी स्वास्थ्य केंद्र",
    nearestCentreText:
      "किसी भी बीमारी में गाँव के उप-केंद्र, प्राथमिक स्वास्थ्य केंद्र (PHC) जाएँ या आशा कार्यकर्ता से पूछें। इलाज मुफ़्त है।",
  },
  te: {
    topicsHeading: "అన్ని ఆరోగ్య అంశాలు",
    topicsIntro: "అంశం తెరవడానికి బొమ్మ నొక్కండి. ప్రతి అంశంలో కథ, సులభమైన సూచనలు, చిన్న ప్రశ్నలు ఉన్నాయి.",
    openTopic: "తెరవండి",
    backToTopics: "అన్ని అంశాలకు తిరిగి",
    whyMatters: "ఇది ఎందుకు ముఖ్యం",
    tipsTitle: "మీరు చేయగలిగే సులభమైన పనులు",
    dosTitle: "ఇది చేయండి",
    dontsTitle: "ఇది చేయవద్దు",
    mythTitle: "అపోహలు, నిజాలు",
    myth: "అపోహ",
    fact: "నిజం",
    printPoster: "పోస్టర్ ప్రింట్ / సేవ్ (PDF)",
    posterNote: "ప్రింట్ బటన్‌తో ఈ పేజీని PDF పోస్టర్‌గా సేవ్ చేసి గోడకు అంటించండి.",
    quizHeading: "ఆరోగ్య ప్రశ్నలు",
    quizIntro: "కొన్ని సులభమైన ప్రశ్నలకు సమాధానం చెప్పండి. మార్కులు లేవు, భయం లేదు — నేర్చుకోవడమే.",
    quizTopicQuestion: "అంశం ఎంచుకోండి",
    allTopics: "అన్ని అంశాలు కలిపి",
    startQuiz: "ప్రారంభించండి",
    question: "ప్రశ్న",
    of: "లో",
    nextQuestion: "తర్వాత ప్రశ్న",
    seeResult: "నా ఫలితం చూడండి",
    correct: "సరైనది!",
    wrong: "సరైనది కాదు. సరైన సమాధానం చూపించాం.",
    yourScore: "మీ ఫలితం",
    tryAgain: "మళ్లీ ప్రయత్నించండి",
    goodJob: "చాలా బాగుంది! ఈ సూచనలు కుటుంబంతో పంచుకోండి.",
    keepLearning: "మంచి ప్రయత్నం! అంశం మరోసారి చదివి ప్రయత్నించండి.",
    takeQuiz: "ఈ అంశంపై ప్రశ్నలు చేయండి",
    resourcesHeading: "వనరులు, సహాయ నంబర్లు",
    resourcesIntro: "ఉచిత నంబర్లు, ప్రింట్ చేయగల పోస్టర్లు, నమ్మకమైన వెబ్‌సైట్లు.",
    helplinesHeading: "ఉచిత సహాయ నంబర్లు",
    postersHeading: "ప్రింట్ చేయగల పోస్టర్లు",
    postersIntro: "ఒక అంశం తెరిచి ప్రింట్ బటన్ నొక్కి పోస్టర్‌ను PDFగా సేవ్ చేయండి.",
    trustedHeading: "నమ్మకమైన ఆరోగ్య వెబ్‌సైట్లు",
    visit: "చూడండి",
    contactHeading: "మమ్మల్ని సంప్రదించండి",
    contactIntro: "మేము విద్యార్థులం, ఇది సామాజిక సేవా ప్రాజెక్ట్. మీ ప్రశ్నలు, సూచనలు మాకు రాయండి.",
    contactWhoHeading: "మేము ఎవరం",
    contactWho:
      "ఈ వెబ్‌సైట్ సామాజిక సేవా ప్రాజెక్ట్‌గా తయారైంది — గ్రామాలు, పట్టణాల ప్రజలకు వారి భాషలో సులభమైన ఆరోగ్య సమాచారం అందించడానికి.",
    emailUs: "ఇమెయిల్ చేయండి",
    callHelpline: "ఉచిత సహాయ నంబర్‌కు కాల్ చేయండి",
    nearestCentre: "మీ దగ్గరి ఆరోగ్య కేంద్రం",
    nearestCentreText:
      "ఏ అనారోగ్యానికైనా గ్రామ ఉప కేంద్రం, ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)కి వెళ్లండి లేదా ఆశా కార్యకర్తను అడగండి. చికిత్స ఉచితం.",
  },
};

export function useUi(lang: LangCode): UiStrings {
  return strings[lang];
}

export const UI_STRINGS = strings;
