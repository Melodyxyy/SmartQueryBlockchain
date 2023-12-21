// src/utils/helpers.ts
class Helpers {
    static capitalizeFirstLetter(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    static formatCurrency(amount: number): string {
      return `$${amount.toFixed(2)}`;
    }
  
    static formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  
    static truncateText(text: string, maxLength: number): string {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }
  
    static convertToUpperCase(str: string): string {
      return str.toUpperCase();
    }
  
    static convertToLowerCase(str: string): string {
      return str.toLowerCase();
    }
  
    static calculatePercentage(value: number, total: number): number {
      return (value / total) * 100;
    }
  
    // Add more helper functions as needed
  }
  
  export default Helpers;
  