const Instructions = () => {
  return (
    <ul>
      <li>If status is Free or Cleaning, bill and people amount cannot be changed</li>
      <li>If status is Reserved, bill cannot be changed</li>
      <li>Maximum amount of people at the table is 10</li>
      <li>Bill higher then 2000$ should be arranged with manager</li>
    </ul>
  )
}

export default Instructions;