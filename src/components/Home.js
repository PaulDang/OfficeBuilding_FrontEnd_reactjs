import React, { useEffect } from "react";
import "../css/intro.css";

const Home = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_URL_API);
    return () => {
      console.log("Intro");
    };
  }, []);

  const locations = [
    { district: 'Quận 1', buildings: '331+ tòa nhà', image: './buildings/Image.png' },
    { district: 'Quận 2', buildings: '148+ tòa nhà', image: './buildings/Image-1.png' },
    { district: 'Quận 3', buildings: '212+ tòa nhà', image: './buildings/Image-2.png' },
    { district: 'Quận 4', buildings: '251+ tòa nhà', image: './buildings/Image-3.png' },
    { district: 'Quận 5', buildings: '121+ tòa nhà', image: './buildings/Image-4.png' },
    { district: 'Quận 7', buildings: '105+ tòa nhà', image: './buildings/Image-5.png' },
    { district: 'Quận 11', buildings: '221+ tòa nhà', image: './buildings/Image-6.png' },
    { district: 'Quận 12', buildings: '311+ tòa nhà', image: './buildings/Image-7.png' },
    { district: 'Bình Thạnh', buildings: '111+ tòa nhà', image: './buildings/Image-8.png' },
    { district: 'Tân Bình', buildings: '231+ tòa nhà', image: './buildings/Image-9.png' },
    { district: 'Gò Vấp', buildings: '127+ tòa nhà', image: './buildings/Image-10.png' },
    { district: 'Thủ Đức', buildings: '219+ tòa nhà', image: './buildings/Image-11.png' },
  ];

  return (
    <>
      <div className="tb_work_wrapper">
        <div className="container-fluid">
          <div className="row">
            {/* Background Image */}
            <div className="bg-i container-fluid">
              <img
                  src="./background.png"
                  alt="background"
                  className="img-responsive"
              />
              {/* Text Content */}
              <div className="overlay-text">
                <h1>Văn phòng cho thuê</h1>
                <h1>tại TP.HCM</h1>
                <p>
                  Rentify sẽ giúp bạn nhanh chóng tìm được văn phòng cho thuê
                  phù hợp với mức giá và điều kiện thuê tốt nhất.
                </p>
                {/* Search Bar */}
                <div className="search-bar">
                  <select>
                    <option>Quận Bình Thạnh</option>
                    <option>Quận 1</option>
                    <option>Quận 3</option>
                  </select>
                  <button>Tìm kiếm</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-rentify">
            <div className="container">
              {/* Title and Intro Section */}
              <div className="intro-section">
                <h1>Giới thiệu về Rentify</h1>
                <p>
                  Rentify cung cấp dịch vụ cho thuê văn phòng chuyên nghiệp tại
                  Thành phố Hồ Chí Minh. Chúng tôi hỗ trợ khách hàng doanh
                  nghiệp tìm kiếm văn phòng cho thuê tại các tòa nhà hạng A, B,
                  C phù hợp để sử dụng một cách nhanh chóng và tiết kiệm chi
                  phí.
                </p>
              </div>

              {/* Free Consultation Section */}
              <div className="consultation-section">
                <h4>
                  Dịch vụ tư vấn hoàn toàn miễn phí, bạn sẽ được cung cấp:
                </h4>
                <div className="benefit">
                  <div className="point"></div>
                  <p>
                    Tất cả các tùy chọn có sẵn được liệt kê chỉ sau một cuộc gọi
                  </p>
                </div>
                <div className="benefit">
                  <div className="point"></div>
                  <p>Báo cáo so sánh chi tiết về phí thuê và điều kiện</p>
                </div>
                <div className="benefit">
                  <div className="point"></div>
                  <p>Làm việc trực tiếp với cơ quan xây dựng</p>
                </div>
              </div>

              {/* Statistics Section */}
              <div className="statistics-section">
                <div className="stat">
                  <h2>2</h2>
                  <p>
                    Các văn phòng chiến lược đang hoạt động tại Thành phố Hồ Chí
                    Minh
                  </p>
                </div>
                <div className="stat">
                  <h2>50+</h2>
                  <p>
                    Chuyên gia tư vấn bán hàng có hiểu biết sâu sắc về thị
                    trường.
                  </p>
                </div>
                <div className="stat">
                  <h2>350+</h2>
                  <p>
                    Các doanh nghiệp nhận được tư vấn từ Rentify hàng tháng.
                  </p>
                </div>
                <div className="stat">
                  <h2>10+</h2>
                  <p>
                    Nhiều năm kinh nghiệm trong lĩnh vực bất động sản thương
                    mại.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rentify-sections">
            {/* Service Cards Section */}
            <div className="services-section">
              <div className="service-card">
                <img src="./cho_thue_vp.png" alt="Cho thuê văn phòng"/>
                <h3>Cho thuê văn phòng</h3>
                <p>
                  Quy trình tư vấn miễn phí với lợi ích hữu ích cho doanh
                  nghiệp.
                </p>
                <a href="#">Tìm hiểu thêm →</a>
              </div>
              <div className="service-card">
                <img src="./thiet_ke_xd.png" alt="Thiết kế & Xây dựng"/>
                <h3>Thiết kế & Xây dựng</h3>
                <p>Có không gian phù hợp và hiệu quả cho công ty của bạn.</p>
                <a href="#">Tìm hiểu thêm →</a>
              </div>
              <div className="service-card">
                <img src="./vp_ky_gui.png" alt="Văn phòng ký gửi"/>
                <h3>Văn phòng ký gửi</h3>
                <p>Tiếp cận được những khách hàng doanh nghiệp phù hợp nhất.</p>
                <a href="#">Tìm hiểu thêm →</a>
              </div>
            </div>
            <hr/>
            {/* Typical Clients Section */}
            <div className="clients-section row">
              <div className="col-6">
                <h2>Khách hàng tiêu biểu</h2>
                <p>
                  Rentify tự hào là đối tác đáng tin cậy và bền vững hỗ trợ các
                  nhà đầu tư kết nối nhà đất và người thuê phù hợp.
                </p>
                <p>
                  Chúng tôi cam kết truyền tải hiệu quả giá trị của chủ nhà đến
                  khách hàng và thị trường, thúc đẩy môi trường kinh doanh phát
                  triển, bền vững và minh bạch tại Việt Nam.
                </p>
                <a href="#">Tìm hiểu thêm</a>
              </div>
              <div className="clients-logos col-6">
                {/* Add logos here */}
                <img src="./clients/image 127.png" alt="Client 1"/>
                <img src="./clients/image 128.png" alt="Client 1"/>
                <img src="./clients/image 129.png" alt="Client 1"/>
                <img src="./clients/image 130.png" alt="Client 1"/>
                <img src="./clients/image 131.png" alt="Client 1"/>
                <img src="./clients/image 132.png" alt="Client 1"/>
                <img src="./clients/image 133.png" alt="Client 1"/>
                <img src="./clients/image 134.png" alt="Client 1"/>
                <img src="./clients/image 135.png" alt="Client 1"/>
                <img src="./clients/image 136.png" alt="Client 1"/>
                <img src="./clients/image 137.png" alt="Client 1"/>
                <img src="./clients/image 138.png" alt="Client 1"/>
                <img src="./clients/image 143.png" alt="Client 1"/>
                <img src="./clients/image 144.png" alt="Client 1"/>
                <img src="./clients/image 145.png" alt="Client 1"/>
                <img src="./clients/image 146.png" alt="Client 1"/>
              </div>
            </div>
            <hr/>
            {/* Our Agents Section */}
            <div className="agents-section row">
              <div className="col-6">
                <h2>Các đại lý của chúng tôi</h2>
                <p>
                  Là những chuyên gia đầy đặn kinh nghiệm trong lĩnh vực cho
                  thuê văn phòng, các đại lý tại Rentify đã hỗ trợ khách hàng
                  với sự chính trực và tận tụy.
                </p>
                <p>
                  Chúng tôi liên tục theo dõi và nhanh chóng cập nhật về biến
                  động giá thuê và không gian văn phòng có sẵn. Chúng tôi cung
                  cấp danh sách đầy đủ, bao gồm cả điểm mạnh và điểm yếu để chất
                  lượng của từng nhà và hiệu quả được ưu tiên dựa trên nhu cầu
                  của khách hàng.
                </p>
                <a href="#">Xem tất cả đại lý</a>
              </div>
              <div className="agents-images col-6">
                {/* Add agent images */}
                <img src="./agents/Image.png" alt="Agent 1"/>
                <img src="./agents/Image-1.png" alt="Agent 2"/>
                <img src="./agents/Image-2.png" alt="Agent 3"/>
                <img src="./agents/Image-3.png" alt="Agent 3"/>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-auto px-4 py-8 buildings">
            <h2 className="text-3xl font-bold text-start mb-8 py-4">Văn phòng tại TP.HCM</h2>
            <div className="row p-3">
              {locations.map((location, index) => (
                  <div key={index} className="col-md-3 col-sm-6 mb-4">
                    <div className="text-center">
                      <div className="mb-3">
                        <img
                            src={location.image}
                            alt={`${location.district} buildings`}
                            className="rounded-lg w-full h-auto"
                            style={{maxWidth: '200px', margin: '0 auto'}}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-purple-900">{location.district}</h3>
                      <p className="text-gray-600">{location.buildings}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
