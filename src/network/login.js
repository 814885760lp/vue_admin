import {
  request
} from './request';

export function login(params) {
  return request({
    url: 'login',
    params
  })
}

export function getMenuList() {
  return request({
    url: 'menus'
  })
}