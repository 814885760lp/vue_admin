import {
  request
} from './request';

export function getUserListAjax(params) {
  return request({
    url: 'users',
    params
  })
}

export function userStateChangedAjax(params) {
  return request({
    url: `users/${params.id}/state/${params.mg_state}`
  }, "PUT")
}

export function addUserAjax(params) {
  return request({
    url: 'users',
    params
  }, "POST")
}