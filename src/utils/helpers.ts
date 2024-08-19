export { getDynamicUrl };

function getDynamicUrl(base: string, pathname: string) {
  return "/" + base + "/" + pathname;
}
