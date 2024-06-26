import { LineChartData } from "../components/chart/lineChart/types";
import { PieChartData } from "../components/chart/pieChart/types";

export const recentSearches = ["soccer", "football", "crypto", "israel"];
export const autocompleteDropDown = [
  { id: "top", item: "Top Headlines" },
  { id: "everything", item: "Eeverything" },
];

export const sourceDropDown = [
  { id: "1", item: "source 1" },
  { id: "2", item: "source 2" },
  { id: "3", item: "source 3" },
  { id: "4", item: "source 4" },
];

export const categoryDropDown = [
  { id: "1", item: "Sport" },
  { id: "2", item: "Finance" },
  { id: "3", item: "Entertainment" },
];

export const countryDropDown = [
  { id: "1", item: "Israel" },
  { id: "2", item: "USA" },
  { id: "3", item: "Germany" },
  { id: "4", item: "Netherlands" },
];

export const dropDownsData = [
  { label: "Sources", items: sourceDropDown },
  { label: "Category", items: categoryDropDown },
  { label: "Country", items: countryDropDown },
];

export const handleSearch = (value: string) => {
  console.log(value);
};

export const articlesData = [
  {
    source: {
      id: "1",
      name: "Axios",
    },
    author: "Axios",
    title:
      "What to know about Yulia Navalnaya, widow of Alexei Navalny - Axios",
    description: null,
    url: "https://www.axios.com/2024/02/20/yulia-navalnaya-alexei-navalny-russia-opposition-leader",
    urlToImage: null,
    publishedAt: "2024-02-21T08:17:22Z",
    content: null,
  },
  {
    source: {
      id: "2",
      name: "Fox News",
    },
    author: "Landon Mion",
    title:
      "UK High Court hears arguments in Assange's US extradition case without him present due to health reasons - Fox News",
    description:
      "Julian Assange's hearing in London for his possible final appeal challenging his extradition to the U.S. kicked off on Tuesday, although he was absent from the courtroom.",
    url: "https://www.foxnews.com/world/uk-high-court-arguments-assanges-us-extradition-case-without-him-present-health-reasons",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/assangetruck.png",
    publishedAt: "2024-02-21T07:15:00Z",
    content:
      "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+12836 chars]",
  },
  {
    source: {
      id: "3",
      name: "New York Post",
    },
    author: "Richard Pollina",
    title:
      "Young girl dies after sand hole she was digging with little boy collapses on Florida beach - New York Post ",
    description:
      "We were conducting life-saving techniques to try to bring her pulse back, and it never did recover, and she was pronounced dead at the hospital.",
    url: "https://nypost.com/2024/02/21/us-news/girl-dies-on-florida-beach-after-sand-hole-she-was-digging-with-little-boy-collapses/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2024/02/Hole-HP-gif-1.gif?w=1024",
    publishedAt: "2024-02-21T06:33:00Z",
    content:
      "Distressing footage captured desperate beachgoers using their hands to rescue a young girl who was trapped in a sand hole on a Florida beach before she died on Tuesday. \r\nThe girl, believed to be aro… [+3144 chars]",
  },
  {
    source: {
      id: "4",
      name: "Suntimes.com",
    },
    author: "Georgia Nicols",
    title: "Horoscope for Wednesday, Feb. 21, 2024 - Chicago Sun-Times",
    description: null,
    url: "https://chicago.suntimes.com/horoscopes/2024/02/20/horoscopes-today-wednesday-feb-21-2024",
    urlToImage:
      "https://cst.brightspotcdn.com/dims4/default/7e6923b/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22282522%2FGeorgia_Nicols.jpg",
    publishedAt: "2024-02-21T06:01:00Z",
    content:
      "Moon Alert\r\nAfter 8 a.m. Chicago time, there are no restrictions to shopping or important decisions. The moon is in Leo.\r\nAries (March 21-April 19)\r\nYou might experience challenges with romantic part… [+3787 chars]",
  },
  {
    source: {
      id: "5",
      name: "Axios",
    },
    author: "Axios",
    title:
      "What to know about Yulia Navalnaya, widow of Alexei Navalny - Axios",
    description: null,
    url: "https://www.axios.com/2024/02/20/yulia-navalnaya-alexei-navalny-russia-opposition-leader",
    urlToImage: null,
    publishedAt: "2024-02-21T08:17:22Z",
    content: null,
  },
];

export const pieChartData: PieChartData[] = [
  { name: "NBC", value: 300 },
  { name: "Vulture", value: 200 },
  { name: "CNN", value: 100 },
  { name: "ESPN", value: 300 },
];

export const lineChartData: LineChartData[] = [
  { name: "MAR", value: 30 },
  { name: "APR", value: 20 },
  { name: "MAY", value: 50 },
  { name: "JUN", value: 70 },
  { name: "JUL", value: 60 },
];
