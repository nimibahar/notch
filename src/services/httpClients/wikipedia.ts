import HttpClient from './base';

class WikipediaApi extends HttpClient {
  public constructor(articleName: string, languageHeader: string) {
    super(`https://${languageHeader}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=${articleName}`);
  }

  public getArticle = () => this.instance.get('');
}

export default WikipediaApi;