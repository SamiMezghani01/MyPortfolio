export let lang = localStorage.getItem("lang") || "en";

export function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem("lang", newLang);
  window.location.reload();   // reload page to apply
}
