// ApiService.ts
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Add other API request functions...
}

export default ApiService;
