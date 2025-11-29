import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Get Started": "Get Started",
            "Log in": "Log in",
            "Features": "Features",
            "About": "About",
            "Contact": "Contact",
            "Manage Your School with": "Manage Your School with",
            "Confidence": "Confidence",
            "Platform Initialized": "Platform Initialized",
            "Find Schools": "Find Schools",
            "Filters": "Filters",
            "City": "City",
            "Board": "Board",
            "Max Budget (Fees)": "Max Budget (Fees)",
            "Apply Filters": "Apply Filters",
            "View Details": "View Details",
            "Fees": "Fees",
            "Language": "Language",
            "Chatbot": {
                "Title": "EduDistrict Assistant",
                "Subtitle": "Online",
                "Placeholder": "Type a message...",
                "Thinking": "Thinking...",
                "Welcome": "Hello! I'm your EduDistrict Assistant. How can I help you today?",
                "QuickActions": "Quick Actions",
                "ClearHistory": "Clear History",
                "Error": "Something went wrong. Please try again."
            }
        }
    },
    hi: {
        translation: {
            "Get Started": "शुरू करें",
            "Log in": "लॉग इन करें",
            "Features": "विशेषताएं",
            "About": "हमारे बारे में",
            "Contact": "संपर्क करें",
            "Manage Your School with": "अपने स्कूल का प्रबंधन करें",
            "Confidence": "आत्मविश्वास के साथ",
            "Platform Initialized": "प्लेटफ़ॉर्म प्रारंभ किया गया",
            "Find Schools": "स्कूल खोजें",
            "Filters": "फिल्टर",
            "City": "शहर",
            "Board": "बोर्ड",
            "Max Budget (Fees)": "अधिकतम बजट (फीस)",
            "Apply Filters": "फिल्टर लागू करें",
            "View Details": "विवरण देखें",
            "Fees": "फीस",
            "Language": "भाषा",
            "Chatbot": {
                "Title": "EduDistrict सहायक",
                "Subtitle": "ऑनलाइन",
                "Placeholder": "एक संदेश लिखें...",
                "Thinking": "सोच रहा हूँ...",
                "Welcome": "नमस्ते! मैं आपका EduDistrict सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
                "QuickActions": "त्वरित कार्रवाई",
                "ClearHistory": "इतिहास मिटाएं",
                "Error": "कुछ गलत हो गया। कृपया पुनः प्रयास करें।"
            }
        }
    },
    mr: {
        translation: {
            "Get Started": "सुरु करा",
            "Log in": "लॉग इन करा",
            "Features": "वैशिष्ट्ये",
            "About": "आमच्याबद्दल",
            "Contact": "संपर्क साधा",
            "Manage Your School with": "आपल्या शाळेचे व्यवस्थापन करा",
            "Confidence": "आत्मविश्वासाने",
            "Platform Initialized": "प्लॅटफॉर्म सुरू झाले",
            "Find Schools": "शाळा शोधा",
            "Filters": "फिल्टर",
            "City": "शहर",
            "Board": "बोर्ड",
            "Max Budget (Fees)": "जास्तीत जास्त बजेट (फी)",
            "Apply Filters": "फिल्टर लागू करा",
            "View Details": "तपशील पहा",
            "Fees": "फी",
            "Language": "भाषा",
            "Chatbot": {
                "Title": "EduDistrict सहाय्यक",
                "Subtitle": "ऑनलाइन",
                "Placeholder": "संदेश टाइप करा...",
                "Thinking": "विचार करत आहे...",
                "Welcome": "नमस्कार! मी आपला EduDistrict सहाय्यक आहे. आज मी तुम्हाला कशी मदत करू शकतो?",
                "QuickActions": "द्रुत क्रिया",
                "ClearHistory": "इतिहास पुसून टाका",
                "Error": "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
            }
        }
    },
    ta: {
        translation: {
            "Get Started": "தொடங்குங்கள்",
            "Log in": "உள்நுழைய",
            "Features": "அம்சங்கள்",
            "About": "எங்களை பற்றி",
            "Contact": "தொடர்பு கொள்ள",
            "Manage Your School with": "உங்கள் பள்ளியை நிர்வகிக்கவும்",
            "Confidence": "நம்பிக்கையுடன்",
            "Platform Initialized": "தளம் தொடங்கப்பட்டது",
            "Find Schools": "பள்ளிகளைத் தேடுங்கள்",
            "Filters": "வடிப்பான்கள்",
            "City": "நகரம்",
            "Board": "வாரியம்",
            "Max Budget (Fees)": "அதிகபட்ச பட்ஜெட் (கட்டணம்)",
            "Apply Filters": "வடிப்பான்களைப் பயன்படுத்துங்கள்",
            "View Details": "விவரங்களைப் பார்க்கவும்",
            "Fees": "கட்டணம்",
            "Language": "மொழி",
            "Chatbot": {
                "Title": "EduDistrict உதவியாளர்",
                "Subtitle": "ஆன்லைன்",
                "Placeholder": "ஒரு செய்தியை தட்டச்சு செய்யவும்...",
                "Thinking": "சி சிந்திக்கிறது...",
                "Welcome": "வணக்கம்! நான் உங்கள் EduDistrict உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
                "QuickActions": "விரைவான செயல்கள்",
                "ClearHistory": "வரலாற்றை அழி",
                "Error": "ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சிக்கவும்."
            }
        }
    },
    te: {
        translation: {
            "Get Started": "ప్రారంభించండి",
            "Log in": "లాగిన్ చేయండి",
            "Features": "లక్షణాలు",
            "About": "మా గురించి",
            "Contact": "సంప్రదించండి",
            "Manage Your School with": "మీ పాఠశాలను నిర్వహించండి",
            "Confidence": "నమ్మకంతో",
            "Platform Initialized": "ప్లాట్‌ఫారమ్ ప్రారంభించబడింది",
            "Find Schools": "పాఠశాలలను కనుగొనండి",
            "Filters": "ఫిల్టర్లు",
            "City": "నగరం",
            "Board": "బోర్డు",
            "Max Budget (Fees)": "గరిష్ట బడ్జెట్ (ఫీజు)",
            "Apply Filters": "ఫిల్టర్లను వర్తింపజేయండి",
            "View Details": "వివరాలను చూడండి",
            "Fees": "ఫీజు",
            "Language": "భాష",
            "Chatbot": {
                "Title": "EduDistrict అసిస్టెంట్",
                "Subtitle": "ఆన్‌లైన్",
                "Placeholder": "సందేశాన్ని టైప్ చేయండి...",
                "Thinking": "ఆలోచిస్తోంది...",
                "Welcome": "హలో! నేను మీ EduDistrict అసిస్టెంట్‌ని. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
                "QuickActions": "త్వరిత చర్యలు",
                "ClearHistory": "చరిత్రను క్లియర్ చేయండి",
                "Error": "ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
