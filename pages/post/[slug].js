import client from '../../client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Post = ({ post }) => {
  console.log(post)
  return (
    // <article>
    //   <h1>{post?.slug?.current}</h1>
    // </article>
    <>
      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center" >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Blog Details</h2>
                  <p>These blogs are to increase your economic knowledge of current affair and basics of economics.</p>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><a href="/">Home</a></li>
                <li>Blog Details</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* <!-- End Breadcrumbs --> */}


        {/* <!-- ======= Blog Details Section ======= --> */}
        <section id="blog" className="blog bg-light">
          <div className="container aos-init aos-animate" data-aos="fade-up">

            <div className="row g-5">

              <div className="col-lg-8">

                <article className="blog-details">

                  <div className="post-img">
                    <img src="/assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                  </div>

                {/* post title  */}
                  <h2 className="title">{post?.title}</h2>

                  <div className="meta-top">
                    <ul >
                      <li className="d-flex align-items-center"><i className="bi bi-person"></i> Mr. XYZ</li>
                      <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <time dateTime="2020-01-01">{post?.publishedAt}</time></li>
                      <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> 12 Comments</li>
                    </ul>
                  </div>
                  {/* <!-- End meta top --> */}

                  <div className="content text-black">
                    <p>
                      {post?.body[0]?.children[0]?.text}
                    </p>
                  </div>
                  {/* <!-- End post content --> */}

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Business</a></li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Tips</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div>
                  {/* <!-- End meta bottom --> */}

                </article>
                {/* <!-- End blog post --> */}

                <div className="post-author d-flex align-items-center">
                  <img src="/assets/img/blog/blog-author.jpg" className="rounded-circle flex-shrink-0" alt="" />
                  <div>
                    <h4>Jane Smith</h4>
                    <div className="social-links">
                      <a href="https://twitters.com/#"><i className="bi bi-twitter"></i></a>
                      <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                      <a href="https://instagram.com/#"><i className="biu bi-instagram"></i></a>
                    </div>
                    <p>
                      Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                    </p>
                  </div>
                </div>
                {/* <!-- End post author --> */}

                <div className="comments">

                  <h4 className="comments-count">8 Comments</h4>

                  <div id="comment-1" className="comment">
                    <div className="d-flex">
                      <div className="comment-img"><img src="/assets/img/blog/comments-1.jpg" alt="" /></div>
                      <div className='text-dark'>
                        <h5><a href="">Georgia Reader</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                        <time dateTime="2020-01-01">01 Jan,2022</time>
                        <p>
                          Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                          Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End comment #1 --> */}


                  <div className="reply-form text-dark">

                    <h4 >Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <form action="">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col form-group">
                          <input name="website" type="text" className="form-control" placeholder="Your Website" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col form-group">
                          <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">Post Comment</button>

                    </form>

                  </div>

                </div>
                {/* <!-- End blog comments --> */}

              </div>

              <div className="col-lg-4">

                <div className="sidebar">

                  <div className="sidebar-item search-form">
                    <h3 className="sidebar-title">Search</h3>
                    <form action="" className="mt-3">
                      <input type="text" className='bg-white' />
                      <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                  {/* <!-- End sidebar search formn--> */}

                  <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      <li><a href="#">General Knowledge <span>(25)</span></a></li>
                      <li><a href="#">Current Affairs <span>(12)</span></a></li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}

                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">Recent Posts</h3>

                    <div className="mt-3">

                      <div className="post-item mt-3">
                        <img src="/assets/img/blog/blog-recent-1.jpg" alt="" />
                        <div>
                          <h4><a href="blog-details.html">Nihil blanditiis at in nihil autem</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <img src="/assets/img/blog/blog-recent-5.jpg" alt="" />
                        <div>
                          <h4><a href="blog-details.html">Et dolores corrupti quae illo quod dolor</a></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                    </div>

                  </div>
                  {/* <!-- End sidebar recent posts--> */}

                  <div className="sidebar-item tags">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="mt-3">
                      <li><a href="#">Economics</a></li>
                      <li><a href="#">CUET</a></li>
                      <li><a href="#">Business</a></li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar tags--> */}

                </div>
                {/* <!-- End Blog Sidebar --> */}

              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Blog Details Section --> */}


      </main>
      {/* <!-- End #main --> */}

      <Footer />

    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post