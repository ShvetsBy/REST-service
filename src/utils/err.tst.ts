export function rejectCheck(): void {
  Promise.reject(Error('oops'));
}

export function exeptioncheck() {
  throw new Error('oops');
}
