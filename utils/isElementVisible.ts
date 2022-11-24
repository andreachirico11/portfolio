export function getIsVisible(heightToShowElement: number) {
  return (current: HTMLElement) => {
    const elementTop = current.getBoundingClientRect().top;
    return elementTop < window.innerHeight - heightToShowElement;
  };
}
