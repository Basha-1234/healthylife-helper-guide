import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LangCode = "en" | "hi" | "te";

export const LANGUAGES: { code: LangCode; label: string; native: string; speech: string }[] = [
  { code: "en", label: "English", native: "English", speech: "en-IN" },
  { code: "hi", label: "Hindi", native: "हिंदी", speech: "hi-IN" },
  { code: "te", label: "Telugu", native: "తెలుగు", speech: "te-IN" },
];

export type CategoryId = "hygiene" | "mosquito" | "nutrition" | "mind" | "disease" | "women";

type Dict = {
  siteName: string;
  tagline: string;
  nav: { home: string; topics: string; quiz: string; resources: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaTopics: string;
    ctaQuiz: string;
  };
  searchLabel: string;
  searchPlaceholder: string;
  noResults: string;
  topicsTitle: string;
  topicsText: string;
  tipTitle: string;
  nextTip: string;
  tips: string[];
  categories: Record<CategoryId, { title: string; desc: string }>;
  readAloud: string;
  stopReading: string;
  languageLabel: string;
  comingSoon: string;
  comingSoonText: string;
  footer: {
    helpline: string;
    helplineText: string;
    ambulance: string;
    healthHelpline: string;
    mentalHelpline: string;
    resources: string;
    credits: string;
  };
};

const en: Dict = {
  siteName: "Health Awareness",
  tagline: "A Healthy Family, A Happy Family",
  nav: { home: "Home", topics: "Topics", quiz: "Quiz", resources: "Resources", contact: "Contact" },
  hero: {
    eyebrow: "A Community Service Project",
    title: "A Healthy Family, A Happy Family",
    text: "Simple health tips for your home and village. Easy words. Clear pictures. Free for everyone.",
    ctaTopics: "See all topics",
    ctaQuiz: "Test your knowledge",
  },
  searchLabel: "Search a topic",
  searchPlaceholder: "Type here. Example: water, mosquito, food",
  noResults: "Nothing found. Please try another word.",
  topicsTitle: "Choose a topic",
  topicsText: "Tap any picture to learn more.",
  tipTitle: "Health tip of the day",
  nextTip: "Show another tip",
  tips: [
    "Wash your hands with soap before you eat.",
    "Keep all water pots and drums covered.",
    "Drink boiled or filtered water every day.",
    "Eat one fruit and green vegetables daily.",
    "Sleep 7 to 8 hours every night.",
    "Talk to a friend or family member when you feel sad.",
    "Throw away water collected in tyres, pots and coolers.",
  ],
  categories: {
    hygiene: { title: "Personal Hygiene", desc: "Wash hands, use soap, drink safe water." },
    mosquito: { title: "Mosquito Safety", desc: "Stop stagnant water. Stay safe from dengue." },
    nutrition: { title: "Good Food", desc: "Eat more fruits and vegetables. Eat less junk." },
    mind: { title: "Mind & Peace", desc: "Rest well, talk to someone, stay calm." },
    disease: { title: "Know About Diseases", desc: "Simple facts. No fear. No shame." },
    women: { title: "Women & Family", desc: "Care for mothers, babies and young girls." },
  },
  readAloud: "Read aloud",
  stopReading: "Stop reading",
  languageLabel: "Language",
  comingSoon: "Coming soon",
  comingSoonText: "This page is being prepared. Please visit the home page.",
  footer: {
    helpline: "Helpline numbers",
    helplineText: "Free calls. Any time, any day.",
    ambulance: "Ambulance: 108",
    healthHelpline: "Health helpline: 104",
    mentalHelpline: "Mental health (Tele-MANAS): 14416",
    resources: "Trusted health information",
    credits: "A Community Service Project by [Your Name / College]",
  },
};

