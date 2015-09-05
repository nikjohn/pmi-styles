// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

import Header from '../_modules/header/header';
import Nav from '../_modules/nav/nav';
import Banner from '../_modules/banner/banner';
import Hero from '../_modules/hero/hero';
import List from '../_modules/list/list';

import Link from '../_modules/link/link';
import Image from '../_modules/image/image';
import Button from '../_modules/button/button';
import Input from '../_modules/input/input';



$(() => {
  new Header(); // Activate Header modules logic
  new Nav(); // Activate Nav modules logic
  new Banner(); // Activate Banner modules logic
  new Hero(); // Activate Hero modules logic
  new List(); // Activate List modules logic

  new Link(); // Activate Link modules logic
  new Image(); // Activate Image modules logic
  new Button(); // Activate Button modules logic
  new Input(); // Activate Input modules logic
  console.log('Welcome to Papa Murphy\'s!');
});
