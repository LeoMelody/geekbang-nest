export const Sleep = function(sleepNum: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sleepNum);
  });
};
