export const tileColors = [
  '#FF3E00', // Svelte orange
  '#9c40ff', // Purple from gradient
  '#FF6B81', // Soft pink
  '#4A90E2', // Blue
  '#50E3C2', // Teal
  '#F7B731', // Yellow
  '#A8E6CF'  // Mint
];

export function getRandomTileColor(): string {
  const randomIndex = Math.floor(Math.random() * tileColors.length);
  return tileColors[randomIndex];
}