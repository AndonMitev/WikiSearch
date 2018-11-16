import { ListViewModel } from './models/list.model';

export function decisionMakerSetTitleToRed(articles: ListViewModel[]) {
  return articles.map((elem, idx) => {
    elem.isRed = idx % 2 === 0;
    return elem;
  });
}

export function decisionMakerSetDisabledOnOddElements (articles: ListViewModel[]) {
  return articles.map((elem, idx) => {
    elem.disabled = idx % 2 !== 0;
    return elem;
  });
}
