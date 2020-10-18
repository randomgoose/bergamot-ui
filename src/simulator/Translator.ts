export class Translator {
    originLanguage: string;
    targetLanguage: string;

    constructor(originLanague: string, targetLanguage: string) {
        this.originLanguage = "English";
        this.targetLanguage = "German";
    }

    translate(text: string) {
        return text
    }

    getOriginLanguage() {
        return this.originLanguage;
    }

    getTargetLanguage() {
        return this.targetLanguage;
    }

    setOriginLanguage(language: string) {
        this.originLanguage = language;
    }

    setTargetLanguage(language: string) {
        this.targetLanguage = language;
    }
}