const WORDPRESS_UPLOADS_BASE_URL =
  "https://perupowerhouse.com/wp-content/uploads";

export const getWordPressImageUrl = (path: string) =>
  `${WORDPRESS_UPLOADS_BASE_URL}/${path.replace(/^\//, "")}`;
