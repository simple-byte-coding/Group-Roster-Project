import { useState } from 'react';

/**
 * Component to display the header with (from left to right) logo, navlinks, and login/profile button.
 * 
 * Parent: N/A
 * Location: All Pages
 * 
 * State/Props: 
 * - User info --> if logged in, we want to display a little user cookie instead of the login button
 * - User Authentication State --> Is the user logged in? If not, we want to show a login button. If so, display a userpic or profile nav link.
 * 
 */

export default function Header({ userAuthenticationState }) { // TODO Change this prop once we have our data model figured out
  
  return (
    <header>
     { /* TODO Add Header JSX */ }
    </header>
  );
}