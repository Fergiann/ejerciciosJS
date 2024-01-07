const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


const input$$ = document.querySelector('input')

const toFilterStreamers = (e) => {

  const inputValue = e.target.value.toLowerCase();
  
  const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
  console.log(filteredStreamers);
}


input$$.addEventListener('input', toFilterStreamers);
