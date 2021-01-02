import axios from "axios";

//promise的方式
export function request(config){
  return new Promise((resolve, reject) => {
    //1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    //2.1 请求拦截器的使用
    instance.interceptors.request.use(
      config => {
        // console.log(config);
        //记得返回config
        return config
      },
      error => {
        console.log(error);
      }
    )

    //2.2 响应拦截器的使用
    instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        console.log(err);
      }
    )

    //3.发送网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })

}
