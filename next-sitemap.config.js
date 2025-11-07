/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.soicompany.com", // 실제 도메인 (www 포함!)
  generateRobotsTxt: false, // robots.txt 자동 생성 (이미 있다면 false로 해도 됨)
  sitemapSize: 7000, // (선택)
  changefreq: "weekly",
  priority: 0.7,
};
