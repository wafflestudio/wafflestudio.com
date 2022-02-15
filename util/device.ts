export const isMobile = (userAgent?: string) =>
  userAgent?.match(/Android|iP(hone|od|ad)|Kindle/)
