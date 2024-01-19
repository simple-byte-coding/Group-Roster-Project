import { useState } from 'react';

/**
 * Component to display the slider for each days available items and.
 * 
 * Parent: 
 * Location: Home Page
 * Child: ScheduleCard(s)
 * 
 * State/Props: 
 * - Filter Mode --> The design docs show a grid or slider option.
 * - Date (?) --> We can prob have it figure out current date without state but might need it. It'll affect how we display the cards (what order). I assume we want it to show the available roster for the current date and not always start on Monday.
 * - CardsList --> maybe have the list of cards kept in state here for display
 * 
 */

export default function ScheduleSlider({ filterModeState, currentDate, cardsList }) { // TODO Change this prop once we have our data model figured out

  return (
    <>
      { /* TODO Add ScheduleSlider JSX */}
    </>
  );
}