const palette = [
    "#4e937a", // primary green
    "#2f6f60", // primary dark
    "#a8cbb7", // primary light
    "#d88c60", // terracotta
    "#f5c5aa", // accent light
    "#66736d", // muted text
    "#316654", // deeper green
    "#85c7b0", // soft green
  ];
  
  export function getColorFromWord(word: string): string {
    let hash = 0;
  
    for (let i = 0; i < word.length; i += 1) {
      hash = word.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    const index = Math.abs(hash) % palette.length;
  
    return palette[index];
  }