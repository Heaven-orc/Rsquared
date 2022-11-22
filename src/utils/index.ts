export const maxTextLength = (text: string, maxSymbols: number) => {
    const textlength = text.length

    return textlength > maxSymbols ? `${text.substring(0, maxSymbols)}....`  : text
}
export const getDeviceType = (UA: string) => {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(UA)) {
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(UA)) {
        return "mobile";
    }
    return "desktop";
};