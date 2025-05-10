function generateRandomName() {
    const firstNames = ["John", "Jane", "Alex", "Chris", "Sam", "Taylor", "Jordan", "Riley", "Casey", "Morgan"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
  
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirst} ${randomLast}`;
  }
  
 export default generateRandomName