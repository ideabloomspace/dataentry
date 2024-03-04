import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    debugger: true,
    lng: "hi",
    resources: {
        en: {
            translation: {
                dataentry: "Data Entry",
                name: "Name",
                lastname: "Last Name",
                address: "Address",
                city: "City",
                state: "State",
                zipcode: "Pin Code",
                submit: "Register Compalint",
                phone: "Complaint Phone",
                complaint: "Complaint",
                officephone: "Officer Phone",
                successresponse: "",
            },
        },
        hi: {
            translation: {
                dataentry: "डाटा एंट्री",
                name: "नाम",
                lastname: "कुलनाम",
                address: "पता",
                city: "शहर",
                state: "राज्य",
                zipcode: "पिनकोड",
                submit: "शिकायत दर्ज करे",
                phone: "शिकायतकर्ता फ़ोन नंबर",
                complaint: "शिकायत",
                officephone: "अफ़सर फ़ोन नंबर",
                successresponse: "शिकायत दर्ज हो चुकी है",
            },
        }
    }

})