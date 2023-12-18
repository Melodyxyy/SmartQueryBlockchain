// src/services/ApiService.ts

// 用于处理 API 请求的基本函数
class ApiService {
    // 示例：获取数据的异步函数
    static async fetchData(url: string): Promise<any> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  
    // 添加其他 API 请求函数...
  }
  
  export default ApiService;
  