const hi: Dict = {
  siteName: "स्वास्थ्य जागरूकता",
  tagline: "स्वस्थ परिवार, खुश परिवार",
  nav: { home: "होम", topics: "विषय", quiz: "सवाल-जवाब", resources: "साधन", contact: "संपर्क" },
  hero: {
    eyebrow: "एक सामुदायिक सेवा परियोजना",
    title: "स्वस्थ परिवार, खुश परिवार",
    text: "आपके घर और गाँव के लिए आसान स्वास्थ्य सलाह। सरल शब्द। साफ़ चित्र। सबके लिए मुफ़्त।",
    ctaTopics: "सभी विषय देखें",
    ctaQuiz: "अपना ज्ञान जांचें",
  },
  searchLabel: "विषय खोजें",
  searchPlaceholder: "यहाँ लिखें। जैसे: पानी, मच्छर, खाना",
  noResults: "कुछ नहीं मिला। दूसरा शब्द लिखें।",
  topicsTitle: "विषय चुनें",
  topicsText: "अधिक जानने के लिए चित्र पर दबाएँ।",
  tipTitle: "आज की स्वास्थ्य सलाह",
  nextTip: "दूसरी सलाह देखें",
  tips: [
    "खाने से पहले साबुन से हाथ धोएँ।",
    "पानी के बर्तन और ड्रम ढककर रखें।",
    "हर दिन उबला या छना पानी पीएँ।",
    "रोज़ एक फल और हरी सब्ज़ी खाएँ।",
    "हर रात 7 से 8 घंटे सोएँ।",
    "मन दुखी हो तो किसी अपने से बात करें।",
    "टायर, गमले और कूलर का जमा पानी फेंक दें।",
  ],
  categories: {
    hygiene: { title: "साफ़-सफ़ाई", desc: "हाथ धोएँ, साबुन लगाएँ, साफ़ पानी पीएँ।" },
    mosquito: { title: "मच्छर से बचाव", desc: "पानी जमा न होने दें। डेंगू से बचें।" },
    nutrition: { title: "अच्छा खाना", desc: "फल-सब्ज़ी ज़्यादा, जंक फूड कम।" },
    mind: { title: "मन की शांति", desc: "आराम करें, बात करें, शांत रहें।" },
    disease: { title: "बीमारी की जानकारी", desc: "सही बात। कोई डर नहीं, कोई शर्म नहीं।" },
    women: { title: "महिला व परिवार", desc: "माँ, बच्चे और बेटियों की देखभाल।" },
  },
  readAloud: "पढ़कर सुनाएँ",
  stopReading: "पढ़ना रोकें",
  languageLabel: "भाषा",
  comingSoon: "जल्दी आ रहा है",
  comingSoonText: "यह पेज तैयार हो रहा है। कृपया होम पेज देखें।",
  footer: {
    helpline: "हेल्पलाइन नंबर",
    helplineText: "मुफ़्त कॉल। किसी भी समय।",
    ambulance: "एम्बुलेंस: 108",
    healthHelpline: "स्वास्थ्य हेल्पलाइन: 104",
    mentalHelpline: "मानसिक स्वास्थ्य (टेली-मानस): 14416",
    resources: "भरोसेमंद स्वास्थ्य जानकारी",
    credits: "[आपका नाम / कॉलेज] द्वारा सामुदायिक सेवा परियोजना",
  },
};

