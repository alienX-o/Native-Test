// src/services/apiService.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  baseURL: '', // or Config.API_BASE_URL if using react-native-config
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// helper to attach token
const attachToken = async (config, useToken = true) => {
  if (useToken) {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    } catch (error) {
      console.error('Error reading token:', error);
    }
  }
  return config;
};

// GET
const getReq = async (url, useToken = true, config = {}) => {
  const finalConfig = await attachToken(config, useToken);
  return API.get(url, finalConfig);
};

// POST
const postReq = async (url, data = {}, useToken = true, config = {}) => {
  const finalConfig = await attachToken(config, useToken);
  return API.post(url, data, finalConfig);
};

// PUT
const putReq = async (url, data = {}, useToken = true, config = {}) => {
  const finalConfig = await attachToken(config, useToken);
  return API.put(url, data, finalConfig);
};

// DELETE
const deleteReq = async (url, useToken = true, config = {}) => {
  const finalConfig = await attachToken(config, useToken);
  return API.delete(url, finalConfig);
};

export {getReq, postReq, putReq, deleteReq};
