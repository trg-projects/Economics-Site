import React from 'react'

function Faq() {
  return (
    <>
    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
<section id="faq" className="faq" >
  <div className="container" data-aos="fade-up" >

    <div className="row gy-4">

      <div className="col-lg-4">
        <div className="content px-xl-5">
          <h3>Frequently Asked <strong>Questions</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>

      <div className="col-lg-8">

        <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                <span className="num">1.</span>
                Non consectetur a erat nam at lectus urna duis?
              </button>
            </h3>
            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                <span className="num">2.</span>
                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
              </button>
            </h3>
            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}
        </div>

      </div>
    </div>

  </div>
</section>
{/* <!-- End Frequently Asked Questions Section --> */}
    </>
  )
}

export default Faq