import { StringBuilder } from './classes/StringBuilder';

export function wordCount(str: string): number {
    const stringBuilder = new StringBuilder(str);

    return stringBuilder.wordCount();
}

export function getCharacterEditDistance(str1: string, str2: string): number {
    const stringBuilder = new StringBuilder(str1);

    return stringBuilder.characterEditDistance(str2);
}
