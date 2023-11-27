// 1-block-scoped.js
/* use const instead of var */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskUpdated = true;
    const task2Updated = false; 
  }

  return [task, task2];
}
