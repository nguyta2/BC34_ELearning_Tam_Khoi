import React from "react";

export default function Footer() {
  return (
    <div className="mt-4">
      <footer
        id="footer"
        className="site-footer text-left bg-black text-white"
        role="contentinfo"
        itemScope="itemscope"
        itemType="https://schema.org/WPFooter"
      >
        <div className="container">
          <div className="row pt-6">
            <div className="col-sm-4 pt-3">
              <div id="zn_mailchimp-2" className="widget widget_zn_mailchimp">
                <div className="text-base">
                  <img src="./cyberlogo-white.png" />
                  <p className="text-white">
                    CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu
                    theo dự án thực tế.
                  </p>
                  <h3 className="widgettitle title m_title m_title_ext text-white pt-6">
                    NHẬN TIN SỰ KIỆN & KHUYẾN MÃI
                  </h3>
                  <p>
                    CyberSoft sẽ gởi các khóa học trực tuyến &các chương trình
                    CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI
                    hấp dẫn đến các bạn.
                  </p>
                  <div className=" js-mcForm-result dn-widgetNewsletter-result" />
                  <form
                    method="post"
                    className="js-mcForm newsletter_subscribe getVlue_footerForm_1 newsletter-signup kl-newsletter clearfix"
                    data-url="https://cybersoft.edu.vn/"
                    name="newsletter_form"
                  >
                    <div className="inline-block">
                      <span className="float-left ">
                        <input
                          type="text"
                          name="mc_email"
                          className="nl-email kl-newsletter-field form-control js-mcForm-email "
                          placeholder="your.address@email.com"
                        />
                      </span>
                      <span className="float-left">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                          ĐĂNG KÝ
                        </button>
                      </span>
                    </div>

                    <br></br>
                    <div className="cyber__locations--wrapper">
                      <div className="cyber__locations--inner pt-6">
                        <div className="inner__item">
                          <h3 className="place  text-white">
                            {" "}
                            <i className="fa fa-map-marker-alt"></i> Cơ sở 1:
                            376 Võ Văn Tần - Quận 3
                          </h3>
                        </div>

                        <div className="inner__item">
                          <h3 className="place  text-white">
                            {" "}
                            <i className="fa fa-map-marker-alt"></i> Cơ sở 2:
                            459 Sư Vạn Hạnh - Quận 10
                          </h3>
                        </div>
                        <div className="inner__item">
                          <h3 className="place  text-white">
                            {" "}
                            <i className="fa fa-map-marker-alt"></i> Cơ sở 3: 82
                            Ung Văn Khiêm - Bình Thạnh
                          </h3>
                        </div>

                        <div className="inner__item">
                          <h3 className="place  text-white">
                            {" "}
                            <i className="fa fa-map-marker-alt"></i> Cơ sở 4: Đà
                            Nẵng - Quận Hải Châu
                          </h3>
                        </div>
                        <div className="inner__item">
                          <h3 className="place  text-white">
                            <i className="fa fa-phone"></i> 098.105.1014 -
                            098.407.5835
                          </h3>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end newsletter-signup */}
              </div>
            </div>
            <div className="col-sm-4">
              <div id="text-8" className="widget text-base">
                <h3 className="widgettitle title m_title m_title_ext text-white">
                  ĐĂNG KÍ TƯ VẤN
                </h3>
                <div className="textwidget">
                  <p />
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "#dhvcform-957 .dhvc-form-submit,#dhvcform-957 .dhvc-form-submit:disabled{background:#d4b03c}",
                    }}
                  />
                  <div
                    id="dhvcform-957"
                    className="dhvc-form-container dhvc-form-icon-pos-right dhvc-form-vertical dhvc-form-flat"
                  >
                    <form
                      noValidate
                      data-currency="USD"
                      data-currency_symbol="$"
                      data-price_format="%s%v"
                      data-scroll_to_msg={1}
                      data-ajax_reset_submit={1}
                      data-popup={0}
                      autoComplete="off"
                      data-use-ajax={1}
                      method="post"
                      className="dhvcform dhvcform-957 dhvcform-action-default invalid"
                      encType="multipart/form-data"
                      target="_self"
                    >
                      <div className="dhvc-form-inner">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner ">
                              <div className="wpb_wrapper">
                                <div className="dhvc-form-group dhvc-form-hoten-box dhvc_form_text ">
                                  <div className="dhvc-form-input  dhvc-form-has-add-on">
                                    <input
                                      className="col-sm-10"
                                      name="hoten"
                                      aria-required="true"
                                      placeholder="Họ và tên *"
                                    />
                                  </div>
                                  <span
                                    role="alert"
                                    className="dhvc-form-error"
                                  >
                                    This field is required.
                                  </span>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 12 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="dhvc-form-group dhvc-form-email-box dhvc_form_email ">
                                  <div className="dhvc-form-input  dhvc-form-has-add-on">
                                    <input
                                      className="col-sm-10"
                                      name="email"
                                      aria-required="true"
                                      placeholder="Email liên hệ *"
                                    />
                                  </div>
                                  <span
                                    role="alert"
                                    className="dhvc-form-error"
                                  >
                                    This field is required.
                                  </span>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 12 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="dhvc-form-group dhvc-form-sodienthoai-box dhvc_form_text ">
                                  <div className="dhvc-form-input  dhvc-form-has-add-on">
                                    <input
                                      className="col-sm-10"
                                      id="dhvc_form_control_sodienthoai"
                                      name="sodienthoai"
                                      aria-required="true"
                                      placeholder="Điện thoại liên hệ *"
                                    />
                                  </div>
                                  <span
                                    role="alert"
                                    className="dhvc-form-error"
                                  >
                                    This field is required.
                                  </span>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 12 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <input
                                  type="hidden"
                                  id="g-recaptcha-response_capchatuvan"
                                  name="g-recaptcha-response"
                                  className="dhvc-form-recaptcha"
                                  data-name="capchatuvan"
                                  defaultValue="03AEkXODAnSaysu8GoeK4cNRQ4B6HfCLTX1CbZErxHtnU9R_V5-d479naOjmktNrAKjjOTpn-K5mpapDp0iB8LF9xK9UOS4lGvhppky1zazNs8KX_7dmOEkQ5aUTjPVYVWJPQ_dPij-y_3AGErSFwCY50D9Tec-9qoQR-MHV2DUanLng0rbbiDpEWdimA7UDcAPOlNkP1PhIm829IDSpUCNqP-pDlfazQ96m6u4_ylXAhiYUFOoWkx-1VQGWVPTkZslR4W15-WmTQ_jn3xUqfrjXUXz8QoylQaJY08sDSB21wjTdUpUZ-YoIXp7OPuP28xnN9zGvrac99ehQv6ja5D_1VEf69gxGIHojjf-PmcoQHKmcsnTl9Jpd2gZugG01t4c7_dMqUW0KV7MfR_RTLhXTnP1OPgW5Hr8GanTh_sWL01_YkXgiVc-d_fXoIgLpgzRUaPVakxvT0ukWPrzsax4sQocggMIaUngstGmyNz1Jg7uDLSnmZb-xYgXeEOGKdnsPIkHHfx6MtDRxRSaEjyFRnY0WJnJdeF-Hes7jWoqP8UqUqsLiDH9-Ds9ybhRMm6VeRaTHVTot_D-xBr2LWFEK78u2XUIkx5Hw"
                                />
                                <div className="dhvc-form-action dhvc_form_submit_button ">
                                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    ĐĂNG KÝ TƯ VẤN
                                  </button>
                                  <p className="pt-6">
                                    Lập trình Front End Lập trình React JS Lập
                                    trình React Angular Lập trình tư duy Lập
                                    trình NodeJS Lập trình Backend Lập trình
                                    Java Web Lập trình java Spring - Java Boot
                                    Tôi Đi Code Dạo Học SEO Hà Nội ở Vietmoz Học
                                    lập trình trực tuyến
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                id="simple_facebook_page_feed_widget-3"
                className="widget widget_simple_facebook_page_feed_widget"
              >
                {/* This Facebook Page Feed was generated with Simple Facebook Page Widget & Shortcode plugin v1.5.0 - https://wordpress.org/plugins/simple-facebook-twitter-widget/ */}
                <div
                  id="simple-facebook-widget"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="fb-page fb_iframe_widget"
                    data-href="https://www.facebook.com/lophocviet/"
                    data-width={340}
                    data-height={325}
                    data-tabs="timeline"
                    data-hide-cover={0}
                    data-show-facepile={0}
                    data-hide-cta={0}
                    data-small-header={0}
                    data-adapt-container-width={1}
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340"
                  >
                    <span
                      style={{
                        verticalAlign: "bottom",
                        width: 340,
                        height: 325,
                      }}
                    >
                      <iframe
                        width="340px"
                        height="325px"
                        data-testid="fb:page Facebook Social Plugin"
                        title="fb:page Facebook Social Plugin"
                        frameBorder={0}
                        allowFullScreen={true}
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df110360dfb7908%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ff112ba2d8de5438%26relation%3Dparent.parent&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340"
                        style={{
                          border: "none",
                          visibility: "visible",
                          width: 340,
                          height: 325,
                        }}
                      />
                    </span>
                    <div style={{ width: 340 }} className="text-left">
                      <p className="pt-6 text-base">
                        {" "}
                        Anh ngữ giao tiếp - Khởi động Anh ngữ giao tiếp - Lấy đà
                        Anh ngữ giao tiếp - Bật nhảy Anh ngữ giao tiếp - Bay
                        trên không Anh ngữ giao tiếp - Tiếp đất
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Simple Facebook Page Plugin (Widget) */}
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-sm-4">
              <div id="text-9" className="widget widget_text">
                <div className="textwidget" />
              </div>
            </div>
            <div className="col-sm-4">
              <div id="text-12" className="widget widget_text">
                <div className="textwidget">
                  <div className="cyber__locations">
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div id="text-10" className="widget widget_text">
                {" "}
                <div className="textwidget" />
              </div>
            </div>
          </div>
          {/* end row */}

          {/* end row */}
        </div>
      </footer>
    </div>
  );
}
