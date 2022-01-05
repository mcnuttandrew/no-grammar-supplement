export function getRoute() {
  const href = location.href;
  if (!href.includes("#")) {
    return { language: null, file: null };
  }
  const [_, language, file] = href.split("#")[1].split("/");
  return { language, file };
}
