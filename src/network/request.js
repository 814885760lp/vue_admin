import axios from 'axios'

// 封装网络请求第4种
export function request(config, method) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'https://www.liulongbin.top:8888/api/private/v1/',
    timeout: 5000, //设置超时时间
    method
  })

  // axios的请求拦截
  instance.interceptors.request.use(res => {
    res.headers.Authorization = window.sessionStorage.getItem('token')
    return res //拦截操作完成后需要返还请求数据
  }, err => {})

  // // axios的响应拦截
  // instance.interceptors.response.use(res => {
  //   return res.data //拦截操作完成后需要返还响应数据
  // }, err => {})

  //发送网络请求
  return instance(config, method)
}


// // 封装网络请求第3种
// export function request(config) {
//   return new Promise((resolve, reject) => {
//   //创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000/api/h8',
//       timeout: 5000
//     })
//   //发送网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// // 封装网络请求第2种
// export function request(config) {
//   //创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/h8',
//     timeout: 5000
//   })
//   //发送网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }) 
//     .catch(err => {
//       config.failure(err)
//     })
// }


// // 封装网络请求第1种
// export function request(config, success, failure) {
//   //创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/h8',
//     timeout: 5000
//   })
//   //发送网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     }) 
//     .catch(err => {
//       failure(err)
//     })
// }