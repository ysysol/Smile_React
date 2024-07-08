// src/services/authService.ts

// import mockUsers from '../services/mockUsers';

// export const login = async (email: string, password: string) => {
//   const user = mockUsers.find((user) => user.email === email && user.password === password);
//   if (!user) {
//     throw new Error('Invalid email or password');
//   }
  
//   // Simulate storing a token (for the sake of the example, we'll just store a mock token)
//   localStorage.setItem('token', 'mock-token');
// };

// export const getCurrentUser = () => {
//   const token = localStorage.getItem('token');
//   if (!token) return null;

//   // For simplicity, we'll just return a mock user object if a token is present
//   return { token };
// };

// export const logout = () => {
//   localStorage.removeItem('token');
// };




// // src/services/authService.ts
// import axios from 'axios';

// const API_URL = 'https://localhost:7024/api/Auth';

// export const login = async (username: string, password: string) => {
//     const response = await axios.post(`${API_URL}/login`, { username, password });
//     console.log('thisi s response:' + response )
//     if (response.data.token) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//     }
//     return response.data;
// };

// export const logout = () => {
//     localStorage.removeItem('user');
// };

// export const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem('user') || '{}');
// };

// src/services/authService.ts
interface User {
    token: string | null;
  }
  
  export const getCurrentUser = (): User => {
    // Mock implementation for demonstration
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : { token: null };
  };
  
  export const login = (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (email === '654' && password === '654') {
        localStorage.setItem('user', JSON.stringify({ token: 'mock-token' }));
        resolve();
      } else {
        reject('Invalid credentials');
      }
    });
  };
  
  export const logout = (): void => {
    localStorage.removeItem('user');
  };
  