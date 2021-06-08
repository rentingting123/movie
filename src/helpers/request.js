export default async function (path, opt) {
    const url = 'https://www.fastmock.site/mock/1b76bbd7d9f9ab0181e8c37fee192e95/movie' + path;
    const options = Object.assign({
      method: 'GET',
    }, opt);
  
    try {
      const response = await fetch(url, options);
      const { data, status } = await response.json();
  
      if (status === 0) {
        return data;
      } else {
        // 错误处理
      }
    } catch (e) {
      // 错误处理
      // 提示/弹窗
    }
  
  }
  