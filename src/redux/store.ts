import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TranslationState {
    sourceLanguage: string;
    targetLanguage: string;
    inboundTranslationLanguage: "sourceLanguage" | "targetLanguage";
}


const initialState: TranslationState = {
    sourceLanguage: "english",
    targetLanguage: "german",
    inboundTranslationLanguage: "sourceLanguage"
}


export const translatorSlice = createSlice({
    name: "translator",
    initialState,
    reducers: {
        setSourceLanguage: (state, action: PayloadAction<string>) => {
            return { ...state, sourceLanguage: action.payload }
        },
        setTargetLanguage: (state, action: PayloadAction<string>) => {
            return { ...state, targetLanguage: action.payload }
        },
        switchInboundTranslationLanguage: (state, action: PayloadAction<string>) => {
            return { ...state, inboundTranslationLanguage: action.payload === "sourceLanguage" ? "sourceLanguage" : "targetLanguage"}
        }
    }
});

export type TranslatorState = ReturnType<typeof translatorSlice.reducer>

export const store = configureStore({
    reducer: translatorSlice.reducer
})