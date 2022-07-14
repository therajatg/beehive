export const sortPosts = (posts) => {
  let newOrder = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return newOrder;
};
