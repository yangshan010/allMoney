import React from 'react';
import {Dimensions} from 'react-native';

const getScreenWidth = () => {
  const screen = Dimensions.get('window');
  return screen.width;
};
const getScreenHeight = () => {
  const screen = Dimensions.get('window');
  return screen.height;
};
function countFormat(num) {
  return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}
export {getScreenWidth, countFormat, getScreenHeight};
