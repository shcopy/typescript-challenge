/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */
export function celsiusToFahrenheit(celsius: number): number {
    // 華氏要換算成攝氏時，要先減32後，再乘以5/9。
    // 攝氏要換算成華氏時，要先乘以9/5，再加上32。
    
    return celsius * (9 / 5) + 32;
}