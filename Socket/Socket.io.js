import { io } from 'socket.io-client';
import { BaseUrl } from '../Services/API_endPoint.js'; // Adjust the path

let socket = null;

// Initialize the socket connection
export const initSocket = (userId) => {
  if (!socket) {
    socket = io(BaseUrl);

    // Emit userId to the server
    if (userId) {
      socket.emit('AddUserSocket', userId);
    }

    // Handle socket events
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      socket = null;
    });
  }
  return socket;
};

// Get the existing socket instance
export const getSocket = () => {
  if (!socket) {
    console.error('Socket not initialized. Call initSocket() first.');
  }
  return socket;
};

// Disconnect the socket
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log('Socket connection closed.');
    socket = null;
  }
};