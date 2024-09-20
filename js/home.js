const blogSection = document.querySelector(".blogs-section");

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/").pop())) {
        createBlog(blog);
      }
    });
  });

const createBlog = (blog) => {
  let data = blog.data();
  let title = data.title.substring(0, 100);
  let article = data.article.substring(0, 200);
  blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${title + "..."}</h1>
        <p class="blog-overview">${article + "..."}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
};
