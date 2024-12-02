/**
 * Formats a number as a currency string.
 * @param amount - The number to be formatted.
 * @param currency - The currency code (e.g., 'USD', 'EUR'). Default is 'USD'.
 * @param locale - The locale for formatting (e.g., 'en-US', 'de-DE'). Default is 'en-US'.
 * @returns The formatted currency string.
 */
export const formatCurrency = (
    amount: number,
    currency: string = "USD",
    locale: string = "en-US"
): string => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount);
};