const te: Dict = {
  siteName: "ఆరోగ్య అవగాహన",
  tagline: "ఆరోగ్యమైన కుటుంబం, సంతోషమైన కుటుంబం",
  nav: { home: "హోమ్", topics: "అంశాలు", quiz: "ప్రశ్నలు", resources: "వనరులు", contact: "సంప్రదించండి" },
  hero: {
    eyebrow: "సామాజిక సేవా ప్రాజెక్ట్",
    title: "ఆరోగ్యమైన కుటుంబం, సంతోషమైన కుటుంబం",
    text: "మీ ఇంటికి, ఊరికి సులభమైన ఆరోగ్య సూచనలు. తేలికైన మాటలు. స్పష్టమైన బొమ్మలు. అందరికీ ఉచితం.",
    ctaTopics: "అన్ని అంశాలు చూడండి",
    ctaQuiz: "మీ జ్ఞానం పరీక్షించండి",
  },
  searchLabel: "అంశం వెతకండి",
  searchPlaceholder: "ఇక్కడ రాయండి. ఉదా: నీరు, దోమ, ఆహారం",
  noResults: "ఏమీ దొరకలేదు. మరో పదం రాయండి.",
  topicsTitle: "అంశం ఎంచుకోండి",
  topicsText: "మరింత తెలుసుకోవడానికి బొమ్మను నొక్కండి.",
  tipTitle: "ఈ రోజు ఆరోగ్య సూచన",
  nextTip: "మరో సూచన చూడండి",
  tips: [
    "తినే ముందు సబ్బుతో చేతులు కడుక్కోండి.",
    "నీటి కుండలు, డ్రమ్ములు మూత పెట్టండి.",
    "ప్రతి రోజు కాచిన లేదా వడపోసిన నీరు తాగండి.",
    "రోజూ ఒక పండు, ఆకుకూరలు తినండి.",
    "ప్రతి రాత్రి 7 నుండి 8 గంటలు నిద్రపోండి.",
    "బాధగా ఉన్నప్పుడు దగ్గరి వారితో మాట్లాడండి.",
    "టైర్లు, కుండలు, కూలర్లలో నిల్వ నీరు పారబోయండి.",
  ],
  categories: {
    hygiene: { title: "వ్యక్తిగత శుభ్రత", desc: "చేతులు కడగండి, సబ్బు వాడండి, శుభ్రమైన నీరు తాగండి." },
    mosquito: { title: "దోమల నివారణ", desc: "నీరు నిల్వ ఉండకూడదు. డెంగీ నుండి రక్షణ." },
    nutrition: { title: "మంచి ఆహారం", desc: "పండ్లు, కూరగాయలు ఎక్కువ. జంక్ ఫుడ్ తక్కువ." },
    mind: { title: "మనశ్శాంతి", desc: "విశ్రాంతి, మాట్లాడటం, ప్రశాంతత." },
    disease: { title: "వ్యాధుల అవగాహన", desc: "నిజమైన సమాచారం. భయం లేదు, సిగ్గు లేదు." },
    women: { title: "మహిళలు & కుటుంబం", desc: "తల్లులు, పిల్లలు, ఆడపిల్లల సంరక్షణ." },
  },
  readAloud: "చదివి వినిపించు",
  stopReading: "చదవడం ఆపు",
  languageLabel: "భాష",
  comingSoon: "త్వరలో వస్తుంది",
  comingSoonText: "ఈ పేజీ సిద్ధమవుతోంది. దయచేసి హోమ్ పేజీ చూడండి.",
  footer: {
    helpline: "సహాయ నంబర్లు",
    helplineText: "ఉచిత కాల్. ఎప్పుడైనా.",
    ambulance: "అంబులెన్స్: 108",
    healthHelpline: "ఆరోగ్య సహాయం: 104",
    mentalHelpline: "మానసిక ఆరోగ్యం (టెలి-మానస్): 14416",
    resources: "నమ్మకమైన ఆరోగ్య సమాచారం",
    credits: "[మీ పేరు / కళాశాల] చేపట్టిన సామాజిక సేవా ప్రాజెక్ట్",
  },
};

const DICTS: Record<LangCode, Dict> = { en, hi, te };

const STORAGE_KEY = "health-awareness-lang";

type Ctx = { lang: LangCode; setLang: (l: LangCode) => void; t: Dict; speechLocale: string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
      if (saved && saved in DICTS) setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: DICTS[lang],
      speechLocale: LANGUAGES.find((l) => l.code === lang)?.speech ?? "en-IN",
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
