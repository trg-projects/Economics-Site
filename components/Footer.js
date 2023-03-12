import React from 'react'

function Footer() {
  return (
    <>
        
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" className="footer" >

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span>Ekonopro</span>
                </a>
                <p>The ultimate purpose of learning economics, offcourse is to understand and promote enhancement of well-being</p>
                <div className="social-links d-flex mt-4">
                  <a href="https://twitter.com/ekonopro?t=D9rgARBNIXkw77PzW2BUXA&s=09" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100087708252044&is_tour_dismissed=true" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/ekonopro/" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/econo-pro-068a95256/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#about">About us</a></li>
                  {/* <li><a href="#">Services</a></li> */}
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#about">Interactive Learning</a></li>
                  <li><a href="#about">Lesson Plans and Curriculum Resources</a></li>
                  <li><a href="#about">News Analyse</a></li>
                  <li><a href="#about">Career Information</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> <a href='tel:+1 55895548855'>+1 5589 55488 55</a> <br />
                  <strong>Email:</strong> <a href='mailto:econopro@gmail.com'>econopro@gmail.com</a> <br />
                </p>

              </div>

            </div>
          </div>

          <div className="container mt-4">
            <div className="copyright">
              &copy; Copyright <strong><span>Ekonopro</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}
    </>
  )
}

export default Footer